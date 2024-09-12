from typing import Any
from django.db import models

class Genre(models.Model):
    genre = models.CharField(max_length=255)

class Movies(models.Model):
    title = models.CharField(max_length=255)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    year = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    age_rating = models.CharField(max_length=255)

