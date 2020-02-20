from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import Cursos, Contenidos

class CursosAdminForm(forms.ModelForm):
    descripcion = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Cursos
        fields = '__all__'


class ContenidosAdminForm(forms.ModelForm):
    contenido = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Contenidos
        fields = '__all__'

class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30,
                                 required=False,
                                 help_text='Opcional.')
    last_name = forms.CharField(max_length=30,
                                required=False,
                                help_text='Opcional.')
    email = forms.EmailField(max_length=254,
                             help_text='Requerido.')

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name',
                  'email', 'password1', 'password2', )
