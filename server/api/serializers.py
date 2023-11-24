from rest_framework import serializers
from .models import *

class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model=catalog
        fields='__all__'


class ImageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields='__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields='__all__'

