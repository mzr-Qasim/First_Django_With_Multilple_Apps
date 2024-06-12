from django.urls import path
from .views import doctorsPage

urlpatterns = [
    # Other URL patterns
    path('doctors/', doctorsPage, ),
]