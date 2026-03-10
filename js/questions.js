// ========================================
// Lab 2026 Study Hub - All 32 Questions
// Simple, exam-ready code
// ========================================

const questions = [

// ============================================================
// JAVA QUESTIONS (17)
// ============================================================

{
    id: "java-01",
    category: "java",
    title: "1. Sum, Difference, Product, Quotient & Remainder",
    description: "Write a program to find the sum, difference, product, quotient and remainder of two numbers passed as command line argument.",
    code: `class Arithmetic { // this used for declaring the class Arithmetic
    public static void main(String args[]) { // this used for defining the main execution method
        int a = Integer.parseInt(args[0]); // this used for parsing the first command line argument to an integer
        int b = Integer.parseInt(args[1]); // this used for parsing the second command line argument to an integer

        System.out.println("Sum = " + (a + b)); // this used for printing the sum of the two numbers
        System.out.println("Difference = " + (a - b)); // this used for printing the difference between the two numbers
        System.out.println("Product = " + (a * b)); // this used for printing the product of the two numbers
        System.out.println("Quotient = " + (a / b)); // this used for printing the quotient of the division
        System.out.println("Remainder = " + (a % b)); // this used for printing the remainder of the division
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "args[] holds command line arguments as Strings",
        "Integer.parseInt() converts String to int",
        "% gives remainder"
    ],
    blanks: [
        { text: "Integer.parseInt(args[0])", hint: "Convert first arg to int" },
        { text: "(a % b)", hint: "Remainder operator" }
    ],
    quiz: {
        question: "What method converts a String to int in Java?",
        options: ["Integer.parseInt()", "String.toInt()", "Convert.toInt()", "int.parse()"],
        answer: 0,
        explanation: "Integer.parseInt() converts String to int"
    }
},

{
    id: "java-02",
    category: "java",
    title: "2. Triangle Type and Area",
    description: "Given the sides of a triangle, check whether it is equilateral, isosceles or scalene and find its area.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class Triangle { // this used for declaring the class Triangle
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter three sides:"); // this used for prompting the user to enter three sides
        double a = sc.nextDouble(); // this used for reading the first side of the triangle
        double b = sc.nextDouble(); // this used for reading the second side of the triangle
        double c = sc.nextDouble(); // this used for reading the third side of the triangle

        if (a == b && b == c) // this used for checking if all three sides are equal
            System.out.println("Equilateral Triangle"); // this used for printing that the triangle is equilateral
        else if (a == b || b == c || a == c) // this used for checking if any two sides are equal
            System.out.println("Isosceles Triangle"); // this used for printing that the triangle is isosceles
        else // this used for the case where no sides are equal
            System.out.println("Scalene Triangle"); // this used for printing that the triangle is scalene

        double s = (a + b + c) / 2; // this used for calculating the semi-perimeter of the triangle
        double area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // this used for calculating the area using Heron's formula
        System.out.println("Area = " + area); // this used for printing the calculated area
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Scanner for input",
        "Heron's formula: area = sqrt(s*(s-a)*(s-b)*(s-c))",
        "s = (a+b+c)/2 is semi-perimeter"
    ],
    blanks: [
        { text: "a == b && b == c", hint: "All sides equal = equilateral" },
        { text: "Math.sqrt(s * (s - a) * (s - b) * (s - c))", hint: "Heron's formula" }
    ],
    quiz: {
        question: "What is Heron's formula used for?",
        options: ["Finding area of triangle", "Finding perimeter", "Finding angles", "Finding hypotenuse"],
        answer: 0,
        explanation: "Heron's formula calculates area using three sides"
    }
},

{
    id: "java-03",
    category: "java",
    title: "3. Array - Smallest, Largest, Second Largest",
    description: "Read an array of 10 numbers and find the smallest, largest, and second largest element.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class ArrayOps { // this used for declaring the class ArrayOps
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input
        int arr[] = new int[10]; // this used for declaring an integer array of size 10

        System.out.println("Enter 10 numbers:"); // this used for prompting the user to enter 10 numbers
        for (int i = 0; i < 10; i++) // this used for looping 10 times to take inputs
            arr[i] = sc.nextInt(); // this used for storing user input into the array element

        int small = arr[0]; // this used for initializing small with the first array element
        int large = arr[0]; // this used for initializing large with the first array element
        int second = Integer.MIN_VALUE; // this used for initializing the second largest variable with the minimum possible integer

        for (int i = 1; i < 10; i++) { // this used for looping through the array starting from the second element
            if (arr[i] < small) // this used for checking if current element is smaller than small
                small = arr[i]; // this used for updating small with current element
            if (arr[i] > large) // this used for checking if current element is larger than large
                large = arr[i]; // this used for updating large with current element
        } // this used for closing the loop

        for (int i = 0; i < 10; i++) { // this used for looping through the array to find second largest
            if (arr[i] != large && arr[i] > second) // this used for checking if element is not the largest but is greater than second
                second = arr[i]; // this used for updating the second largest variable
        } // this used for closing the loop

        System.out.println("Smallest = " + small); // this used for printing the smallest number
        System.out.println("Largest = " + large); // this used for printing the largest number
        System.out.println("Second Largest = " + second); // this used for printing the second largest number
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Loop through array comparing each element",
        "Second largest: find max excluding largest",
        "Integer.MIN_VALUE is the smallest possible int"
    ],
    blanks: [
        { text: "arr[i] < small", hint: "Check if current is smaller" },
        { text: "arr[i] > large", hint: "Check if current is larger" }
    ],
    quiz: {
        question: "How to find second largest in an array?",
        options: ["Find max excluding the largest", "Sort and pick index 1", "Use Math.max twice", "Divide array in half"],
        answer: 0,
        explanation: "Find the max element that is not equal to the largest"
    }
},

{
    id: "java-04",
    category: "java",
    title: "4. Base Conversion (Binary, Octal, Hex)",
    description: "Write a program to convert integer to binary, octal, and hexadecimal.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class BaseConversion { // this used for declaring the class BaseConversion
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter a number:"); // this used for prompting the user to enter a number
        int n = sc.nextInt(); // this used for reading the integer input

        System.out.println("Binary = " + Integer.toBinaryString(n)); // this used for converting and printing the number in binary format
        System.out.println("Octal = " + Integer.toOctalString(n)); // this used for converting and printing the number in octal format
        System.out.println("Hexadecimal = " + Integer.toHexString(n)); // this used for converting and printing the number in hexadecimal format
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Integer.toBinaryString() -> binary",
        "Integer.toOctalString() -> octal",
        "Integer.toHexString() -> hexadecimal"
    ],
    blanks: [
        { text: "Integer.toBinaryString(n)", hint: "Convert to binary string" },
        { text: "Integer.toHexString(n)", hint: "Convert to hex string" }
    ],
    quiz: {
        question: "Which method converts int to binary string?",
        options: ["Integer.toBinaryString()", "Integer.parseBinary()", "String.toBinary()", "Math.binary()"],
        answer: 0,
        explanation: "Integer.toBinaryString() converts int to binary"
    }
},

{
    id: "java-05",
    category: "java",
    title: "5. Merge Two Arrays",
    description: "Write a program to merge two arrays.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class MergeArrays { // this used for declaring the class MergeArrays
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter size of first array:"); // this used for prompting the user to enter the size of the first array
        int m = sc.nextInt(); // this used for reading the size of the first array
        int a[] = new int[m]; // this used for initializing the first array with size m
        System.out.println("Enter elements:"); // this used for prompting the user to enter elements for the first array
        for (int i = 0; i < m; i++) // this used for looping over the size of the first array
            a[i] = sc.nextInt(); // this used for storing the user input in the first array

        System.out.println("Enter size of second array:"); // this used for prompting the user to enter the size of the second array
        int n = sc.nextInt(); // this used for reading the size of the second array
        int b[] = new int[n]; // this used for initializing the second array with size n
        System.out.println("Enter elements:"); // this used for prompting the user to enter elements for the second array
        for (int i = 0; i < n; i++) // this used for looping over the size of the second array
            b[i] = sc.nextInt(); // this used for storing the user input in the second array

        int c[] = new int[m + n]; // this used for creating a third array to hold elements of both arrays

        for (int i = 0; i < m; i++) // this used for looping over the first array elements
            c[i] = a[i]; // this used for copying elements from the first array to the merged array

        for (int i = 0; i < n; i++) // this used for looping over the second array elements
            c[m + i] = b[i]; // this used for copying elements from the second array to the merged array right after the first array elements

        System.out.println("Merged Array:"); // this used for printing a label for the merged array
        for (int i = 0; i < m + n; i++) // this used for looping over all elements of the merged array
            System.out.print(c[i] + " "); // this used for printing each element of the merged array separated by a space
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Create third array of size m + n",
        "Copy first array, then second array using c[m + i]",
        "Simple index-based merging"
    ],
    blanks: [
        { text: "new int[m + n]", hint: "Size of merged array" },
        { text: "c[m + i] = b[i]", hint: "Copy second array after first" }
    ],
    quiz: {
        question: "When merging arrays a[] (size m) and b[] (size n), what is the merged array size?",
        options: ["m + n", "m * n", "m - n", "max(m, n)"],
        answer: 0,
        explanation: "Merged array holds all elements: m + n"
    }
},

{
    id: "java-06",
    category: "java",
    title: "6. HCF and LCM of Two Numbers",
    description: "Java program to find HCF (GCD) and LCM of two numbers.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class HCFLCM { // this used for declaring the class HCFLCM
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter two numbers:"); // this used for prompting the user to enter two numbers
        int a = sc.nextInt(); // this used for reading the first number
        int b = sc.nextInt(); // this used for reading the second number

        int x = a, y = b; // this used for storing original values of a and b to evaluate HCF

        while (y != 0) { // this used for looping applying Euclidean algorithm until remainder becomes zero
            int temp = y; // this used for temporarily storing value of y
            y = x % y; // this used for calculating the remainder of x divided by y
            x = temp; // this used for moving the old y into x
        } // this used for closing the loop

        int hcf = x; // this used for storing the calculated HCF
        int lcm = (a * b) / hcf; // this used for calculating the LCM utilizing the relationship between LCM and HCF

        System.out.println("HCF = " + hcf); // this used for printing the found HCF
        System.out.println("LCM = " + lcm); // this used for printing the found LCM
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "HCF using Euclid's algorithm: repeat x%y until y=0",
        "LCM = (a * b) / HCF",
        "Save original values before modifying"
    ],
    blanks: [
        { text: "y = x % y", hint: "Euclid's algorithm step" },
        { text: "(a * b) / hcf", hint: "LCM formula using HCF" }
    ],
    quiz: {
        question: "What is the formula for LCM using HCF?",
        options: ["(a * b) / HCF", "a + b - HCF", "a * b * HCF", "HCF / (a * b)"],
        answer: 0,
        explanation: "LCM = (a * b) / HCF"
    }
},

{
    id: "java-07",
    category: "java",
    title: "7. Trace and Transpose of a Matrix",
    description: "Write a program to find the trace and transpose of a matrix.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class Matrix { // this used for declaring the class Matrix
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter size of matrix (n):"); // this used for prompting the user to enter the size of the square matrix
        int n = sc.nextInt(); // this used for reading the size of the matrix
        int mat[][] = new int[n][n]; // this used for initializing the 2D array representing the matrix

        System.out.println("Enter matrix elements:"); // this used for prompting the user to enter elements of the matrix
        for (int i = 0; i < n; i++) // this used for looping through rows of the matrix
            for (int j = 0; j < n; j++) // this used for looping through columns of the matrix
                mat[i][j] = sc.nextInt(); // this used for storing user input in the matrix

        // Trace = sum of diagonal elements // this used for commenting about the trace logic
        int trace = 0; // this used for initializing a variable to keep the sum of diagonal elements
        for (int i = 0; i < n; i++) // this used for iterating through the diagonal elements
            trace = trace + mat[i][i]; // this used for adding the diagonal element to the trace
        System.out.println("Trace = " + trace); // this used for printing the calculated trace

        // Transpose // this used for commenting about the transpose logic
        System.out.println("Transpose:"); // this used for printing a label for the transposed matrix
        for (int i = 0; i < n; i++) { // this used for starting the loop for printing transpose rows
            for (int j = 0; j < n; j++) // this used for starting the loop for printing transpose columns
                System.out.print(mat[j][i] + " "); // this used for printing elements with swapped indices representing transposition
            System.out.println(); // this used for moving to the next line after finishing a row
        } // this used for closing the outer loop
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Trace = sum of diagonal: mat[i][i]",
        "Transpose: swap rows and columns -> print mat[j][i]",
        "2D array: int mat[][] = new int[n][n]"
    ],
    blanks: [
        { text: "trace = trace + mat[i][i]", hint: "Sum of diagonal elements" },
        { text: "mat[j][i]", hint: "Swap row and column for transpose" }
    ],
    quiz: {
        question: "What is the trace of a matrix?",
        options: ["Sum of diagonal elements", "Sum of all elements", "Determinant", "Sum of first row"],
        answer: 0,
        explanation: "Trace = sum of elements where row index = column index"
    }
},

{
    id: "java-08",
    category: "java",
    title: "8. Sum of Digits and Reverse of a Number",
    description: "Find the sum of digits and reverse of a given number using class and objects.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class Number { // this used for declaring the class Number
    int num; // this used for declaring an instance variable to hold the number

    void read() { // this used for defining a method to read the number
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input
        System.out.println("Enter a number:"); // this used for prompting the user to enter a number
        num = sc.nextInt(); // this used for reading the input number
    } // this used for closing the read method

    void sumOfDigits() { // this used for defining a method to find the sum of digits
        int sum = 0, temp = num; // this used for initializing variables for the sum and a temporary copy of the number
        while (temp != 0) { // this used for checking if temporary number is not zero
            sum = sum + temp % 10; // this used for adding the last digit to the sum
            temp = temp / 10; // this used for removing the last digit from the temporary number
        } // this used for closing the loop
        System.out.println("Sum of digits = " + sum); // this used for printing the calculated sum
    } // this used for closing the sumOfDigits method

    void reverse() { // this used for defining a method to reverse the number
        int rev = 0, temp = num; // this used for initializing variables for reversed number and a temporary copy
        while (temp != 0) { // this used for looping until temporary number becomes zero
            rev = rev * 10 + temp % 10; // this used for appending the last digit to the reversed number
            temp = temp / 10; // this used for removing the last digit from the temporary number
        } // this used for closing the loop
        System.out.println("Reverse = " + rev); // this used for printing the reversed number
    } // this used for closing the reverse method

    public static void main(String args[]) { // this used for defining the main execution method
        Number n = new Number(); // this used for creating an object of the Number class
        n.read(); // this used for calling read method to get the number
        n.sumOfDigits(); // this used for calling sumOfDigits method to compute and print sum
        n.reverse(); // this used for calling reverse method to compute and print reversed number
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "temp % 10 gives last digit",
        "temp / 10 removes last digit",
        "rev = rev * 10 + digit builds reverse number",
        "Use class and objects as required"
    ],
    blanks: [
        { text: "sum = sum + temp % 10", hint: "Add last digit to sum" },
        { text: "rev = rev * 10 + temp % 10", hint: "Build reversed number" }
    ],
    quiz: {
        question: "How to get the last digit of a number?",
        options: ["num % 10", "num / 10", "num * 10", "num - 10"],
        answer: 0,
        explanation: "num % 10 gives remainder = last digit"
    }
},

{
    id: "java-09",
    category: "java",
    title: "9. Check Anagram Strings",
    description: "Check if two given strings are anagrams. Example: abc and cba are anagrams.",
    code: `import java.util.Scanner; // this used for importing Scanner class for input reading
import java.util.Arrays; // this used for importing Arrays class for array manipulation

class Anagram { // this used for declaring the class Anagram
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for initializing Scanner for input

        System.out.println("Enter first string:"); // this used for asking user for the first string
        String s1 = sc.nextLine().toLowerCase(); // this used for reading the first string and converting to lowercase

        System.out.println("Enter second string:"); // this used for asking user for the second string
        String s2 = sc.nextLine().toLowerCase(); // this used for reading the second string and converting to lowercase

        char a[] = s1.toCharArray(); // this used for converting the first string to a character array
        char b[] = s2.toCharArray(); // this used for converting the second string to a character array

        Arrays.sort(a); // this used for sorting the characters of the first string
        Arrays.sort(b); // this used for sorting the characters of the second string

        if (Arrays.equals(a, b)) // this used for checking if the sorted character arrays are equal
            System.out.println("Anagram"); // this used for printing that strings are anagrams
        else // this used for the case when sorted arrays are not equal
            System.out.println("Not Anagram"); // this used for printing that strings are not anagrams
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Convert string to char array: toCharArray()",
        "Sort both arrays: Arrays.sort()",
        "Compare: Arrays.equals()",
        "toLowerCase() for case-insensitive check"
    ],
    blanks: [
        { text: "s1.toCharArray()", hint: "Convert string to char array" },
        { text: "Arrays.equals(a, b)", hint: "Compare two sorted arrays" }
    ],
    quiz: {
        question: "Two strings are anagrams if:",
        options: ["They have same characters in any order", "They are equal", "They have same length", "They start with same letter"],
        answer: 0,
        explanation: "Anagrams have same characters rearranged"
    }
},

{
    id: "java-10",
    category: "java",
    title: "10. Remove Vowels from a String",
    description: "Write a Java Program to remove all vowels from a string.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class RemoveVowels { // this used for declaring the class RemoveVowels
    public static void main(String args[]) { // this used for defining the main execution method
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input

        System.out.println("Enter a string:"); // this used for prompting the user to enter a string
        String str = sc.nextLine(); // this used for reading the entire line of string input

        String result = ""; // this used for initializing an empty string to store the result

        for (int i = 0; i < str.length(); i++) { // this used for looping through each character of the string
            char ch = str.charAt(i); // this used for getting the character at the current index
            if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' // this used for checking against lowercase vowels
             && ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U') { // this used for checking against uppercase vowels
                result = result + ch; // this used for appending non-vowel characters to the result string
            } // this used for closing the if statement
        } // this used for closing the for loop

        System.out.println("Without vowels: " + result); // this used for printing the final string without vowels
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "str.charAt(i) gets character at index i",
        "Check if character is NOT a vowel, then add to result",
        "Check both uppercase and lowercase vowels"
    ],
    blanks: [
        { text: "str.charAt(i)", hint: "Get character at position i" },
        { text: "result = result + ch", hint: "Append non-vowel character" }
    ],
    quiz: {
        question: "Which method gets a character at a specific index in a String?",
        options: ["charAt()", "getChar()", "char()", "at()"],
        answer: 0,
        explanation: "String.charAt(index) returns the character"
    }
},

