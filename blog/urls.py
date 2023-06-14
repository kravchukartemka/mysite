from django.contrib import admin
from django.urls import path
from views import page_handler
urlpatterns = [
    path('a', page_handler),
]