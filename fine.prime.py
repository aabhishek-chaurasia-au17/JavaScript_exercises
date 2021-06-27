
# def fineprimenum(a):
    
#     if(a > 1):
        
#         for i in range(2, int(a/2)+1):
#             if (a % i) == 0:
#                 print(a,"is not a prime number")
#                 break

#         else:
#             print(a, "is prime number")        

#     else:
#         print(a, "a is a not a prime number")



# if __name__== "__main__":
    
#     a = int(input("Enter a Number ")) 
#     fineprimenum(a)


def sum_of_digit( n ):
    if n == 0:
        return 0
    return (n % 9 + 1 + sum_of_digit(int(n / 10)))
 
# Driven code to check above
num = 987532966
result = sum_of_digit(num)
print("Sum of digits in",num,"is", result)