# homepage/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        # This makes the password field required on input but hides it on output
        extra_kwargs = {'password': {'write_only': True, 'required': True}} 

    def create(self, validated_data):
        # Use Django's built-in function to hash the password securely
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user