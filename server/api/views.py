from django.shortcuts import render
# from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.response import Response
# Create your views here.

class ReactViewset(viewsets.ModelViewSet):
  queryset=catalog.objects.all()
  serializer_class=CatalogSerializer

class ImageViewset(viewsets.ModelViewSet):
  queryset=ImageModel.objects.all()
  serializer_class=ImageModelSerializer

class BookViewset(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class=BookingSerializer  