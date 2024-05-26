# Generated by Django 5.0.6 on 2024-05-26 06:48

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutoring", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Tutor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
            ],
        ),
        migrations.RemoveField(
            model_name="session",
            name="completed",
        ),
        migrations.RemoveField(
            model_name="session",
            name="scheduled_time",
        ),
        migrations.RemoveField(
            model_name="session",
            name="subject",
        ),
        migrations.AddField(
            model_name="session",
            name="date",
            field=models.DateField(default=datetime.date(2024, 5, 26)),
        ),
        migrations.AddField(
            model_name="session",
            name="time",
            field=models.TimeField(default=datetime.date(2024, 5, 26)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="feedback",
            name="session",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tutoring.session"
            ),
        ),
        migrations.AlterField(
            model_name="session",
            name="tutor",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tutoring.tutor"
            ),
        ),
        migrations.AddField(
            model_name="tutor",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tutoring.user"
            ),
        ),
        migrations.AlterField(
            model_name="session",
            name="student",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="tutoring.user"
            ),
        ),
        migrations.DeleteModel(
            name="TutorProfile",
        ),
    ]
