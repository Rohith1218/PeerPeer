from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import TutorProfileViewSet, SessionViewSet, FeedbackViewSet, index

router = DefaultRouter()
router.register(r'tutors', TutorProfileViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('', index, name='index'),  # Add this line
    path('', include(router.urls)),
]

