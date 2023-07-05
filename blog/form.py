from django import forms
from .models import User,Post

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']

class AddPost(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'author', 'body', 'status']