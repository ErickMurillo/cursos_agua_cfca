# Generated by Django 3.0.3 on 2020-02-20 14:38

import aprendizaje.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cursos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=250, verbose_name='Nombre del curso')),
                ('slug', models.SlugField(editable=False, max_length=250, unique=True)),
                ('imagen', models.FileField(blank=True, null=True, upload_to='images')),
                ('imagen_banner', models.FileField(blank=True, null=True, upload_to='banner')),
                ('descripcion', models.TextField(verbose_name='Descripción del curso')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('activo', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Curso',
                'verbose_name_plural': 'Cursos',
                'ordering': ('-fecha',),
            },
        ),
        migrations.CreateModel(
            name='Modulos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=250, verbose_name='Nombre del tema')),
                ('order', aprendizaje.fields.OrderField(blank=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modules', to='aprendizaje.Cursos')),
            ],
            options={
                'verbose_name': 'Tema',
                'verbose_name_plural': 'Temas',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Contenidos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=250, verbose_name='Nombre de la lección')),
                ('contenido', models.TextField(verbose_name='Contenido de la lección')),
                ('order', aprendizaje.fields.OrderField(blank=True)),
                ('url_video', models.FileField(blank=True, null=True, upload_to='')),
                ('nombre_video', models.CharField(blank=True, max_length=250, null=True, verbose_name='Nombre del video')),
                ('modulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contenidos', to='aprendizaje.Modulos')),
            ],
            options={
                'verbose_name': 'Lección',
                'verbose_name_plural': 'Lecciones',
                'ordering': ['order'],
            },
        ),
    ]
