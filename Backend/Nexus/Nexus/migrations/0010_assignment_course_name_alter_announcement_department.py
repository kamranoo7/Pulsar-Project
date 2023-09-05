# Generated by Django 4.2.4 on 2023-08-30 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Nexus', '0009_alter_department_options_announcement'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment',
            name='course_name',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='announcement',
            name='department',
            field=models.CharField(choices=[('Science', 'Science'), ('Arts', 'Arts'), ('Engineering', 'Engineering')], max_length=50),
        ),
    ]