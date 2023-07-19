from django.db import models

class News(models.Model):
  date = models.DateField()
  title = models.CharField(max_length=50)
  text = models.TextField()

  def __str__(self):
    return self.title

class Column(models.Model):
  date = models.DateField()
  title = models.CharField(max_length=50)
  text = models.TextField()

  def __str__(self):
    return self.title