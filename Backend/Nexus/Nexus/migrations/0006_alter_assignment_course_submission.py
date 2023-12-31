# Generated by Django 4.2.4 on 2023-08-29 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Nexus', '0005_assignment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assignments', to='Nexus.course'),
        ),
        migrations.CreateModel(
            name='Submission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('submission_date', models.DateField()),
                ('status', models.CharField(choices=[('Submitted', 'Submitted'), ('Late', 'Late'), ('Graded', 'Graded')], max_length=10)),
                ('remarks', models.TextField()),
                ('assignment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.assignment')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Nexus.student')),
            ],
        ),
    ]
