from django.contrib.auth.models import User
from django.db import models

class TutorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    subjects = models.CharField(max_length=200)
    availability = models.TextField()

class Session(models.Model):
    student = models.ForeignKey(User, related_name='student_sessions', on_delete=models.CASCADE)
    tutor = models.ForeignKey(User, related_name='tutor_sessions', on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    scheduled_time = models.DateTimeField()
    completed = models.BooleanField(default=False)

class Feedback(models.Model):
    session = models.OneToOneField(Session, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

