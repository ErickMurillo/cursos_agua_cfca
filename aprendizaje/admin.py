# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from nested_inline.admin import NestedStackedInline, NestedTabularInline, NestedModelAdmin
from .models import Cursos, Modulos, Contenidos
from .forms import CursosAdminForm, ContenidosAdminForm

class InlineContenidos(NestedStackedInline):
    form = ContenidosAdminForm
    model = Contenidos
    extra = 1
    fk_name = 'modulo'
    can_delete = True

class TemasModulos(NestedModelAdmin):
    #model = Modulos
    #extra = 1
    inlines = [InlineContenidos]
    list_display = ('titulo', 'curso')
    search_fields = ('titulo',)
    list_filter = ('curso',)
    #can_delete = True

class CursosAdmin(NestedModelAdmin):
    form = CursosAdminForm
    list_display = ('titulo','fecha',)
    list_filter = ('fecha',)
    #inlines = [InlineModulos]

# Register your models here.
admin.site.register(Cursos, CursosAdmin)
admin.site.register(Modulos, TemasModulos)
#admin.site.register(Contenidos)
