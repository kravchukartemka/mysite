from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('', page_handler_home, name='page_handler_home'),
    path('registr', registr, name = 'registr'),
    path('contact', page_handler_contact),
    path('home', page_handler_home),
    path('blog', post_list),
    path('about', page_handler_about),
    path('blog/<int:id>/', post_detail),
]