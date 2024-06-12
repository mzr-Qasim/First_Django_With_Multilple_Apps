from django.urls import path
from .views import aboutPage

urlpatterns = [
    # Other URL patterns
    path('doctors/', aboutPage, ),
]