from typing import Any
from django.db import models

class Age_rating(models.Model):
    age_rating = models.CharField(max_length=255)

class Genre(models.Model):
    genre = models.CharField(max_length=255)

class Movies(models.Model):
    title = models.CharField(max_length=255)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    year = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    age_rating = models.ForeignKey(Age_rating, on_delete=models.CASCADE)
    # urlImage = models.CharField(max_length=255)
    # image = models.ImageField(upload_to='capas/', blank=True, null=True)