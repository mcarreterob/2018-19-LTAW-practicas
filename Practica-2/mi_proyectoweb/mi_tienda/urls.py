from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    url(r'^list/', views.zapatillas_view),
    url(r'^list/', views.libros_view),
    url(r'^list/', views.discos_view),
    url(r'^list/', views.zapatilla1_view),
    url(r'^list/', views.zapatilla2_view),
    url(r'^list/', views.zapatilla3_view),
    url(r'^list/', views.libro1_view),
    url(r'^list/', views.libro2_view),
    url(r'^list/', views.libro3_view),
    url(r'^list/', views.disco1_view),
    url(r'^list/', views.disco2_view),
    url(r'^list/', views.disco3_view),
]
