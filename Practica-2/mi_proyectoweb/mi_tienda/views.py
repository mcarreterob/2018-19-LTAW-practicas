# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

#from mi_tienda.models import Product
from mi_tienda.models import Lebron
from mi_tienda.models import Circulo
from mi_tienda.models import Funcion
from mi_tienda.models import Metamorfosis
from mi_tienda.models import Teriyaki
from mi_tienda.models import Langui
from mi_tienda.models import Concord
from mi_tienda.models import Infrared
from mi_tienda.models import Noventa

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def zapatillas_view (request):
    return render(request, "zapatillas.html", {})

def libros_view (request):
    return render(request, "libros.html", {})

def discos_view (request):
    return render(request, "discos.html", {})

# ZAPATILLAS
def zapatilla1_view (request):
    return render(request, "zapa1.html", {})

def zapatilla2_view (request):
    return render(request, "zapa2.html", {})

def zapatilla3_view (request):
    return render(request, "zapa3.html", {})

# LIBROS
def libro1_view (request):
    return render(request, "libro1.html", {})

def libro2_view (request):
    return render(request, "libro2.html", {})

def libro3_view (request):
    return render(request, "libro3.html", {})

# DISCOS
def disco1_view (request):
    return render(request, "disco1.html", {})

def disco2_view (request):
    return render(request, "disco2.html", {})

def disco3_view (request):
    return render(request, "disco3.html", {})

"""
def list(request):
    objects = Product.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)
"""
