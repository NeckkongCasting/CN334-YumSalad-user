#!/usr/bin/env bash
# exit on error
set -o errexit

# Install python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create or update superuser
python manage.py shell -c "
from django.contrib.auth import get_user_model;
User = get_user_model();
try:
    user = User.objects.get(username='admin')
    user.set_password('Admin123!')
    user.save()
except User.DoesNotExist:
    User.objects.create_superuser('admin', 'admin@example.com', 'Admin123!')
print('Superuser password has been reset/created successfully')
"

# Load fixture data
echo "Loading fixture data..."
python manage.py loaddata product_data.json
echo "Fixture data loaded successfully"

# Collect static files
python manage.py collectstatic --no-input 