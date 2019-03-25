# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Product

# Create your views here.
def home_view (request):
    return render(request, "index.html", {'x': x})

def zapatillas_view (request):
    return render(request, "zapatillas.html", {})

def libros_view (request):
    return render(request, "libros.html", {})

def discos_view (request):
    return render(request, "discos.html", {})

# ZAPATILLAS
def zapatilla1_view (request):
    return render(request, "zapatilla1.html", {})

def zapatilla2_view (request):
    return render(request, "zapatilla2.html", {})

def zapatilla3_view (request):
    return render(request, "zapatilla3.html", {})

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
