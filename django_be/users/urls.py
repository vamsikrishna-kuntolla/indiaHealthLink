from django.urls import path

from .views import signup, login

urlpatterns=[
    path("api/v1/signup/", signup),
    path("api/v1/login/", login)

]