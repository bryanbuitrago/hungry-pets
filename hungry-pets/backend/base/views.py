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
        '/api/pets/<id>',
        '/api/pets/update/<id>',
        '/api/pets/delete/<id>',
    ]
    return Response(routes)


def getPets(request):
    return JsonResponse(pets, safe=False)
