from django.shortcuts import render
from .models import Movies
from .serializer import MoviesSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view # responsible for the methods we are going to use (POST, GET...)
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status

@api_view(['GET', 'POST'])
def list_movies(request):
    if request.method == 'GET':
        queryset = Movies.objects.all()
        serializer = MoviesSerializer(queryset, many=True) # turning into a JSON file, which is the main one in backend programming
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MoviesSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_RESPONSE)


class MoviesViews(ListCreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class MoviesDetailViews(RetrieveUpdateDestroyAPIView):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer
    