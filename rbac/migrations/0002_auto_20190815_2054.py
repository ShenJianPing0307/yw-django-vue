# Generated by Django 2.0 on 2019-08-15 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rbac', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='position',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
