from http.cookies import Morsel
import re


def multi_re_find(patterns, phrase):
    for pat in patterns:
        print("Searching for pattern {}".format(pat))
        print(re.findall(pat, phrase))
        print('\n')


# * - 0 or More
# + 1 or more
# ? - 0 or 1
test_phrase = 'This is a string with numbers 12345 and symbol #hashtag'
test_patterns = [r'\W+']

multi_re_find(test_patterns, test_phrase)
