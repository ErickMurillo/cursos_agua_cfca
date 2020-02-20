from django.urls import path

from . import views

urlpatterns = [
    path('', views.CourseListView.as_view(), name="list_course"),
    path('<slug>/', views.CourseDetailView.as_view(), name="detail_course"),
    path('seguir/<id>/', views.seguir_curso, name='seguir_curso'),
	path('dejar/seguir/<id>/', views.dejar_seguir_curso, name='dejar_seguir_curso'),
]
