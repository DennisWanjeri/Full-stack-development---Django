from django.shortcuts import render

# Create your views here.
def index(request):
    my_dict = {'insert_content': "Hello, am from first_app"}
    return render(request, 'second_app/index.html', context=my_dict)