# Generated by Django 4.1.2 on 2023-02-17 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dent_site', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='H1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('h1', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='H2',
        ),
        migrations.DeleteModel(
            name='H3',
        ),
        migrations.DeleteModel(
            name='Menu',
        ),
        migrations.DeleteModel(
            name='News',
        ),
        migrations.DeleteModel(
            name='Text',
        ),
    ]
