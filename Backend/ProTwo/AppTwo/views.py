from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<em>My second application</em>")

def help(request):
    my_dict = {"some_help": "I want to help you!"}
    return render(request, 'AppTwo/help.html', context=my_dict)