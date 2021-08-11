from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .pets import pets

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/pets/',
        '/api/pet/<id>',
        '/api/pets/update/<id>',
        '/api/pets/delete/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def getPets(request):
    return Response(pets)


@api_view(['GET'])
def getPet(request, pk):
    pet = None
    for i in pets:
        if i['birthYear'] == pk:
            pet = i
            break
    return Response(pet)
