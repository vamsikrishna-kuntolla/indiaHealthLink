from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from users.models import User
# Create your views here.


# def hello(request):
#     return render(request, "index.html")

@api_view(["POST"])
def signup(request):
    try:
        request_data = request.data.copy()

        if any([each not in request_data.keys() for each in ["email", "password", "confirmationPassword"] if each]):
            return Response("Email and Password is required", status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=request_data["email"]).exists():
            return Response("Email already exists", status.HTTP_400_BAD_REQUEST)

        if not request_data["password"] == request_data["confirmationPassword"]:
            return Response("Password Does not match", status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create(email=request_data["email"])
        user.set_password(request_data["password"])
        user.save()

        return Response("Success", status.HTTP_201_CREATED)

    except Exception as e:
        print(str(e))
        return Response(str(e), status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def login(request):
    try:
        request_data = request.data.copy()

        if any([each not in request_data.keys() for each in ["email", "password"] if each]):
            return Response("Email and Password is required", status.HTTP_400_BAD_REQUEST)
        
        if not User.objects.filter(email=request_data["email"]).exists():
            return Response("User Not found", status.HTTP_400_BAD_REQUEST)

        user = authenticate(request=request, email=request_data["email"], password=request_data["password"])
        
        if user:
            token, created_at = Token.objects.get_or_create(user=user)
            context = {"token":token.key}

            return Response(context, status.HTTP_200_OK)
        else:
            return Response("Invalid credentials", status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        print(str(e))
        return Response(str(e), status.HTTP_400_BAD_REQUEST)


