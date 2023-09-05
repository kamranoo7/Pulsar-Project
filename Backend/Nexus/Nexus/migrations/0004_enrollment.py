# Generated by Django 4.2.4 on 2023-08-29 06:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Nexus', '0003_course'),
    ]

    operations = [
        migrations.CreateModel(
            name='Enrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enrollment_date', models.DateField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.student')),
            ],
        ),
    ]
