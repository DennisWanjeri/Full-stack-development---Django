import one
print("TOP LEVEL TWO.PY")
one.func()

if __name__ == "__main__":
    print("TWO.PY being run directly")
else:
    print("Two is being imported")
