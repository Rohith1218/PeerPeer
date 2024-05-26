from rest_framework import viewsets
from .models import TutorProfile, Session, Feedback
from .serializers import TutorProfileSerializer, SessionSerializer, FeedbackSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>Welcome to the Peer Tutoring Network</h1>")

class TutorProfileViewSet(viewsets.ModelViewSet):
    queryset = TutorProfile.objects.all()
    serializer_class = TutorProfileSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer



