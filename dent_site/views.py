from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.core.paginator import Paginator
from .consts import ITEM_PER_PAGE
from .models import News, Column

def home(request):
    contents = News.objects.order_by('date').reverse()[0:3]
    context = {
        'contents': contents,
    }
    return render(request, 'dent_site/home.html', context)

def concept(request):
    return render(request, 'dent_site/concept.html')

def first(request):
    return render(request, 'dent_site/first.html')

def staff(request):
    return render(request, 'dent_site/staff.html')

def general(request):
    return render(request, 'dent_site/general.html')

def pediatric(request):
    return render(request, 'dent_site/pediatric.html')

def treatment(request):
    return render(request, 'dent_site/treatment.html')

def cosmetic(request):
    return render(request, 'dent_site/cosmetic.html')

def orthodontics(request):
    return render(request, 'dent_site/orthodontics.html')

def implant(request):
    return render(request, 'dent_site/implant.html')

def recruit(request):
    return render(request, 'dent_site/recruit.html')

def access(request):
    return render(request, 'dent_site/access.html')

def hkc(request):
    return render(request, 'dent_site/hkc.html')

def privacy(request):
    return render(request, 'dent_site/privacy.html')

class ListNewsView(ListView):
    template_name = 'dent_site/news.html'
    model = News
    def get_queryset(self):
        return News.objects.order_by('-date')
    paginate_by = ITEM_PER_PAGE

class DetailNewsView(DetailView):
    template_name = 'dent_site/news_detail.html'
    model = News

class ListColumnView(ListView):
    template_name = 'dent_site/column.html'
    model = Column
    def get_queryset(self):
        return Column.objects.order_by('-date')
    paginate_by = ITEM_PER_PAGE

class DetailColumnView(DetailView):
    template_name = 'dent_site/column_detail.html'
    model = Column

# def news(request):
#     object_list = News.objects.order_by('-date')
#     paginator = Paginator(object_list, ITEM_PER_PAGE)
#     page_number = request.GET.get('page', 1)
#     page_obj = paginator.page(page_number)
#     return render(request, 'dent_site/news.html', {'object_list': object_list, 'page_obj': page_obj})

# def column(request):
#     object_list = Column.objects.order_by('-date')
#     paginator = Paginator(object_list, ITEM_PER_PAGE)
#     page_number = request.GET.get('page', 1)
#     page_obj = paginator.page(page_number)
#     return render(request, 'dent_site/column.html', {'object_list': object_list, 'page_obj': page_obj})
