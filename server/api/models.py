from django.db import models
import uuid
# Create your models here.

class catalog(models.Model):
    name=models.CharField(max_length=100)
    sex=models.CharField(max_length=100,default='N/A')

class ImageModel(models.Model):
    image = models.ImageField(upload_to='images/')
    image_type = models.CharField(max_length=255)
    location=models.CharField(max_length=100,default='N/A')
    
class Booking(models.Model):
    transaction_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=100) 
    dest = models.CharField(max_length=100,default='N/A')
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Adjust the parameters based on your requirements
    checkin_time = models.CharField(max_length=100,default='N/A')
    user_name = models.CharField(max_length=100, unique=True) 
    checkout_time=models.CharField(max_length=100,default='N/A')