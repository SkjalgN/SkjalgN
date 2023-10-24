from django.contrib import admin
from django.urls import path, include
from . import views
from django.views.generic import RedirectView


urlpatterns = [
    path('', RedirectView.as_view(url='home'), name='redirect-to-home'),
    path('home', views.home, name='home'),
    path('contact', views.contact, name='contact'),
    path('portfolio', include('portfolio.urls')),
]