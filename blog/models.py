from django.db import models
from django.utils import timezone
# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_activ = models.BooleanField()
    created_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=Post.Status.PUBLISHED)
class Post(models.Model):

    DoesNotExist = None

    class Status(models.TextChoices):
        DRAFT = 'DF', 'Draft'
        PUBLISHED = 'PB', 'Published'
    title = models.CharField(max_length=25)
    slug = models.SlugField(max_length=50, unique=True)
    author = models.ForeignKey('User', on_delete=models.CASCADE)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2,
                              choices=Status.choices,
                              default=Status.DRAFT)

    objects = models.Manager()  # менеджер, применяемый по умолчанию
    published = PublishedManager()  # конкретно-прикладной менеджер
    class Meta:
        ordering = ['-publish']
        indexes = [
            models.Index(fields=['-publish']),
        ]
    def __str__(self):
        return self.title



class Role(models.Model):
    class Role(models.TextChoices):
        USER = 'US', 'User'
        ADMIN = 'AD', 'Admin'
    role = models.CharField(max_length=2,
                              choices=Role.choices,
                              default=Role.USER, unique=True)

    def __str__(self):
        return self.role

class User_role(models.Model):
    user_id = models.OneToOneField('User', on_delete=models.CASCADE, primary_key=True)
    role_id = models.OneToOneField('Role', on_delete=models.CASCADE)


