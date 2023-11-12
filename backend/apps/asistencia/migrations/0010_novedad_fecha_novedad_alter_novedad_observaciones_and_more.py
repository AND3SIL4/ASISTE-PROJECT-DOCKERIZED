# Generated by Django 4.2.5 on 2023-11-03 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asistencia', '0009_alter_asistencia_fecha_asistencia'),
    ]

    operations = [
        migrations.AddField(
            model_name='novedad',
            name='fecha_novedad',
            field=models.DateField(auto_now_add=True, default=1982),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='novedad',
            name='observaciones',
            field=models.TextField(max_length=400),
        ),
        migrations.AlterField(
            model_name='programa',
            name='nombre_programa',
            field=models.CharField(max_length=100),
        ),
    ]