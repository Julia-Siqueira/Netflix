from rest_framework import serializers
from .models import Movies, Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'genre']

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['id', 'title', 'genre', 'year', 'language', 'age_rating'] # esses fields estão de acordo com o modelo do arquivo Models

        
