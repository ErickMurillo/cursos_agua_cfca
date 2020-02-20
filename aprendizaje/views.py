# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView, DetailView
from django.contrib.auth import login, authenticate

from .models import Cursos
from .forms import SignUpForm

from django.contrib.auth.decorators import login_required

# Create your views here.

class CourseListView(ListView):
    model = Cursos
    queryset = Cursos.objects.order_by('id')
    paginate_by = 9

class CourseDetailView(DetailView):
    model = Cursos


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('list_course')
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})

@login_required
def seguir_curso(request, id):
    curso = Cursos.objects.get(id = id)
    curso.usuarios_siguiendo.add(request.user.id)
    return redirect('detail_course', slug=curso.slug)

@login_required
def dejar_seguir_curso(request, id):
    curso = Cursos.objects.get(id = id)
    curso.usuarios_siguiendo.remove(request.user.id)
    return redirect('detail_course', slug=curso.slug)