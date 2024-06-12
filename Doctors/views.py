from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def  doctorsPage(request):
    Page=loader.get_template('Doctors.html')
    return HttpResponse(Page.render())