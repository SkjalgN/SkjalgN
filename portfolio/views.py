from django.shortcuts import render
from .models import Portfolio

def custom_404(request, exception):
    return render(request, '404.html', {}, status=404)

def custom_500(request):
    return render(request, '500.html', {}, status=500)

def portfolio(request):
    projects = Portfolio.objects.all()
    return render(request, 'portfolio.html', {'portfolio': projects})



def project_detail(request, pk):
    project = Portfolio.objects.get(pk=pk)
    return render(request, 'project_detail.html', {'project': project})