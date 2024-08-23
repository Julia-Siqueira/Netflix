from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.home, name='home'),
    path('movies/', views.list_movies),
    path('movieslist/', views.MoviesViews.as_view()),
    path('movie/<int:pk>', views.MoviesDetailViews.as_view()),  # com a PK, acessamos livros individualmente
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
