# Generated by Django 4.2.4 on 2023-08-30 17:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Nexus', '0011_rename_course_name_assignment_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.instructor'),
        ),
    ]
