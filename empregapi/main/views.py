from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.response import Response
# Create your views here.

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # http_method_names = ["get","post","delete","put"]
    
    