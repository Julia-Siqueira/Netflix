from django.db import models

class Movies(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    age_rating = models.CharField(max_length=255)
