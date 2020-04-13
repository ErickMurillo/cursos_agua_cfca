# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from sorl.thumbnail import ImageField
from solo.models import SingletonModel

class SiteConfiguration(SingletonModel):
    site_name = models.CharField(max_length=255, default='Site Name')
    maintenance_mode = models.BooleanField(default=False)
    foto_proposito = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    texto_corto_proposito = models.TextField(null=True, blank=True)
    foto_fondo_index_aprendizaje = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    foto_fondo_footer = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    anio_copyright = models.CharField('Año del Copyright', max_length=50)
    # foto_fondo_flatpage = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_noticias = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    foto_fondo_aprende = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_documentos = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_videos = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_audios = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_galerias = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_eventos = ImageField(upload_to='foto/proposito/', null=True, blank=True)
    # foto_fondo_vida = ImageField(upload_to='foto/proposito/', null=True, blank=True)

    def __unicode__(self):
        return u"Configuración del sitio"

    class Meta:
        verbose_name = "Configuración del sitio"
