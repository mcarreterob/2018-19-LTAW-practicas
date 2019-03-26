from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    url(r'^zapatillas', views.zapatillas_view),
    url(r'^libros', views.libros_view),
    url(r'^discos', views.discos_view),
    url(r'^zapa1', views.zapatilla1_view),
    url(r'^zapa2', views.zapatilla2_view),
    url(r'^zapa3', views.zapatilla3_view),
    url(r'^libro1', views.libro1_view),
    url(r'^libro2', views.libro2_view),
    url(r'^libro3', views.libro3_view),
    url(r'^disco1', views.disco1_view),
    url(r'^disco2', views.disco2_view),
    url(r'^disco3', views.disco3_view),
]
