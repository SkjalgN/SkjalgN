# Generated by Django 4.2.6 on 2023-10-24 13:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Project',
            new_name='Portfolio',
        ),
    ]