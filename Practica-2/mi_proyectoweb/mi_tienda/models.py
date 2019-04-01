# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Disco (models.Model):
    image = models.ImageField(upload_to='static', default = 0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    file = models.CharField(max_length=200, default = 0)

    def __str__(self):
        return (self.name)

class Libro (models.Model):
    image = models.ImageField(upload_to='static', default = 0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    file = models.CharField(max_length=200, default = 0)

    def __str__(self):
        return (self.name)

class Zapatilla (models.Model):
    image = models.ImageField(upload_to='static', default = 0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    file = models.CharField(max_length=200, default = 0)

    def __str__(self):
        return (self.name)
