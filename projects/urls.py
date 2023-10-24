from django.urls import path
from . import views

urlpatterns = [
    # path('detail/<int:item_id>/', views.detail, name='detail'),
    # path('list/', views.list, name='list'),
    path('', views.home, name='home')
]