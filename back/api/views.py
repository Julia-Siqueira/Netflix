from django.shortcuts import render
from .models import Movies
from .serializer import MoviesSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view # responsible for the methods we are going to use (POST, GET...)
from rest_framework.generics import ListCreateAPIView

@api_view(['GET', 'POST'])
def list_movies(request):
    if request.method == 'GET':
        queryset = Movies.objects.all()
        serializer = MoviesSerializer(queryset, many=True) # turning into a JSON file, which is the main one in backend programming
    return Response(serializer.data)

class MoviesViews(ListCreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer
    