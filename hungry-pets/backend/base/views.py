from django.shortcuts import render
from django.http import JsonResponse
from .pets import pets

# Create your views here.


def getRoutes(request):
    routes = [
        '/api/pets/',
        '/api/pets/<id>',
        '/api/pets/update/<id>',
        '/api/pets/delete/<id>',
    ]
    return JsonResponse(routes, safe=False)


def getPets(request):
    return JsonResponse(pets, safe=False)
