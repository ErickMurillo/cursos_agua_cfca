"""
Django settings for cursos_agua_cfca project.

Generated by 'django-admin startproject' using Django 3.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

from .local_settings import *

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '*e(%c#clmzz$g_4=3jp3d5wediq*t*2(70-w$tgg+!k$2s41y&'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'aprendizaje',
    'ckeditor',
    'ckeditor_uploader',
    'nested_inline',
    'sorl.thumbnail',
    'embed_video',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'cursos_agua_cfca.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'cursos_agua_cfca.wsgi.application'




# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'es-ni'

TIME_ZONE = 'America/Managua'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

MEDIA_ROOT = os.environ.get('MEDIA_ROOT', os.path.join(BASE_DIR, 'media'))
MEDIA_URL = '/media/'

STATIC_ROOT = os.environ.get('STATIC_ROOT', os.path.join(BASE_DIR, 'static'))

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static_media"),
]

CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_IMAGE_BACKEND = 'pillow'
CKEDITOR_BROWSE_SHOW_DIRS = True
CKEDITOR_RESTRICT_BY_DATE = True

CKEDITOR_CONFIGS = {
   'default': {

        'removePlugins':  'stylesheetparser',
        'allowedContent': True,
        'extraAllowedContent': 'iframe[*]',
        'extraAllowedContent': 'p(*)',
        'extraAllowedContent': 'blockquote[*]',
        'extraAllowedContent': 'script[*]',
        'extraPlugins': ','.join([
           'image2',
           'uploadimage', # the upload image feature
           # your extra plugins here
           'div',
           'autolink',
           'embed',
           'autoembed',

           'autogrow',
           # 'devtools',
           'widget',
           'lineutils',
           'clipboard',
           'dialog',
           'dialogui',
           'elementspath'
       ]),
       'toolbar': [
           { 'name': 'document', 'groups': [ 'mode', 'document', 'doctools' ], 'items': [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
           { 'name': 'clipboard', 'groups': [ 'clipboard', 'undo' ], 'items': [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
           { 'name': 'editing', 'groups': [ 'find', 'selection', 'spellchecker' ], 'items': [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
           #{ 'name': 'forms', 'items': [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
           '/',
           { 'name': 'basicstyles', 'groups': [ 'basicstyles', 'cleanup' ], 'items': [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
           { 'name': 'paragraph', 'groups': [ 'list', 'indent', 'blocks', 'align', 'bidi' ], 'items': [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
           { 'name': 'links', 'items': [ 'Link', 'Unlink', 'Anchor' ] },
           { 'name': 'insert', 'items': [ 'Image', 'Youtube', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
           '/',
           { 'name': 'styles', 'items': [ 'Styles', 'Format', 'Font', 'FontSize' ] },
           { 'name': 'colors', 'items': [ 'TextColor', 'BGColor' ] },
           { 'name': 'tools', 'items': [ 'Maximize', 'ShowBlocks', ] },
            {
   }

       ],
       'height': '400px',
       'width': 'auto',

   },

}

FILE_UPLOAD_PERMISSIONS = 0o644
