# Generated by Django 3.2.4 on 2021-06-27 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=90)),
                ('desc', models.TextField()),
                ('date', models.DateField()),
            ],
        ),
    ]
