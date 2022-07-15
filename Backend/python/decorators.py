def new_decorator(func):
    def wrap_func():
        print("Code here before executing func")
        func()
        print("Func() has been executed!")

    return wrap_func


@new_decorator
def func_needs_decorator():
    print("This function is in need of a decorator")


func_needs_decorator()


#func_needs_decorator = new_decorator(func_needs_decorator)
