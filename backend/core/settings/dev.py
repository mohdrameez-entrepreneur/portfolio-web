from .base import *

DEBUG = True

# Use local sqlite for development by default to allow offline/local development without depending on remote Supabase status.
# Set USE_REMOTE_DB=true in backend/.env if you want to connect to remote Supabase pooler.
if os.getenv('USE_REMOTE_DB', 'false').lower() != 'true':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }