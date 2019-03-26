# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Lebron (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Circulo (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Funcion (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Metamorfosis (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Teriyaki (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Langui (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Concord (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Infrared (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)

class Noventa (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return (self.name)
