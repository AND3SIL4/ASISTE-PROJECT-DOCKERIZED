# Generated by Django 4.2.5 on 2023-10-29 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asistencia', '0004_remove_ficha_instructores_instructor_fichas'),
    ]

    operations = [
        migrations.AlterField(
            model_name='programa',
            name='nombre_programa',
            field=models.CharField(max_length=45),
        ),
    ]