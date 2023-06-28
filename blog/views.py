from django.shortcuts import render
from .models import Post
from django.http import Http404
def post_detail(request, id):
    try:
        post = Post.published.get(id=id)
    except Post.DoesNotExist:
        raise Http404("No Post found.")
    return render(request,
            'blog2.html',
            {'post': post})
def post_list(request):
    posts = Post.published.all()
    return render(request,
        'blog2.html',
        {'posts': posts})
# Create your views here.
def page_handler(request):
    return render(request, 'blog2.html')

def page_handler_contact(request):
    return render(request, 'contact.html')

def page_handler_home(request):
    return render(request, 'home.html')

def page_handler_about(request):
    return render(request, 'about.html')