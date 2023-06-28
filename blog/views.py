from django.shortcuts import render, get_object_or_404
from .models import Post
from django.http import Http404
def post_detail(request, id):
    post = get_object_or_404(Post, id=id, status=Post.Status.PUBLISHED)
    return render(request, 'post.html', {'post': post})
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