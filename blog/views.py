from django.shortcuts import render

# Create your views here.
def page_handler(request):
    return render(request, 'blog2.html')

def page_handler_contact(request):
    return render(request, 'contact.html')

def page_handler_home(request):
    return render(request, 'home.html')

def page_handler_about(request):
    return render(request, 'about.html')