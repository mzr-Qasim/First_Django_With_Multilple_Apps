from django.urls import path
from .views import homePage

urlpatterns = [
    # Other URL patterns
    path('', homePage, name='Home'),
]