{
    id: "java-11",
    category: "java",
    title: "11. Student-Mark Inheritance",
    description: "Create class Student, inherit class Mark from it. Read marks of 5 subjects, find total and average.",
    code: `import java.util.Scanner; // this used for importing Scanner class for taking user input

class Student { // this used for declaring the class Student
    String name; // this used for declaring a String variable for the student's name
    int rollno; // this used for declaring an integer variable for the student's roll number

    void readStudent() { // this used for defining a method to read student details
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object to read input
        System.out.println("Enter name:"); // this used for prompting the user for the name
        name = sc.nextLine(); // this used for reading the name string
        System.out.println("Enter roll no:"); // this used for prompting the user for the roll number
        rollno = sc.nextInt(); // this used for reading the roll number integer
    } // this used for closing the readStudent method

    void displayStudent() { // this used for defining a method to display student details
        System.out.println("Name: " + name); // this used for printing the student's name
        System.out.println("Roll No: " + rollno); // this used for printing the student's roll number
    } // this used for closing the displayStudent method
} // this used for closing the class Student

class Mark extends Student { // this used for declaring the class Mark which inherits from Student
    int marks[] = new int[5]; // this used for declaring an array to hold marks for 5 subjects
    int total; // this used for declaring a variable for the total marks
    float avg; // this used for declaring a variable for average marks

    void readMarks() { // this used for defining a method to read the marks
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object inside the method
        System.out.println("Enter 5 subject marks:"); // this used for prompting the user to enter 5 marks
        total = 0; // this used for initializing the total variable to 0
        for (int i = 0; i < 5; i++) { // this used for looping 5 times to read each mark
            marks[i] = sc.nextInt(); // this used for reading the mark and storing it in the array
            total = total + marks[i]; // this used for accumulating the total sum of marks
        } // this used for closing the loop
        avg = total / 5.0f; // this used for calculating the average mark
    } // this used for closing the readMarks method

    void displayResult() { // this used for defining a method to display the final result
        displayStudent(); // this used for calling the parent class method to display student details
        System.out.println("Total: " + total); // this used for printing the total calculated marks
        System.out.println("Average: " + avg); // this used for printing the calculated average
        if (avg >= 50) // this used for checking if the average is representing a passing score
            System.out.println("Result: Pass"); // this used for printing the pass result
        else // this used for catching the case where average is less than pass threshold
            System.out.println("Result: Fail"); // this used for printing the fail result
    } // this used for closing the displayResult method

    public static void main(String args[]) { // this used for defining the main execution method
        Mark m = new Mark(); // this used for creating an object of the Mark class
        m.readStudent(); // this used for reading the common student details
        m.readMarks(); // this used for reading the subject marks
        m.displayResult(); // this used for displaying the stored details and computed result
    } // this used for closing the main method
} // this used for closing the class Mark`,
    language: "java",
    concepts: [
        "extends keyword for inheritance",
        "Child class Mark inherits name, rollno from Student",
        "Child can call parent methods like displayStudent()",
        "total / 5.0f for float division"
    ],
    blanks: [
        { text: "class Mark extends Student", hint: "Inherit from Student" },
        { text: "total = total + marks[i]", hint: "Add each mark to total" }
    ],
    quiz: {
        question: "Which keyword is used for inheritance in Java?",
        options: ["extends", "implements", "inherits", "super"],
        answer: 0,
        explanation: "class Child extends Parent"
    }
},

