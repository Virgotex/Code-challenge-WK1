//Net salary calculator
This code calculates the deductions and net salary of an employee based on their basic salary, benefits, and various tax rates, NHIF rates, and NSSF rates in Kenya.

Firstly, the code defines constants for tax rates, NHIF rates, and NSSF rates in the form of objects.

Then, the code prompts the user to enter their basic salary and benefits.

Next, the code calculates the gross salary by adding the basic salary and benefits.

After that, the code calculates tax deductions based on the gross salary using a for loop that iterates over the tax rate ranges defined in the TAX_RATES object. It calculates the payee amount by multiplying the tax rate with the amount exceeding the threshold of each range, and then reduces the gross salary to the threshold amount.

The code then calculates NHIF deductions using a for loop that iterates over the NHIF rate ranges defined in the NHIF_RATES object. It assigns the NHIF rate of the first range where the gross salary is below the threshold.

The code also calculates NSSF deductions by multiplying the gross salary with the employee NSSF rate and taking the minimum of that value and the NSSF max amount defined in the NSSF_RATES object.

Finally, the code calculates the net salary by subtracting the tax, NHIF, and NSSF deductions from the gross salary and benefits.

The code then displays the results in the console, including the gross salary, tax deductions, NHIF deductions, NSSF deductions, and net salary, all rounded to 2 decimal places.

//speed detector
This code defines a function called checkSpeed that checks the speed value entered in an input field against a predetermined speed limit. The function calculates the number of points that the driver would receive based on how much the speed limit was exceeded, and then displays the results. If the driver has received between 1 and 11 points, the function will display the number of points. If the driver has received 12 or more points, the function will display "License suspended". If the driver has not received any points, the function will display "OK".

//student grade
When this function is executed, it retrieves the value of the marks entered by the user from an input field with the id "marks". It then sets a variable grade based on the value of marks using a switch statement.

The switch statement has five cases, representing grades A, B, C, D, and E respectively. Depending on the value of marks, the function sets the grade variable to the corresponding grade. If marks is greater than or equal to 80, the grade is A. If marks is between 60 and 79, the grade is B. If marks is between 50 and 59, the grade is C. If marks is between 40 and 49, the grade is D. Otherwise, the grade is E