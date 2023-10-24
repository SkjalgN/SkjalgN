from django.db import models

class Portfolio(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/images/')
    url = models.URLField(blank=True)