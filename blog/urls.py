from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('', post_list, name='post_list'),
    path('contact', page_handler_contact),
    path('home', page_handler_home),
    path('blog', post_list),
    path('about', page_handler_about),
    path('blog/<int:id>/', post_detail),
]