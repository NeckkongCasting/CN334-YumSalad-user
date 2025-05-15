#!/usr/bin/env bash
# exit on error
set -o errexit

# Install python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser automatically
python manage.py shell -c "
from django.contrib.auth import get_user_model;
User = get_user_model();
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 
                                'admin@example.com', 
                                'Admin123!')
"

# Collect static files
python manage.py collectstatic --no-input 