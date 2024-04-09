from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise Exception("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        if not email:
            raise Exception("Email is required")

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email=email, password=password, ** extra_fields)

class User(AbstractUser):
    email= models.CharField(max_length=255, unique=True)
    username = None
    USERNAME_FIELD='email'
    REQUIRED_FIELDS = []

    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    objects = UserManager()

    def __str__(self):
        return self.email
