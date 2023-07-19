from django.urls import path
from . import views

app_name = 'dent_site'

urlpatterns = [
  path('', views.home, name='home'),
  path('concept/', views.concept, name='concept'),
  path('first_visit/', views.first, name='first'),
  path('staff/', views.staff, name='staff'),
  path('general/', views.general, name='general'),
  path('pediatric', views.pediatric, name='pediatric'),
  path('treatment', views.treatment, name='treatment'),
  path('cosmetic', views.cosmetic, name='cosmetic'),
  path('orthodontics', views.orthodontics, name='orthodontics'),
  path('implant', views.implant, name='implant'),
  path('reqruit', views.recruit, name='recruit'),
  path('access', views.access, name='access'),
  path('hkc', views.hkc, name='hkc'),
  path('privacy', views.privacy, name='privacy'),
  path('news/', views.ListNewsView.as_view(), name='news'),
  path('news/<int:pk>/detail', views.DetailNewsView.as_view(), name='news_detail'),
  path('column', views.ListColumnView.as_view(), name='column'),
  path('column/<int:pk>/detail', views.DetailColumnView.as_view(), name='column_detail'),
]