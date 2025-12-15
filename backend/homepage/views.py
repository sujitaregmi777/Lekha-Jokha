# homepage/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Import the serializer you just created
from .serializers import RegisterSerializer 

class RegisterView(APIView):
    """
    API endpoint for user registration. Handles POST requests.
    """
    def post(self, request, format=None):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            # The .save() method calls the create method in the serializer
            user = serializer.save()
            return Response({
                "message": "User registered successfully!",
                "user_id": user.id
            }, status=status.HTTP_201_CREATED)
        
        # Returns validation errors if data is invalid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)