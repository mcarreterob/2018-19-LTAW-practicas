# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from mi_tienda.models import Disco
from mi_tienda.models import Libro
from mi_tienda.models import Zapatilla

# Register your models here.
admin.site.register(Disco)
admin.site.register(Libro)
admin.site.register(Zapatilla)
