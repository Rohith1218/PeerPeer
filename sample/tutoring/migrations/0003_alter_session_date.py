# Generated by Django 5.0.6 on 2024-05-26 06:49

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutoring", "0002_tutor_user_remove_session_completed_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="session",
            name="date",
            field=models.DateField(),
        ),
    ]
