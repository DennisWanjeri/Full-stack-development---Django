import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ProTwo.settings')


import django
django.setup()

from faker import Faker
from AppTwo.models import User



fakegen = Faker()


def populate(N=5):
    for entry in range(N):
        fake_first = fakegen.unique.first_name()
        fake_last = fakegen.unique.last_name()
        fake_email = fakegen.unique.email()

        users = User.objects.get_or_create(
            first_name=fake_first, last_name=fake_last, email=fake_email
        )


if __name__ == '__main__':
    print("Populating in progress ...")
    populate(20)
    print("Populating complete!")
