from django.contrib import admin
from django.urls import path, include
from . import views
from django.views.generic import RedirectView


urlpatterns = [
    #make the empty path route to /home
    path('', RedirectView.as_view(url='home', permanent=True)),
    path('home', views.home, name='home'),
    path('chess', views.chess, name='chess'),
]