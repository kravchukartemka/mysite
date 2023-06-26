from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('', page_handler),
    path('contact', page_handler_contact),
    path('home', page_handler_home),
    path('blog', page_handler),
    path('about', page_handler_about)
]