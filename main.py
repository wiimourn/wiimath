from numpy import random

while True:
    type_opr1 = random.randint(3)
    type_opr2 = random.randint(3)
    num1 = random.randint(100)
    num2 = random.randint(100)
    num3 = random.randint(100)
    opr = None
    opr1= None
    if type_opr1 == 0:      #+
        opr = '+'
        if type_opr2 == 0:  #+
            opr1 = '+'
            troub = num1+num2+num3
        elif type_opr2 == 1:#-
            opr1 = '-'
            troub = num1+num2-num3
        elif type_opr2 == 2:#*
            opr1 = '*'
            troub = (num1+num2)*num3
        else:               #/
            opr1 = '/'
            troub = (num1+num2)/num3

    elif type_opr1 == 1:    #-
        opr = '-'
        if type_opr2 == 0:  #+
            opr1 = '+'
            troub = num1+num2+num3
        elif type_opr2 == 1:#-
            opr1 = '-'
            troub = num1+num2-num3
        elif type_opr2 == 2:#*
            opr1 = '*'
            troub = (num1+num2)*num3
        else:               #/
            opr1 = '/'
            troub = (num1+num2)/num3

    elif type_opr1 == 2:    #*
        opr = '*'
        if type_opr2 == 0:  #+
            opr1 = '+'
            troub = num1+num2+num3
        elif type_opr2 == 1:#-
            opr1 = '-'
            troub = num1+num2-num3
        elif type_opr2 == 2:#*
            opr1 = '*'
            troub = (num1+num2)*num3
        else:               #/
            opr1 = '/'
            troub = (num1+num2)/num3

    else:                   #/
        opr = '/'
        if type_opr2 == 0:  #+
            opr1 = '+'
            troub = num1+num2+num3
        elif type_opr2 == 1:#-
            opr1 = '-'
            troub = num1+num2-num3
        elif type_opr2 == 2:#*
            opr1 = '*'
            troub = (num1+num2)*num3
        else:               #/
            opr1 = '/'
            troub = (num1+num2)/num3


    print('(',num1,opr,num2,')',opr1,num3)
    answer = input('>')
    answer = int(answer)

    if answer == troub:
        print('correct')
    else:
        print('wrong')
        print(troub)
