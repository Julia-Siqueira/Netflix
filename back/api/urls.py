from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.list_movies),
    path('movieslist/', views.MoviesViews.as_view()),
    path('movie/<int:pk>', views.MoviesDetailViews.as_view())
]

print('teste')