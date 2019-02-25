from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Template, Context
from django.shortcuts import render

def mi_funcion(request):
   html = "Hola! Esto es una prueba"

   return HttpResponse(html)

def mi_producto(request, param):
    numero = int(param)
    html = "Acceso al producto: %i" % numero;
    return HttpResponse(html)

PLANTILLA = """
<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>
      <p>Bienvenido a mi tienda, {{user}}</p>
   </body>
</html>
"""

def saludo(request):
    t = Template(PLANTILLA)
    c = Context({'user': 'Epic saxo guy'})

    html = t.render(c)
    return HttpResponse(html)

def index(request):
    return render(request, 'main.html', {'user':'Obijuan'})