{
    id: "java-12",
    category: "java",
    title: "12. Sum of Two Complex Numbers",
    description: "Find the sum of two complex numbers using class and objects (object as parameter).",
    code: `import java.util.Scanner; // this used for importing Scanner class for user input

class Complex { // this used for declaring the class Complex
    int real, imag; // this used for declaring integer variables for the real and imaginary parts

    void read() { // this used for defining a method to read the complex number parts
        Scanner sc = new Scanner(System.in); // this used for creating a Scanner object
        System.out.println("Enter real and imaginary part:"); // this used for prompting the user
        real = sc.nextInt(); // this used for reading the real part
        imag = sc.nextInt(); // this used for reading the imaginary part
    } // this used for closing the read method

    Complex add(Complex c) { // this used for defining a method to add two complex numbers taking one as parameter
        Complex result = new Complex(); // this used for creating a new Complex object to hold the result
        result.real = this.real + c.real; // this used for summing the real parts
        result.imag = this.imag + c.imag; // this used for summing the imaginary parts
        return result; // this used for returning the resultant complex number object
    } // this used for closing the add method

    void display() { // this used for defining a method to print the complex number
        System.out.println(real + " + " + imag + "i"); // this used for printing it in standard format a + bi
    } // this used for closing the display method

    public static void main(String args[]) { // this used for defining the main function
        Complex c1 = new Complex(); // this used for creating the first complex number object
        Complex c2 = new Complex(); // this used for creating the second complex number object

        System.out.println("First complex number:"); // this used for denoting input for the first object
        c1.read(); // this used for reading values for the first object

        System.out.println("Second complex number:"); // this used for denoting input for the second object
        c2.read(); // this used for reading values for the second object

        Complex c3 = c1.add(c2); // this used for adding the two complex numbers and storing in a third object

        System.out.print("Sum = "); // this used for printing a label for the sum
        c3.display(); // this used for displaying the summed complex number
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Object as parameter: add(Complex c)",
        "this.real refers to current object",
        "c.real refers to parameter object",
        "Return new Complex object as result"
    ],
    blanks: [
        { text: "result.real = this.real + c.real", hint: "Add real parts" },
        { text: "Complex c3 = c1.add(c2)", hint: "Pass c2 as object parameter" }
    ],
    quiz: {
        question: "What does 'this' keyword refer to in Java?",
        options: ["Current object", "Parent class", "Static method", "Main method"],
        answer: 0,
        explanation: "'this' refers to the current object instance"
    }
},

{
    id: "java-13",
    category: "java",
    title: "13. Count Objects Using Static Variable",
    description: "Count and display total number of objects created to a class using static members.",
    code: `class Counter { // this used for declaring the class Counter
    static int count = 0; // this used for declaring and initializing a class-level static counter

    Counter() { // this used for defining the constructor of the class
        count++; // this used for incrementing the static count every time an object is initialized
        System.out.println("Object " + count + " created"); // this used for printing the creation status with count
    } // this used for closing the constructor

    static void showCount() { // this used for defining a static method to view the count
        System.out.println("Total objects created: " + count); // this used for displaying the total accumulated count
    } // this used for closing the static method

    public static void main(String args[]) { // this used for defining the main execution method
        Counter c1 = new Counter(); // this used for instantiating the first object
        Counter c2 = new Counter(); // this used for instantiating the second object
        Counter c3 = new Counter(); // this used for instantiating the third object

        Counter.showCount(); // this used for calling the static method to show final total
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "static variable is shared by all objects",
        "count++ in constructor increments for each new object",
        "static method called using ClassName.method()",
        "static variable belongs to class, not object"
    ],
    blanks: [
        { text: "static int count = 0", hint: "Shared variable for all objects" },
        { text: "count++", hint: "Increment count in constructor" }
    ],
    quiz: {
        question: "What is special about a static variable?",
        options: ["Shared by all objects of the class", "Different for each object", "Cannot be changed", "Only accessible in main"],
        answer: 0,
        explanation: "Static variables belong to the class, shared by all objects"
    }
},

{
    id: "java-14",
    category: "java",
    title: "14. Volume Using Function Overloading",
    description: "Find volume of cube, rectangular box, and cylinder using function overloading.",
    code: `class Volume { // this used for declaring the class Volume

    double volume(double s) { // this used for defining method to return volume of a cube
        return s * s * s; // this used for calculating side cubed
    } // this used for closing the first volume method

    double volume(double l, double b, double h) { // this used for defining overloaded method for volume of a rectangular box
        return l * b * h; // this used for calculating length * string * height
    } // this used for closing the second volume method

    double volume(double r, double h) { // this used for defining overloaded method for volume of a cylinder
        return 3.14 * r * r * h; // this used for calculating pi * radius squared * height
    } // this used for closing the third volume method

    public static void main(String args[]) { // this used for defining the main execution method
        Volume v = new Volume(); // this used for creating an object of the Volume class

        System.out.println("Cube volume = " + v.volume(5.0)); // this used for passing arguments for a cube and printing result
        System.out.println("Box volume = " + v.volume(3.0, 4.0, 5.0)); // this used for passing arguments for a box and printing result
        System.out.println("Cylinder volume = " + v.volume(3.0, 7.0)); // this used for passing arguments for a cylinder and printing result
    } // this used for closing the main method
} // this used for closing the class`,
    language: "java",
    concepts: [
        "Function overloading: same name, different parameters",
        "Cube: 1 param (side)",
        "Box: 3 params (l, b, h)",
        "Cylinder: 2 params (r, h)"
    ],
    blanks: [
        { text: "double volume(double l, double b, double h)", hint: "Overloaded method for box" },
        { text: "3.14 * r * r * h", hint: "Cylinder volume = pi*r*r*h" }
    ],
    quiz: {
        question: "What is function overloading?",
        options: ["Same name, different parameters", "Same name, same parameters", "Different name, same parameters", "Calling function inside itself"],
        answer: 0,
        explanation: "Overloading = same method name with different parameter lists"
    }
},

{
    id: "java-15",
    category: "java",
    title: "15. Abstract Class - Shapes (Area)",
    description: "Create abstract class Shape with TwoDim and ThreeDim subclasses. Square, Triangle, Sphere, Cube.",
    code: `abstract class Shape { // this used for declaring an abstract base class Shape
    abstract void area(); // this used for declaring an abstract method area to be implemented by children
} // this used for closing the abstract Shape class

class TwoDim extends Shape { // this used for declaring intermediate subclass TwoDim inheriting from Shape
    void area() { } // this used for providing a void implementation of area
} // this used for closing TwoDim class

class ThreeDim extends Shape { // this used for declaring intermediate subclass ThreeDim inheriting from Shape
    void area() { } // this used for providing an empty concrete implementation
} // this used for closing ThreeDim class

class Square extends TwoDim { // this used for declaring Square class that inherits from TwoDim
    double side; // this used for declaring variable for side length
    Square(double s) { side = s; } // this used for constructor to initialize the side

    void area() { // this used for defining concrete implementation of area for Square
        System.out.println("Square area = " + (side * side)); // this used for printing square area
    } // this used for closing area method
} // this used for closing Square class

class TriangleShape extends TwoDim { // this used for declaring TriangleShape class extending TwoDim
    double base, height; // this used for declaring variables for base and height
    TriangleShape(double b, double h) { base = b; height = h; } // this used for constructor to initialize variables

    void area() { // this used for defining area for triangle
        System.out.println("Triangle area = " + (0.5 * base * height)); // this used for computing and logging area of triangle
    } // this used for closing area method
} // this used for closing TriangleShape class

class Sphere extends ThreeDim { // this used for declaring Sphere extending ThreeDim
    double radius; // this used for storing sphere's radius
    Sphere(double r) { radius = r; } // this used for initializing radius in constructor

    void area() { // this used for defining area for sphere
        System.out.println("Sphere surface area = " + (4 * 3.14 * radius * radius)); // this used for computing and logging sphere surface area
    } // this used for closing area method
} // this used for closing Sphere class

class Cube extends ThreeDim { // this used for declaring Cube extending ThreeDim
    double side; // this used for storing side dimension
    Cube(double s) { side = s; } // this used for setting side through constructor

    void area() { // this used for defining area method for cube
        System.out.println("Cube surface area = " + (6 * side * side)); // this used for computing and outputting surface area of cube
    } // this used for closing area method
} // this used for closing Cube class

class ShapeTest { // this used for declaring the main test class for all shapes
    public static void main(String args[]) { // this used for defining the starting main method
        Square sq = new Square(5); // this used for instantiating a Square with side 5
        sq.area(); // this used for displaying area of the square

        TriangleShape t = new TriangleShape(4, 6); // this used for instantiating a TriangleShape with base 4 and height 6
        t.area(); // this used for requesting area display for the triangle

        Sphere sp = new Sphere(3); // this used for instantiating a Sphere with radius 3
        sp.area(); // this used for calculating area of the sphere

        Cube cu = new Cube(4); // this used for instantiating a Cube with side 4
        cu.area(); // this used for printing area of the cube
    } // this used for closing main
} // this used for closing the ShapeTest class`,
    language: "java",
    concepts: [
        "abstract class cannot be instantiated",
        "abstract method has no body",
        "Multilevel: Shape -> TwoDim -> Square",
        "Each subclass provides its own area()"
    ],
    blanks: [
        { text: "abstract void area()", hint: "Abstract method declaration" },
        { text: "class Square extends TwoDim", hint: "Square inherits from TwoDim" }
    ],
    quiz: {
        question: "Can you create an object of an abstract class?",
        options: ["No", "Yes", "Only with static", "Only in main"],
        answer: 0,
        explanation: "Abstract classes cannot be instantiated directly"
    }
},

{
    id: "java-16",
    category: "java",
    title: "16. Interface - Volume of Sphere and Cylinder",
    description: "Create interface Volume with pi, readdata() and dispvolume(). Implement for Sphere and Cylinder.",
    code: `import java.util.Scanner; // this used for bringing in the Scanner class

interface Volume { // this used for declaring an interface named Volume
    double pi = 3.14; // this used for declaring a static constant for pi
    void readdata(); // this used for declaring an abstract method to read dimensions
    void dispvolume(); // this used for declaring an abstract method to display volume
} // this used for closing the interface volume

class Sphere implements Volume { // this used for class Sphere implementing the Volume interface
    double r; // this used for storing variable for radius

    public void readdata() { // this used for defining the method to fetch sphere's parameters
        Scanner sc = new Scanner(System.in); // this used for instantiating the Scanner
        System.out.println("Enter radius of sphere:"); // this used for prompting the user to type radius
        r = sc.nextDouble(); // this used for persisting the given radius
    } // this used for ending readdata method

    public void dispvolume() { // this used for defining the method for volume presentation
        double vol = (4.0 / 3) * pi * r * r * r; // this used for determining the sphere's actual volume
        System.out.println("Volume of sphere = " + vol); // this used for rendering the calculated area out
    } // this used for culminating the display method
} // this used for wrapping up the Sphere logic setup

class Cylinder implements Volume { // this used for creating Cylinder which adheres to Volume
    double r, h; // this used for initializing parameters for radius and height

    public void readdata() { // this used for taking over the readdata defined in interface
        Scanner sc = new Scanner(System.in); // this used for building Scanner context
        System.out.println("Enter radius and height of cylinder:"); // this used for asking user for dual values
        r = sc.nextDouble(); // this used for populating the r variable with input
        h = sc.nextDouble(); // this used for populating the h variable with input
    } // this used for closing cylinder read process

    public void dispvolume() { // this used for fleshing out the cylinder volumetric evaluation
        double vol = pi * r * r * h; // this used for figuring out the volume capacity
        System.out.println("Volume of cylinder = " + vol); // this used for showing it to output channel
    } // this used for concluding the dispvolume function
} // this used for concluding cylinder specification

class InterfaceTest { // this used for creating driver code execution structure
    public static void main(String args[]) { // this used for laying down the main root routine
        Sphere s = new Sphere(); // this used for establishing a Sphere item
        s.readdata(); // this used for triggering data capture for the sphere
        s.dispvolume(); // this used for triggering display method corresponding to sphere

        Cylinder c = new Cylinder(); // this used for making a fresh Cylinder abstraction
        c.readdata(); // this used for triggering user prompts for dimensions of cylinder
        c.dispvolume(); // this used for resolving and publishing the volume for cylinder
    } // this used for terminating main function flow
} // this used for completing InterfaceTest declaration`,
    language: "java",
    concepts: [
        "interface: all methods abstract by default",
        "Variables in interface are public static final",
        "implements keyword to use interface",
        "Must use public when implementing interface methods"
    ],
    blanks: [
        { text: "class Sphere implements Volume", hint: "Implement the interface" },
        { text: "(4.0 / 3) * pi * r * r * r", hint: "Sphere volume formula" }
    ],
    quiz: {
        question: "What keyword is used to implement an interface?",
        options: ["implements", "extends", "inherits", "uses"],
        answer: 0,
        explanation: "class MyClass implements MyInterface"
    }
},

{
    id: "java-17",
    category: "java",
    title: "17. Multithreading - Odd and Even Numbers",
    description: "Display odd and even numbers up to a limit using multithreading with Runnable interface.",
    code: `import java.util.Scanner; // this used for injecting Scanner class mechanism

class EvenThread implements Runnable { // this used for making EvenThread conformable to threading paradigms
    int limit; // this used for holding the upper numeric boundary
    EvenThread(int l) { limit = l; } // this used for constructor receiving the end bound

    public void run() { // this used for fulfilling the core thread action behavior
        for (int i = 2; i <= limit; i = i + 2) // this used for looping through standard positive even numbers
            System.out.println("Even: " + i); // this used for indicating string prefix and putting out current even integer
    } // this used for ending current thread's logic implementation
} // this used for finishing the EvenThread building block

class OddThread implements Runnable { // this used for declaring an independent OddThread class that behaves as thread task
    int limit; // this used for preserving iteration count limit
    OddThread(int l) { limit = l; } // this used for establishing bound limit during object startup

    public void run() { // this used for housing the logic which runs in this thread's timeframe
        for (int i = 1; i <= limit; i = i + 2) // this used for traversing integer scale landing on odd slots
            System.out.println("Odd: " + i); // this used for signaling odd nature alongside the number values
    } // this used for capping off the thread loop activity
} // this used for closing odd logic scope container

class ThreadTest { // this used for enclosing the runner that initiates concurrently
    public static void main(String args[]) { // this used for outlining starting context framework
        Scanner sc = new Scanner(System.in); // this used for preparing console parser for text string requests
        System.out.println("Enter limit:"); // this used for inquiring participant about sequence limit
        int limit = sc.nextInt(); // this used for receiving text chunk into integer structure

        Thread t1 = new Thread(new EvenThread(limit)); // this used for spinning out first independent concurrent agent wrapper
        Thread t2 = new Thread(new OddThread(limit)); // this used for embedding alternate run schema inside parallel agent wrapper

        t1.start(); // this used for signaling Java runtime engine to spin off and fire Even thread process
        t2.start(); // this used for signaling Java runtime suite to fork execution line for Odd process
    } // this used for drawing finish line of program runtime process
} // this used for closing final code bounds`,
    language: "java",
    concepts: [
        "implements Runnable interface",
        "Override run() method",
        "new Thread(runnableObject) creates thread",
        "start() begins execution, NOT run()"
    ],
    blanks: [
        { text: "implements Runnable", hint: "Interface for creating threads" },
        { text: "t1.start()", hint: "Method to begin thread execution" }
    ],
    quiz: {
        question: "Which method do you call to start a thread?",
        options: ["start()", "run()", "execute()", "begin()"],
        answer: 0,
        explanation: "start() creates new thread and calls run()"
    }
},

// ============================================================
// JAVASCRIPT QUESTIONS (5)
// ============================================================

{
    id: "js-01",
    category: "javascript",
    title: "1. Perfect, Abundant or Deficient Number",
    description: "Check whether a given number is perfect, abundant or deficient. Use alert box to display output.",
    code: `<html>
<head>
<title>Perfect Number</title>

<script>
function checkNumber() {
    var num = parseInt(prompt("Enter a number:"));
    var sum = 0;

    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }

    if (sum == num)
        alert(num + " is a Perfect Number");
    else if (sum > num)
        alert(num + " is an Abundant Number");
    else
        alert(num + " is a Deficient Number");
}
</script>

</head>

<body onload="checkNumber()">
</body>
</html>`,
    language: "markup",
    concepts: [
        "Perfect: sum of divisors = number (e.g., 6 = 1+2+3)",
        "Abundant: sum of divisors > number",
        "Deficient: sum of divisors < number",
        "num % i == 0 checks if i is a divisor"
    ],
    blanks: [
        { text: "num % i == 0", hint: "Check if i divides num" },
        { text: "sum == num", hint: "Perfect number condition" }
    ],
    quiz: {
        question: "6 is a perfect number because:",
        options: ["1+2+3 = 6", "2+4 = 6", "6 is even", "6/2 = 3"],
        answer: 0,
        explanation: "Sum of proper divisors (1,2,3) equals 6"
    }
},

{
    id: "js-02",
    category: "javascript",
    title: "2. Triangle Type and Area",
    description: "Check if given sides can form a triangle. If yes, find type (isosceles, equilateral, scalene) and area using prompt.",
    code: `<html>
<head>
<title>Triangle</title>

<script>
function checkTriangle() {
    var a = parseFloat(prompt("Enter side 1:"));
    var b = parseFloat(prompt("Enter side 2:"));
    var c = parseFloat(prompt("Enter side 3:"));

    if (a + b <= c || b + c <= a || a + c <= b) {
        alert("Cannot form a triangle");
        return;
    }

    var type;
    if (a == b && b == c)
        type = "Equilateral";
    else if (a == b || b == c || a == c)
        type = "Isosceles";
    else
        type = "Scalene";

    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    alert("Type: " + type + "\\nArea: " + area.toFixed(2));
}
</script>

</head>

<body onload="checkTriangle()">
</body>
</html>`,
    language: "markup",
    concepts: [
        "Triangle inequality: a+b > c, b+c > a, a+c > b",
        "Equilateral: all sides equal",
        "Isosceles: two sides equal",
        "Scalene: all sides different",
        "Heron's formula: area = sqrt(s*(s-a)*(s-b)*(s-c))"
    ],
    blanks: [
        { text: "a + b <= c", hint: "Triangle inequality check" },
        { text: "Math.sqrt(s * (s - a) * (s - b) * (s - c))", hint: "Heron's formula" }
    ],
    quiz: {
        question: "When can three sides NOT form a triangle?",
        options: ["When sum of two sides <= third side", "When all sides are equal", "When two sides are equal", "When sides are different"],
        answer: 0,
        explanation: "Triangle inequality: sum of any two sides must be greater than the third"
    }
},

{
    id: "js-03",
    category: "javascript",
    title: "3. Clock with Timing Event",
    description: "Create a digital clock using setInterval timing event.",
    code: `<html>
<head>
<title>Clock</title>

<script>
function showTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

setInterval(showTime, 1000);
</script>

</head>

<body onload="showTime()">
<h2>Digital Clock</h2>
<p id="clock" style="font-size:40px;"></p>
</body>
</html>`,
    language: "markup",
    concepts: [
        "new Date() gets current date/time",
        "getHours(), getMinutes(), getSeconds()",
        "setInterval(function, 1000) calls every 1 second",
        "innerHTML sets content of element"
    ],
    blanks: [
        { text: "setInterval(showTime, 1000)", hint: "Repeat every 1000ms" },
        { text: "new Date()", hint: "Create date object" }
    ],
    quiz: {
        question: "setInterval(func, 1000) does what?",
        options: ["Calls func every 1 second", "Calls func once after 1 sec", "Calls func 1000 times", "Waits 1 second then stops"],
        answer: 0,
        explanation: "setInterval repeats the function every N milliseconds"
    }
},

{
    id: "js-04",
    category: "javascript",
    title: "4. Password Validation",
    description: "Validate: password must match confirm password, and length must be greater than 8.",
    code: `<html>
<head>
<title>Password Validation</title>

<script>
function validatePassword() {
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;

    if (pwd.length <= 8) {
        alert("Password must be greater than 8 characters");
        return;
    }

    if (pwd != cpwd) {
        alert("Passwords do not match");
        return;
    }

    alert("Password is valid!");
}
</script>

</head>

<body>
<h2>Password Validation</h2>
Password: <input type="password" id="pwd"><br><br>
Confirm Password: <input type="password" id="cpwd"><br><br>
<button onclick="validatePassword()">Validate</button>
</body>
</html>`,
    language: "markup",
    concepts: [
        "pwd.length checks string length",
        "pwd != cpwd compares two strings",
        "type='password' hides input text",
        "Check length first, then match"
    ],
    blanks: [
        { text: "pwd.length <= 8", hint: "Check password length" },
        { text: "pwd != cpwd", hint: "Compare password and confirm" }
    ],
    quiz: {
        question: "How to get the length of a string in JavaScript?",
        options: ["str.length", "str.size()", "str.len()", "length(str)"],
        answer: 0,
        explanation: "str.length returns the number of characters"
    }
},

{
    id: "js-05",
    category: "javascript",
    title: "5. Find 1st January Sunday Between Years",
    description: "Find all years where 1st January is a Sunday between a given range of years.",
    code: `<html>
<head>
<title>Sunday January 1st</title>

<script>
function findSundays() {
    var start = parseInt(prompt("Enter start year:"));
    var end = parseInt(prompt("Enter end year:"));
    var result = "";

    for (var year = start; year <= end; year++) {
        var date = new Date(year, 0, 1);
        if (date.getDay() == 0) {
            result = result + year + "\\n";
        }
    }

    if (result == "")
        alert("No years found where Jan 1st is Sunday");
    else
        alert("Years where Jan 1st is Sunday:\\n" + result);
}
</script>

</head>

<body onload="findSundays()">
</body>
</html>`,
    language: "markup",
    concepts: [
        "new Date(year, 0, 1) creates Jan 1st of given year",
        "getDay() returns day of week (0=Sunday, 1=Monday, etc)",
        "Loop through year range",
        "Check if getDay() == 0 for Sunday"
    ],
    blanks: [
        { text: "new Date(year, 0, 1)", hint: "Create date for Jan 1st" },
        { text: "date.getDay() == 0", hint: "Check if Sunday (0)" }
    ],
    quiz: {
        question: "What does getDay() return for Sunday?",
        options: ["0", "1", "7", "-1"],
        answer: 0,
        explanation: "getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday"
    }
},

// ============================================================
// PHP QUESTIONS (6)
// ============================================================

{
    id: "php-01",
    category: "php",
    title: "1. Bio Data Display",
    description: "Display bio data of a person by reading personal details using an HTML page.",
    code: `<html>
<body>
<h2>Enter Personal Details</h2>

<form method="post" action="biodata.php">
    Name: <input type="text" name="name"><br><br>
    Age: <input type="text" name="age"><br><br>
    Gender: 
    <input type="radio" name="gender" value="Male"> Male
    <input type="radio" name="gender" value="Female"> Female<br><br>
    Email: <input type="text" name="email"><br><br>
    Phone: <input type="text" name="phone"><br><br>
    Address: <textarea name="address" rows="3" cols="30"></textarea><br><br>
    <input type="submit" name="submit" value="Submit">
</form>

</body>
</html>

<!-- biodata.php -->
<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    echo "<h2>Bio Data</h2>";
    echo "<table border='1' cellpadding='10'>";
    echo "<tr><td><b>Name:</b></td><td>$name</td></tr>";
    echo "<tr><td><b>Age:</b></td><td>$age</td></tr>";
    echo "<tr><td><b>Gender:</b></td><td>$gender</td></tr>";
    echo "<tr><td><b>Email:</b></td><td>$email</td></tr>";
    echo "<tr><td><b>Phone:</b></td><td>$phone</td></tr>";
    echo "<tr><td><b>Address:</b></td><td>$address</td></tr>";
    echo "</table>";
}
?>`,
    language: "php",
    concepts: [
        "$_POST[] gets form values",
        "method='post' in form",
        "action='filename.php' specifies target",
        "isset() checks if form was submitted",
        "Display data in HTML table format"
    ],
    blanks: [
        { text: "$_POST['name']", hint: "Get form field value" },
        { text: "isset($_POST['submit'])", hint: "Check if form submitted" }
    ],
    quiz: {
        question: "Which superglobal is used to get form data in PHP?",
        options: ["$_POST", "$_GET", "$_FORM", "$_DATA"],
        answer: 0,
        explanation: "$_POST retrieves data from POST method forms"
    }
},

{
    id: "php-02",
    category: "php",
    title: "2. Reverse a String",
    description: "Write a PHP function to reverse a string.",
    code: `<html>
<body>
<h2>Reverse a String</h2>

<form method="post">
    Enter String: <input type="text" name="str"><br><br>
    <input type="submit" name="submit" value="Reverse">
</form>

<?php
function reverseString($str) {
    $rev = "";
    $len = strlen($str);

    for ($i = $len - 1; $i >= 0; $i--) {
        $rev = $rev . $str[$i];
    }

    return $rev;
}

if (isset($_POST['submit'])) {
    $str = $_POST['str'];
    echo "Original: " . $str . "<br>";
    echo "Reversed: " . reverseString($str);
}
?>
</body>
</html>`,
    language: "php",
    concepts: [
        "strlen() gives string length",
        "$str[$i] accesses character at index i",
        ". (dot) is string concatenation in PHP",
        "Loop from last index to 0"
    ],
    blanks: [
        { text: "$rev = $rev . $str[$i]", hint: "Append character" },
        { text: "strlen($str)", hint: "Get length of string" }
    ],
    quiz: {
        question: "Which operator concatenates strings in PHP?",
        options: [". (dot)", "+ (plus)", "& (ampersand)", ", (comma)"],
        answer: 0,
        explanation: "PHP uses dot (.) for string concatenation"
    }
},

{
    id: "php-03",
    category: "php",
    title: "3. Perfect, Abundant or Deficient Number",
    description: "Check whether a given number is perfect, abundant, or deficient.",
    code: `<html>
<body>
<h2>Perfect / Abundant / Deficient</h2>

<form method="post">
    Enter Number: <input type="number" name="num"><br><br>
    <input type="submit" name="submit" value="Check">
</form>

<?php
if (isset($_POST['submit'])) {
    $num = $_POST['num'];
    $sum = 0;

    for ($i = 1; $i < $num; $i++) {
        if ($num % $i == 0) {
            $sum = $sum + $i;
        }
    }

    echo "Number: $num <br>";

    if ($sum == $num)
        echo "Perfect Number";
    else if ($sum > $num)
        echo "Abundant Number";
    else
        echo "Deficient Number";
}
?>
</body>
</html>`,
    language: "php",
    concepts: [
        "Perfect: sum of divisors = number (eg 6 = 1+2+3)",
        "Abundant: sum of divisors > number",
        "Deficient: sum of divisors < number",
        "% checks divisibility"
    ],
    blanks: [
        { text: "$num % $i == 0", hint: "Check if i divides num" },
        { text: "$sum == $num", hint: "Perfect number condition" }
    ],
    quiz: {
        question: "6 is a perfect number because:",
        options: ["1+2+3 = 6", "2+4 = 6", "6 is even", "6/2 = 3"],
        answer: 0,
        explanation: "Sum of proper divisors (1,2,3) equals 6"
    }
},

{
    id: "php-04",
    category: "php",
    title: "4. Employee Payslip",
    description: "Generate payslip with HRA, conveyance, allowance, and income tax based on designation.",
    code: `<html>
<body>
<h2>Employee Payslip</h2>

<form method="post">
    Name: <input type="text" name="name"><br><br>
    Basic Salary: <input type="text" name="basic"><br><br>
    Designation:
    <select name="desig">
        <option value="Manager">Manager</option>
        <option value="Supervisor">Supervisor</option>
        <option value="Clerk">Clerk</option>
        <option value="Peon">Peon</option>
    </select><br><br>
    <input type="submit" name="submit" value="Generate Payslip">
</form>

<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $basic = $_POST['basic'];
    $desig = $_POST['desig'];

    $hra = $basic * 0.25;

    if ($desig == "Manager") { $conv = 1000; $extra = 500; }
    else if ($desig == "Supervisor") { $conv = 750; $extra = 200; }
    else if ($desig == "Clerk") { $conv = 500; $extra = 100; }
    else { $conv = 250; $extra = 0; }

    $gross = $basic + $hra + $conv + $extra;

    if ($gross <= 2500) $tax = 0;
    else if ($gross <= 4000) $tax = $gross * 0.03;
    else if ($gross <= 5000) $tax = $gross * 0.05;
    else $tax = $gross * 0.08;

    $net = $gross - $tax;

    echo "<h3>Payslip</h3>";
    echo "Name: $name <br>";
    echo "Designation: $desig <br>";
    echo "Basic: $basic <br>";
    echo "HRA (25%): $hra <br>";
    echo "Conveyance: $conv <br>";
    echo "Extra Allowance: $extra <br>";
    echo "Gross Salary: $gross <br>";
    echo "Income Tax: $tax <br>";
    echo "<b>Net Salary: $net</b>";
}
?>
</body>
</html>`,
    language: "php",
    concepts: [
        "HRA = 25% of basic",
        "Conveyance & extra depend on designation",
        "Gross = basic + HRA + conveyance + extra",
        "Net = Gross - income tax",
        "$_POST[] to get form values"
    ],
    blanks: [
        { text: "$gross = $basic + $hra + $conv + $extra", hint: "Gross salary formula" },
        { text: "$net = $gross - $tax", hint: "Net salary formula" }
    ],
    quiz: {
        question: "What is HRA in this payslip?",
        options: ["25% of basic salary", "Fixed 1000", "10% of gross", "Basic - tax"],
        answer: 0,
        explanation: "HRA = 25% of basic salary"
    }
},

{
    id: "php-05",
    category: "php",
    title: "5. Cookie - Last Visited Date Time",
    description: "Store current date-time in a cookie and display last visited date-time on revisiting.",
    code: `<?php
if (isset($_COOKIE['last_visit'])) {
    echo "Last visited: " . $_COOKIE['last_visit'];
} else {
    echo "Welcome! This is your first visit.";
}

$current = date("Y-m-d H:i:s");
setcookie("last_visit", $current, time() + 86400);

echo "<br>Current visit: " . $current;
?>`,
    language: "php",
    concepts: [
        "setcookie(name, value, expiry) creates a cookie",
        "$_COOKIE['name'] reads a cookie",
        "time() + 86400 = expires after 1 day",
        "date('Y-m-d H:i:s') gets current date-time",
        "isset() checks if cookie exists"
    ],
    blanks: [
        { text: "setcookie(\"last_visit\", $current, time() + 86400)", hint: "Set cookie with expiry" },
        { text: "$_COOKIE['last_visit']", hint: "Read cookie value" }
    ],
    quiz: {
        question: "How many seconds is 1 day?",
        options: ["86400", "3600", "36000", "864000"],
        answer: 0,
        explanation: "1 day = 24 x 60 x 60 = 86400 seconds"
    }
},

{
    id: "php-06",
    category: "php",
    title: "6. Array Operations",
    description: "Create array of 10 names. foreach, sort, unique, pop, reverse, search.",
    code: `<html>
<body>
<h2>Array Operations</h2>

<form method="post">
    Enter name to search: <input type="text" name="search"><br><br>
    <input type="submit" name="submit" value="Run Operations">
</form>

<?php
$names = array("John", "Alice", "Bob", "Charlie", "Alice",
               "David", "Eve", "Bob", "Frank", "Grace");

// a) Display using foreach
echo "<b>a) Display using foreach:</b><br>";
foreach ($names as $name) {
    echo $name . " ";
}

// b) Sorted order
$sorted = $names;
sort($sorted);
echo "<br><br><b>b) Sorted:</b><br>";
foreach ($sorted as $name) {
    echo $name . " ";
}

// c) Without duplicates
$unique = array_unique($names);
echo "<br><br><b>c) Without duplicates:</b><br>";
foreach ($unique as $name) {
    echo $name . " ";
}

// d) Remove last element
$popped = $names;
array_pop($popped);
echo "<br><br><b>d) After removing last:</b><br>";
foreach ($popped as $name) {
    echo $name . " ";
}

// e) Reverse order
$reversed = array_reverse($names);
echo "<br><br><b>e) Reversed:</b><br>";
foreach ($reversed as $name) {
    echo $name . " ";
}

// f) Search an element
$search = isset($_POST['search']) ? $_POST['search'] : "Charlie";
$key = array_search($search, $names);
echo "<br><br><b>f) Search '$search':</b><br>";
if ($key !== false)
    echo "Found at index: $key";
else
    echo "Not found";
?>
</body>
</html>`,
    language: "php",
    concepts: [
        "foreach ($arr as $val) loops through array",
        "sort() sorts alphabetically",
        "array_unique() removes duplicates",
        "array_pop() removes last element",
        "array_reverse() reverses array",
        "array_search() finds element index"
    ],
    blanks: [
        { text: "array_unique($names)", hint: "Remove duplicates" },
        { text: "array_search($search, $names)", hint: "Search for element" }
    ],
    quiz: {
        question: "Which function removes last element from PHP array?",
        options: ["array_pop()", "array_push()", "array_shift()", "array_remove()"],
        answer: 0,
        explanation: "array_pop() removes and returns the last element"
    }
},

{
    id: "php-07",
    category: "php",
    title: "7. Fruits List Box - Display Selected",
    description: "Display a list of fruits in a list box. Display the selected fruits in a webpage.",
    code: `<html>
<body>
<h2>Select Fruits</h2>

<form method="post">
    <select name="fruits[]" multiple size="5">
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
        <option value="Pineapple">Pineapple</option>
    </select>
    <br><br>
    <i>Hold Ctrl to select multiple</i><br><br>
    <input type="submit" name="submit" value="Show Selected">
</form>

<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['fruits'])) {
        $fruits = $_POST['fruits'];

        echo "<h3>Selected Fruits:</h3>";
        echo "<ul>";
        foreach ($fruits as $fruit) {
            echo "<li>" . $fruit . "</li>";
        }
        echo "</ul>";

        echo "Total selected: " . count($fruits);
    } else {
        echo "Please select at least one fruit.";
    }
}
?>
</body>
</html>`,
    language: "php",
    concepts: [
        "name='fruits[]' with [] to send as array",
        "multiple attribute allows multi-select",
        "$_POST['fruits'] receives array",
        "foreach loops through selected items",
        "count() gives number of items"
    ],
    blanks: [
        { text: "name=\"fruits[]\" multiple", hint: "Array name + multi-select" },
        { text: "foreach ($fruits as $fruit)", hint: "Loop through selected" }
    ],
    quiz: {
        question: "Why use [] in name attribute for multi-select?",
        options: ["To send values as an array", "To allow multiple selections", "For CSS styling", "To create a list"],
        answer: 0,
        explanation: "name='items[]' tells PHP to receive values as array"
    }
},

// ==================== ANDROID ====================

{
    id: "android-01",
    category: "android",
    title: "Toast Hello World",
    description: "Write a program to Toast Hello World",
    code: `import android.app.Activity;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toast.makeText(this, "Hello World", Toast.LENGTH_SHORT).show();
    }
}`,
    language: "java",
    concepts: ["Toast.makeText(context, message, duration)", "Toast.LENGTH_SHORT / Toast.LENGTH_LONG", ".show() to display the toast"],
    blanks: [
        { text: "Toast.makeText(this, \"Hello World\", Toast.LENGTH_SHORT).show();", hint: "Context, message, duration" }
    ],
    quiz: {
        question: "Which method displays a Toast message?",
        options: [".show()", ".display()", ".print()", ".toast()"],
        answer: 0,
        explanation: ".show() is called at the end of Toast.makeText() to display it"
    }
},

{
    id: "android-02",
    category: "android",
    title: "Add Two Numbers",
    description: "Write a program to add two numbers",
    code: `// activity_main.xml: add EditText(id=e1), EditText(id=e2), Button(id=btn), TextView(id=tv)

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText e1 = (EditText) findViewById(R.id.e1);
                EditText e2 = (EditText) findViewById(R.id.e2);
                TextView tv = (TextView) findViewById(R.id.tv);

                int a = Integer.parseInt(e1.getText().toString());
                int b = Integer.parseInt(e2.getText().toString());

                tv.setText("Sum = " + (a + b));
            }
        });
    }
}`,
    language: "java",
    concepts: ["findViewById() to get views", "getText().toString() reads EditText value", "Integer.parseInt() converts String to int", "setText() updates TextView"],
    blanks: [
        { text: "Integer.parseInt(et1.getText().toString())", hint: "Convert EditText value to int" },
        { text: "tv.setText(\"Sum = \" + sum)", hint: "Show result in TextView" }
    ],
    quiz: {
        question: "How do you read text from an EditText?",
        options: ["getText().toString()", "getValue()", "readText()", "getText()"],
        answer: 0,
        explanation: "getText() returns Editable, .toString() converts it to String"
    }
},

{
    id: "android-03",
    category: "android",
    title: "Alert Box with OK and Cancel",
    description: "Write a program to Display an alert box with OK and Cancel",
    code: `// activity_main.xml: add Button(id=btn)

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                AlertDialog.Builder b = new AlertDialog.Builder(MainActivity.this);
                b.setTitle("Alert");
                b.setMessage("Do you want to continue?");
                b.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int i) {
                        Toast.makeText(MainActivity.this, "OK clicked", Toast.LENGTH_SHORT).show();
                    }
                });
                b.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int i) {
                        Toast.makeText(MainActivity.this, "Cancel clicked", Toast.LENGTH_SHORT).show();
                    }
                });
                b.show();
            }
        });
    }
}`,
    language: "java",
    concepts: ["AlertDialog.Builder to create dialog", "setPositiveButton for OK", "setNegativeButton for Cancel", "builder.show() displays dialog"],
    blanks: [
        { text: "new AlertDialog.Builder(MainActivity.this)", hint: "Create builder with context" },
        { text: "setPositiveButton(\"OK\", ...)", hint: "OK button handler" }
    ],
    quiz: {
        question: "Which method adds OK button to AlertDialog?",
        options: ["setPositiveButton()", "setOkButton()", "addButton()", "setConfirmButton()"],
        answer: 0,
        explanation: "setPositiveButton() is used for the OK/confirm action"
    }
},

{
    id: "android-04",
    category: "android",
    title: "Menu with Three Items",
    description: "Write a Program to create menu with three menu items",
    code: `// Step 1: res/menu/mymenu.xml  (Right click res → New → Android XML File → Menu)
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@+id/m1" android:title="File" />
    <item android:id="@+id/m2" android:title="Edit" />
    <item android:id="@+id/m3" android:title="Help" />
</menu>

// Step 2: MainActivity.java
import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.mymenu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == R.id.m1)
            Toast.makeText(this, "File", Toast.LENGTH_SHORT).show();
        else if (item.getItemId() == R.id.m2)
            Toast.makeText(this, "Edit", Toast.LENGTH_SHORT).show();
        else
            Toast.makeText(this, "Help", Toast.LENGTH_SHORT).show();
        return true;
    }
}`,
    language: "java",
    concepts: ["onCreateOptionsMenu() inflates the menu", "onOptionsItemSelected() handles clicks", "getMenuInflater().inflate() loads XML menu", "Menu XML file in res/menu/"],
    blanks: [
        { text: "getMenuInflater().inflate(R.menu.main_menu, menu)", hint: "Inflate menu from XML" },
        { text: "onOptionsItemSelected(MenuItem item)", hint: "Handle menu item click" }
    ],
    quiz: {
        question: "Where is the menu XML file stored?",
        options: ["res/menu/", "res/layout/", "res/drawable/", "res/values/"],
        answer: 0,
        explanation: "Menu XML files go in the res/menu/ folder"
    }
},

{
    id: "android-05",
    category: "android",
    title: "Select Gender using Radio Button",
    description: "Write a Program to Select gender using radio button",
    code: `// activity_main.xml: add RadioButton(id=rb1,text=Male), RadioButton(id=rb2,text=Female),
//                    Button(id=btn), TextView(id=tv)

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                RadioButton rb1 = (RadioButton) findViewById(R.id.rb1);
                RadioButton rb2 = (RadioButton) findViewById(R.id.rb2);
                TextView tv     = (TextView) findViewById(R.id.tv);

                if (rb1.isChecked())
                    tv.setText("Gender: Male");
                else if (rb2.isChecked())
                    tv.setText("Gender: Female");
                else
                    tv.setText("Please select");
            }
        });
    }
}`,
    language: "java",
    concepts: ["RadioButton.isChecked() returns true/false", "RadioGroup groups radio buttons", "Only one radio button can be selected at a time"],
    blanks: [
        { text: "male.isChecked()", hint: "Check if radio button is selected" },
        { text: "tv.setText(\"Gender: Male\")", hint: "Display selected gender" }
    ],
    quiz: {
        question: "How do you check if a RadioButton is selected?",
        options: ["isChecked()", "isSelected()", "isEnabled()", "isActive()"],
        answer: 0,
        explanation: "isChecked() returns true if the RadioButton is selected"
    }
},

{
    id: "android-06",
    category: "android",
    title: "Check Items Listed (ListView)",
    description: "Write a Program to check the items listed",
    code: `// activity_main.xml: add ListView(id=lv)

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String[] items = {"Cricket", "Football", "Tennis", "Hockey", "Chess"};

        ListView lv = (ListView) findViewById(R.id.lv);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(
            this,
            android.R.layout.simple_list_item_1,
            items
        );
        lv.setAdapter(adapter);
    }
}`,
    language: "java",
    concepts: ["ListView displays a scrollable list", "ArrayAdapter connects data to ListView", "android.R.layout.simple_list_item_1 is built-in row layout", "String[] holds the list items"],
    blanks: [
        { text: "new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, items)", hint: "Create adapter with context, layout, data" },
        { text: "lv.setAdapter(adapter)", hint: "Connect adapter to ListView" }
    ],
    quiz: {
        question: "What does ArrayAdapter do?",
        options: ["Connects data array to ListView", "Creates the list items", "Styles the ListView", "Sorts the list"],
        answer: 0,
        explanation: "ArrayAdapter bridges the String[] data and the ListView widget"
    }
},

{
    id: "android-07",
    category: "android",
    title: "Fetch EditText and Display in TextView",
    description: "Write a program to fetch data from an EditText and display it in a TextView",
    code: `// activity_main.xml: add EditText(id=et), Button(id=btn), TextView(id=tv)

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText et = (EditText) findViewById(R.id.et);
                TextView tv = (TextView) findViewById(R.id.tv);
                String name = et.getText().toString();
                tv.setText("Hello " + name);
            }
        });
    }
}`,
    language: "java",
    concepts: ["getText().toString() reads input from EditText", "setText() updates the TextView", "findViewById() links Java to XML view"],
    blanks: [
        { text: "et.getText().toString()", hint: "Read value from EditText" },
        { text: "tv.setText(\"Hello, \" + name)", hint: "Show value in TextView" }
    ],
    quiz: {
        question: "What does getText().toString() do?",
        options: ["Reads EditText value as String", "Sets EditText value", "Clears EditText", "Hides EditText"],
        answer: 0,
        explanation: "getText() returns Editable; .toString() converts it to a readable String"
    }
},

{
    id: "android-08",
    category: "android",
    title: "Multiplication Table",
    description: "Write a program to display multiplication table of a given number",
    code: `// activity_main.xml: add EditText(id=et), Button(id=btn), TextView(id=tv)

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText et = (EditText) findViewById(R.id.et);
                TextView tv = (TextView) findViewById(R.id.tv);
                int n = Integer.parseInt(et.getText().toString());
                String result = "";
                for (int i = 1; i <= 10; i++) {
                    result += n + " x " + i + " = " + (n * i) + "\\n";
                }
                tv.setText(result);
            }
        });
    }
}`,
    language: "java",
    concepts: ["StringBuilder to build multi-line output", "for loop from 1 to 10", "\\n for new line in TextView"],
    blanks: [
        { text: "new StringBuilder()", hint: "Build multi-line string" },
        { text: "sb.append(n + \" x \" + i + \" = \" + (n*i) + \"\\n\")", hint: "Append each table line" }
    ],
    quiz: {
        question: "Why use StringBuilder for multiplication table?",
        options: ["To efficiently build multi-line text", "It is faster than int", "Required by Android", "To parse numbers"],
        answer: 0,
        explanation: "StringBuilder efficiently concatenates multiple strings without creating new objects each time"
    }
},

{
    id: "android-09",
    category: "android",
    title: "Start Another Activity using Intent",
    description: "Write a program to start another activity from your own activity using intent",
    code: `// Step 1: MainActivity.java
// activity_main.xml: add Button(id=btn)

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this, SecondActivity.class);
                startActivity(i);
            }
        });
    }
}

// Step 2: SecondActivity.java
import android.app.Activity;
import android.os.Bundle;
import android.widget.Toast;

public class SecondActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        Toast.makeText(this, "Welcome to Second Activity", Toast.LENGTH_SHORT).show();
    }
}

// Step 3: AndroidManifest.xml — add inside <application> tag:
// <activity android:name=".SecondActivity"></activity>`,
    language: "java",
    concepts: ["Intent links two activities", "new Intent(CurrentActivity.this, TargetActivity.class)", "startActivity(intent) launches the new screen", "Declare activity in AndroidManifest.xml"],
    blanks: [
        { text: "new Intent(MainActivity.this, SecondActivity.class)", hint: "From which activity to which" },
        { text: "startActivity(intent)", hint: "Launch the intent" }
    ],
    quiz: {
        question: "What does startActivity(intent) do?",
        options: ["Opens another Activity", "Sends a message", "Starts a service", "Shows a toast"],
        answer: 0,
        explanation: "startActivity(intent) launches the Activity specified in the Intent"
    }
},

{
    id: "android-10",
    category: "android",
    title: "Login with Username and Password",
    description: "Write a program for Log in Using username and password",
    code: `// activity_main.xml: add EditText(id=etUser), EditText(id=etPass), Button(id=btn), TextView(id=tv)

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn = (Button) findViewById(R.id.btn);
        btn.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText etUser = (EditText) findViewById(R.id.etUser);
                EditText etPass = (EditText) findViewById(R.id.etPass);
                TextView tv     = (TextView) findViewById(R.id.tv);

                String user = etUser.getText().toString();
                String pass = etPass.getText().toString();

                if (user.equals("admin") && pass.equals("1234"))
                    tv.setText("Login Successful!");
                else
                    tv.setText("Invalid credentials!");
            }
        });
    }
}`,
    language: "java",
    concepts: ["Use .equals() to compare Strings (not ==)", "EditText for password — set inputType to textPassword in XML", "Simple credential check with if-else"],
    blanks: [
        { text: "user.equals(\"admin\") && pass.equals(\"1234\")", hint: "Compare both username and password" },
        { text: "tv.setText(\"Login Successful!\")", hint: "Show result in TextView" }
    ],
    quiz: {
        question: "Why use .equals() instead of == for String comparison?",
        options: ["== compares references, .equals() compares values", "They are the same", ".equals() is faster", "== is for numbers only"],
        answer: 0,
        explanation: "In Java, == checks if two variables point to the same object; .equals() checks if their content is the same"
    }
},

// ==================== SHELL ====================

{
    id: "shell-01",
    category: "shell",
    title: "Area of a Circle",
    description: "Write a shell script to find area of a circle",
    code: `#!/bin/bash
echo "Enter radius:"
read r
area=$(echo "scale=2; 3.14159 * $r * $r" | bc)
echo "Area of circle = $area"`,
    language: "bash",
    concepts: ["read gets user input", "bc is a calculator for decimal math", "scale=2 sets 2 decimal places", "$(…) captures command output"],
    blanks: [
        { text: "read r", hint: "Read radius from user" },
        { text: "echo \"scale=2; 3.14159 * $r * $r\" | bc", hint: "Calculate area using bc" }
    ],
    quiz: {
        question: "What does 'bc' do in shell scripting?",
        options: ["Basic Calculator for math operations", "Bash Command", "Binary Convert", "Block Copy"],
        answer: 0,
        explanation: "bc is a command-line calculator that handles decimal/floating point math"
    }
},

{
    id: "shell-02",
    category: "shell",
    title: "Even or Odd",
    description: "Write a shell script to find given number is even or odd",
    code: `#!/bin/bash
echo "Enter a number:"
read n
if [ $((n % 2)) -eq 0 ]
then
    echo "$n is Even"
else
    echo "$n is Odd"
fi`,
    language: "bash",
    concepts: ["$(( )) for arithmetic", "% is modulo operator", "-eq means equal to in shell", "if/then/else/fi syntax"],
    blanks: [
        { text: "$((n % 2)) -eq 0", hint: "Modulo 2 equals 0 means even" }
    ],
    quiz: {
        question: "What does -eq mean in shell?",
        options: ["Equal to", "Not equal", "Greater than", "Less than"],
        answer: 0,
        explanation: "-eq is the shell arithmetic comparison for 'equal to'"
    }
},

{
    id: "shell-03",
    category: "shell",
    title: "Menu Driven Calculator",
    description: "Write a shell script to make a menu driven calculator using case",
    code: `#!/bin/bash
echo "Enter two numbers:"
read a b
echo "1. Add  2. Subtract  3. Multiply  4. Divide"
echo "Enter choice:"
read choice
case $choice in
    1) echo "Result = $((a + b))" ;;
    2) echo "Result = $((a - b))" ;;
    3) echo "Result = $((a * b))" ;;
    4) echo "Result = $((a / b))" ;;
    *) echo "Invalid choice" ;;
esac`,
    language: "bash",
    concepts: ["case $var in ... esac for multi-branch", ";; ends each case", "* is the default case", "$(( )) for arithmetic"],
    blanks: [
        { text: "case $choice in", hint: "Start case statement" },
        { text: "*) echo \"Invalid choice\" ;;", hint: "Default/fallback case" }
    ],
    quiz: {
        question: "What does ;; mean in a case statement?",
        options: ["End of a case branch", "Comment", "Continue to next case", "Exit script"],
        answer: 0,
        explanation: ";; marks the end of each case option block"
    }
},

{
    id: "shell-04",
    category: "shell",
    title: "Greatest of Three Numbers",
    description: "Write a shell script to find the greatest of three numbers",
    code: `#!/bin/bash
echo "Enter three numbers:"
read a b c
if [ $a -gt $b ] && [ $a -gt $c ]
then
    echo "$a is greatest"
elif [ $b -gt $c ]
then
    echo "$b is greatest"
else
    echo "$c is greatest"
fi`,
    language: "bash",
    concepts: ["-gt means greater than", "&& is logical AND in shell", "if/elif/else/fi for multiple conditions"],
    blanks: [
        { text: "$a -gt $b ] && [ $a -gt $c", hint: "a greater than both b and c" },
        { text: "elif [ $b -gt $c ]", hint: "Else-if for second condition" }
    ],
    quiz: {
        question: "What does -gt mean in shell?",
        options: ["Greater than", "Greater than or equal", "Less than", "Not equal"],
        answer: 0,
        explanation: "-gt is the shell comparison operator for 'greater than'"
    }
},

{
    id: "shell-05",
    category: "shell",
    title: "Mean and Standard Deviation",
    description: "Write a shell script to compute mean and standard deviation of three numbers",
    code: `#!/bin/bash

echo "Enter three numbers:"
read a b c

# Mean calculation
mean=$(( (a + b + c) / 3 ))

# Standard deviation calculation
d1=$((a - mean))
d2=$((b - mean))
d3=$((c - mean))

sd=$(echo "sqrt(($d1*$d1 + $d2*$d2 + $d3*$d3)/3)" | bc -l)

echo "Mean = $mean"
echo "Standard Deviation = $sd"`,
    language: "bash",
    concepts: ["bc -l loads math library (enables sqrt)", "scale=2 for 2 decimal places", "^ for power/exponent in bc", "$(…) captures result"],
    blanks: [
        { text: "($a + $b + $c) / 3", hint: "Formula for mean" },
        { text: "sqrt($var)", hint: "Square root for standard deviation" }
    ],
    quiz: {
        question: "Why use bc -l instead of bc?",
        options: ["To enable math functions like sqrt()", "To use less memory", "For faster execution", "To read input"],
        answer: 0,
        explanation: "bc -l loads the math library which provides functions like sqrt(), sin(), cos() etc."
    }
},

{
    id: "shell-06",
    category: "shell",
    title: "Sum of All Digits",
    description: "Write a shell script to find sum of all digits from a given number",
    code: `#!/bin/bash
echo "Enter a number:"
read n
sum=0
while [ $n -gt 0 ]
do
    digit=$((n % 10))
    sum=$((sum + digit))
    n=$((n / 10))
done
echo "Sum of digits = $sum"`,
    language: "bash",
    concepts: ["% 10 extracts last digit", "/ 10 removes last digit", "while loop runs until n becomes 0", "sum accumulates digits"],
    blanks: [
        { text: "digit=$((n % 10))", hint: "Extract last digit" },
        { text: "n=$((n / 10))", hint: "Remove last digit" }
    ],
    quiz: {
        question: "How do you extract the last digit of a number?",
        options: ["n % 10", "n / 10", "n - 10", "n * 10"],
        answer: 0,
        explanation: "Modulo 10 gives the remainder when divided by 10, which is the last digit"
    }
},

{
    id: "shell-07",
    category: "shell",
    title: "Reverse of a Number",
    description: "Write a shell script to find reverse of a number",
    code: `#!/bin/bash
echo "Enter a number:"
read n
rev=0
while [ $n -gt 0 ]
do
    digit=$((n % 10))
    rev=$((rev * 10 + digit))
    n=$((n / 10))
done
echo "Reversed number = $rev"`,
    language: "bash",
    concepts: ["Build reverse by: rev = rev * 10 + last_digit", "% 10 extracts last digit", "/ 10 removes last digit", "while loop until n = 0"],
    blanks: [
        { text: "rev=$((rev * 10 + digit))", hint: "Build reverse number" }
    ],
    quiz: {
        question: "What is the formula to build a reversed number?",
        options: ["rev = rev * 10 + last_digit", "rev = rev + last_digit", "rev = last_digit * 10", "rev = n / 10"],
        answer: 0,
        explanation: "Multiply current reverse by 10 (shift left) then add the new digit"
    }
},

{
    id: "shell-08",
    category: "shell",
    title: "Prime Numbers up to N",
    description: "Write a shell script to find prime numbers up to a given number",
    code: `#!/bin/bash
echo "Enter a number:"
read n
echo "Prime numbers up to $n:"
for (( i=2; i<=n; i++ ))
do
    flag=0
    for (( j=2; j<i; j++ ))
    do
        if [ $((i % j)) -eq 0 ]
        then
            flag=1
            break
        fi
    done
    if [ $flag -eq 0 ]
    then
        echo $i
    fi
done`,
    language: "bash",
    concepts: ["flag=0 means prime; flag=1 means not prime", "break exits inner loop early", "for (( ; ; )) is C-style for loop in bash", "Nested loops for divisibility check"],
    blanks: [
        { text: "flag=0", hint: "Assume prime initially" },
        { text: "if [ $flag -eq 0 ]", hint: "Check if still prime" }
    ],
    quiz: {
        question: "What does 'break' do inside a loop?",
        options: ["Exits the current loop immediately", "Skips to next iteration", "Ends the script", "Prints a line"],
        answer: 0,
        explanation: "break exits the innermost loop immediately when a condition is met"
    }
},

{
    id: "shell-09",
    category: "shell",
    title: "N Fibonacci Numbers",
    description: "Write a shell script to find n Fibonacci numbers",
    code: `#!/bin/bash
echo "Enter how many Fibonacci numbers:"
read n
a=0
b=1
echo "Fibonacci series:"
for (( i=1; i<=n; i++ ))
do
    echo $a
    temp=$((a + b))
    a=$b
    b=$temp
done`,
    language: "bash",
    concepts: ["Start with a=0, b=1", "Next = a + b, then shift: a=b, b=next", "temp stores the new value before overwriting", "for loop runs n times"],
    blanks: [
        { text: "temp=$((a + b))", hint: "Calculate next Fibonacci number" },
        { text: "a=$b ; b=$temp", hint: "Shift the two values forward" }
    ],
    quiz: {
        question: "In Fibonacci, what is the next number after a and b?",
        options: ["a + b", "a - b", "a * b", "a / b"],
        answer: 0,
        explanation: "Each Fibonacci number is the sum of the two preceding numbers"
    }
},

{
    id: "shell-10",
    category: "shell",
    title: "Armstrong Number",
    description: "Write a shell script to check whether a given number is Armstrong or not",
    code: `#!/bin/bash
echo "Enter a number:"
read n
temp=$n
sum=0
while [ $temp -gt 0 ]
do
    digit=$((temp % 10))
    sum=$((sum + digit * digit * digit))
    temp=$((temp / 10))
done
if [ $sum -eq $n ]
then
    echo "$n is an Armstrong number"
else
    echo "$n is not an Armstrong number"
fi`,
    language: "bash",
    concepts: ["Armstrong: sum of cubes of digits == original number", "Store original in temp to preserve n for final comparison", "% 10 extracts digit, / 10 removes it"],
    blanks: [
        { text: "sum=$((sum + digit * digit * digit))", hint: "Add cube of each digit" },
        { text: "if [ $sum -eq $n ]", hint: "Compare sum with original" }
    ],
    quiz: {
        question: "What is an Armstrong number?",
        options: ["Sum of cubes of digits equals the number", "Sum of digits equals the number", "Product of digits equals the number", "Number divisible by all its digits"],
        answer: 0,
        explanation: "Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153"
    }
},

{
    id: "shell-11",
    category: "shell",
    title: "Reverse String and Palindrome Check",
    description: "Write a shell script to reverse a string and check whether a given string is palindrome or not",
    code: `#!/bin/bash
echo "Enter a string:"
read str
rev=$(echo $str | rev)
echo "Reversed string = $rev"
if [ "$str" = "$rev" ]
then
    echo "$str is a Palindrome"
else
    echo "$str is not a Palindrome"
fi`,
    language: "bash",
    concepts: ["rev command reverses a string", "Use = (not -eq) to compare strings", "Quote variables \"$str\" to handle spaces", "$(…) captures command output"],
    blanks: [
        { text: "rev=$(echo $str | rev)", hint: "Reverse the string using rev command" },
        { text: "if [ \"$str\" = \"$rev\" ]", hint: "Compare original and reversed" }
    ],
    quiz: {
        question: "Which command reverses a string in shell?",
        options: ["rev", "reverse", "str -r", "flip"],
        answer: 0,
        explanation: "The 'rev' command reverses the characters of each line of input"
    }
},

{
    id: "shell-12",
    category: "shell",
    title: "Count Lines, Words and Characters",
    description: "Write a shell script to count no of line, words and characters of a input file",
    code: `#!/bin/bash
echo "Enter filename:"
read filename
lines=$(wc -l < $filename)
words=$(wc -w < $filename)
chars=$(wc -c < $filename)
echo "Lines      = $lines"
echo "Words      = $words"
echo "Characters = $chars"`,
    language: "bash",
    concepts: ["wc -l counts lines", "wc -w counts words", "wc -c counts characters/bytes", "< redirects file as input to command"],
    blanks: [
        { text: "wc -l < $filename", hint: "Count lines in file" },
        { text: "wc -w < $filename", hint: "Count words in file" }
    ],
    quiz: {
        question: "What does wc -w count?",
        options: ["Words", "Lines", "Characters", "Bytes"],
        answer: 0,
        explanation: "wc -w counts the number of words; -l for lines, -c for characters"
    }
},

{
    id: "shell-13",
    category: "shell",
    title: "Factorial of a Number",
    description: "Write a shell script find the factorial of a given number",
    code: `#!/bin/bash
echo "Enter a number:"
read n
fact=1
for (( i=1; i<=n; i++ ))
do
    fact=$((fact * i))
done
echo "Factorial of $n = $fact"`,
    language: "bash",
    concepts: ["fact starts at 1 (not 0)", "for loop from 1 to n", "fact = fact * i accumulates product", "$(( )) for arithmetic"],
    blanks: [
        { text: "fact=$((fact * i))", hint: "Multiply fact by current i" }
    ],
    quiz: {
        question: "Why initialize fact = 1 and not 0?",
        options: ["Multiplying by 0 gives 0 always", "1 is just a convention", "0 causes error", "Loop starts at 0"],
        answer: 0,
        explanation: "If fact starts at 0, any multiplication gives 0. We need 1 as the identity element for multiplication"
    }
},

{
    id: "shell-14",
    category: "shell",
    title: "Gross Salary Calculation",
    description: "Employee Basic Pay is input through keyboard. DA is 40% of basic pay and HRA is 20% of basic pay. Write a shell script to calculate gross salary.",
    code: `#!/bin/bash

echo "Enter Basic Pay:"
read basic

da=$(echo "$basic * 0.40" | bc)
hra=$(echo "$basic * 0.20" | bc)

gross=$(echo "$basic + $da + $hra" | bc)

echo "Basic Pay: $basic"
echo "DA (40%): $da"
echo "HRA (20%): $hra"
echo "Gross Salary: $gross"`,
    language: "bash",
    concepts: ["DA = 40% of basic", "HRA = 20% of basic", "Gross = Basic + DA + HRA", "bc used for decimal math"],
    blanks: [
        { text: "$basic * 40 / 100", hint: "40% of basic for DA" },
        { text: "$basic + $da + $hra", hint: "Gross = Basic + DA + HRA" }
    ],
    quiz: {
        question: "Gross Salary formula is?",
        options: ["Basic + DA + HRA", "Basic + DA", "Basic * 1.6", "Basic - Tax"],
        answer: 0,
        explanation: "Gross Salary = Basic Pay + DA (40%) + HRA (20%)"
    }
},

{
    id: "shell-15",
    category: "shell",
    title: "Good Morning / Afternoon / Evening",
    description: "Write a shell script which displays Good Morning / Good Afternoon / Good Evening depending on the time it gets executed",
    code: `#!/bin/bash
hour=$(date +%H)
if [ $hour -lt 12 ]
then
    echo "Good Morning!"
elif [ $hour -lt 17 ]
then
    echo "Good Afternoon!"
else
    echo "Good Evening!"
fi`,
    language: "bash",
    concepts: ["date +%H gets current hour (0-23)", "-lt means less than", "Hour < 12 → Morning, 12-16 → Afternoon, 17+ → Evening"],
    blanks: [
        { text: "hour=$(date +%H)", hint: "Get current hour using date command" },
        { text: "$hour -lt 12", hint: "Before 12 means morning" }
    ],
    quiz: {
        question: "What does date +%H return?",
        options: ["Current hour in 24-hour format", "Current date", "Current minute", "Current second"],
        answer: 0,
        explanation: "date +%H returns hour in 24-hour format (00 to 23)"
    }
}

];
