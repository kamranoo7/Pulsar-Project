# Generated by Django 4.2.4 on 2023-08-29 05:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Nexus', '0002_instructor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_code', models.CharField(max_length=20)),
                ('course_name', models.CharField(max_length=100)),
                ('department', models.CharField(choices=[('Science', 'Science'), ('Arts', 'Arts'), ('Engineering', 'Engineering')], max_length=50)),
                ('credits', models.PositiveIntegerField()),
                ('description', models.TextField()),
                ('instructor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.instructor')),
            ],
        ),
    ]
