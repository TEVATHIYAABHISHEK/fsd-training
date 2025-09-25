# class student:
#     def __init__(self, full_name, class_grade):
#         self.name=full_name
#         self.grade=class_grade
#     def student_details(self):
#         print(f"{self.name} is in class {self.grade}")



# student1 = student("anuj",6)
    # student1.student_details()

# class car:
#     def __init__ (self,brand,model):
#         self.brand=brand
#         self.model=model

#     def display_info(self):
#         print(f"this is a {self.brand} carof name  {self.model}")
    
# car1=car("tesla","ev")
# car1.display_info()
# class greet:
#     def __init__ (self,name,age):
#         self.age=age
#         self.name=name

#     def display_info(self):
#         print(f"Hello my name is {self.name} and i am {self.age} years old ")
    
# greet1=greet("anuj",20)
# greet1.display_info()
# class Book():
#     def __init__(self,title,author):
#         self.title=title
#         self.author=author
#     def display_info(self):
#         print(f"Book:{self.title} , Author:{self.author}")

# b1=Book("Harry potter" , "JK Rowling")
# b1.display_info()
# class BankAccount:
#     def __init__(self, account_holder, balance=0):
#         self.account_holder = account_holder
#         self.balance = balance

#     def deposit(self, amount):
#         self.balance += amount

#     def withdraw(self, amount):
#         if amount <= self.balance:
#             self.balance -= amount
#         else:
#             print("Insufficient balance")

#     def display_balance(self):
#         print(f"Current Balance: {self.balance}")
    
# b1= BankAccount("anuj",1000)
# b1.deposit(500)
# b1.display_balance()
# b1.withdraw(200)
# b1.display_balance()
    
