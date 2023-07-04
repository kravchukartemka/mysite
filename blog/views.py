from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .form import UserForm
from django.http import Http404
def post_detail(request, id):
    post = Post.objects.get(id=id)
    return render(request, 'post.html', {'post': post})

def post(self, request):
    form = UserForm(request.POST)
    if form.is_valid():
        form = form.save(commit=False)
        form.save()
        return render(request, 'registration.html')
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