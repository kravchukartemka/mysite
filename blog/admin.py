from django.contrib import admin
from .models import Post, User, Role, User_role

admin.site.register(Post)
admin.site.register(User)
admin.site.register(Role)
admin.site.register(User_role)
# Register your models here.
