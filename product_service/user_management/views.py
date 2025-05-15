from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from user_management.models import Customer
from user_management.serializers import CustomerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import logging

logger = logging.getLogger(__name__)

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        logger.info(f"Attempting to register user: {data.get('username')}")
        
        try:
            # Check if user already exists
            if User.objects.filter(username=data['username']).exists():
                logger.warning(f"Username already exists: {data.get('username')}")
                return JsonResponse({"error": "Username already exists"}, status=400)
            
            # Create user
            new_user = User.objects.create_user(
                username=data['username'],
                password=data['password'],
                is_active=True  # Ensure user is active
            )
            new_user.save()
            logger.info(f"Created new user: {new_user.username}")
            
            # Create customer profile
            data['user'] = new_user.id
            customer_serializer = CustomerSerializer(data=data)
            
            if customer_serializer.is_valid():
                customer_serializer.save()
                logger.info(f"Created customer profile for user: {new_user.username}")
                return JsonResponse(customer_serializer.data, status=201)
            else:
                logger.error(f"Invalid customer data for user {new_user.username}: {customer_serializer.errors}")
                new_user.delete()
                return JsonResponse({"error": customer_serializer.errors}, status=400)
                
        except Exception as e:
            logger.error(f"Error during registration: {str(e)}")
            # If user was created but customer creation failed, cleanup
            if 'new_user' in locals():
                new_user.delete()
            return JsonResponse({"error": str(e)}, status=400)
            
    return JsonResponse({"error": "Method not allowed"}, status=405)

class CustomerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        customer_data = Customer.objects.get(user=request.user)
        customer_serializer = CustomerSerializer(customer_data)
        content = {
            'data': customer_serializer.data
        }
        return Response(content)    