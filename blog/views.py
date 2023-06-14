from django.shortcuts import render

# Create your views here.
def page_handler(request):
    return render(request, 'index.html')
