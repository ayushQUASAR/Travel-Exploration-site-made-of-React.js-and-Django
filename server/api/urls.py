from django.urls import path,include
from rest_framework import routers
from api.views import *



router=routers.DefaultRouter()
router.register(r'catalog',ReactViewset)
router.register(r'ImageCatalog',ImageViewset)
router.register(r'Booking',BookViewset)
urlpatterns = [

    path('', include(router.urls)),

]