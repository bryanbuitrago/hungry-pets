from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('pets/', views.getPets, name="pets"),
    path('pet/<int:pk>', views.getPet, name="pet")
]
