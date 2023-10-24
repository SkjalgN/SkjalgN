from django.shortcuts import render
from .models import Project

def project_index(request):
    projects = Project.objects.all()
    return render(request, 'projects/project_index.html', {'projects': projects})
def home(request):
    return render(request, 'home.html')

def custom_404(request, exception):
    return render(request, '404.html', {}, status=404)

def custom_500(request):
    return render(request, '500.html', {}, status=500)