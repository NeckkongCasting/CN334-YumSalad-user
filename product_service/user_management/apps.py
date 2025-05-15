from django.apps import AppConfig
from django.conf import settings
from django.contrib.auth import get_user_model

class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'YumSalad' 

    def ready(self):
        User = get_user_model()

        username = settings.DJANGO_SUPERUSER_USERNAME
        email = settings.DJANGO_SUPERUSER_EMAIL
        password = settings.DJANGO_SUPERUSER_PASSWORD

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username, email=email, password=password)
            print(f"Superuser {username} created")