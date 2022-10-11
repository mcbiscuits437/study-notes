"use strict"

alert("I'm JavaScript")

let message = 'Hello!';
//Don't use the following:
let user = 'John', age = 25, message = 'Hello';
//Do use this format:
let user = 'John';
let age = 25;
let message = 'Hello';

/* When you want to declare a variable with multiple words
it's best practice to use camelCase */
//Case mAtTeRs! apple != APPLE

//To declare a constant (i.e. unchanging variable) use const
//These variables cannot be reassigned
const myBirthday = '02.05.1989';

//Uppercase Constants
//It is a good practice to use constants for aliases for 
difficult to remember values that are known prior to execution. 

Such constants are named using capital letters and underscores(_)

For example: colors in "web"(hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";

//...when we need to pick a color
let color = COLOR_ORANGE;

//Alert, Prompt, Confirm

//The alert function opens a modal window to display a message
alert('Hello');

/*The prompt function opens a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. 

result = prompt(title, [default]);

Title = The text to show the visitor

default = an optional second paramet, the initial value displayed in the input field

Visitor types response into the input field and that is stored in the result. Or, if visitor hits Cancel or Esc key, result will be null. 

ex:
let age = prompt('How old are you?', 100);

alert(`You are ${age}) years old!`);

Confirm
syntax:

result = confirm(question);

Confirm function shows a modal window with a question and two buttons: OK and Cancel.

Result is True if OK is pressed and false otherwise (cancel/Esc).



Type Conversions

String conversion happens when we need the string form of a value

let value = true;
alert(typeof value); //boolean

vaule = String(value); //now value is a string "true"
alert(typeof value); //string

Numeric conversion happens in mathematical function and expressions automatically. 

Ex, division / is applied to non number:

alert( "6" / "2" ); //3, strings are converted to numbers

use Number(value) function to explicitly convert a value to a number. 

let str = "123";
alert(typeof str); //string

let num = Number(str); //becomes a number 123

alert(typeof num); //number

Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered. 

If the string is not a valid number, the result of such a conversion is NaN. Ex:

let age = Number("an arbitrary string instead of a number");

alert(age); //NaN, conversion failed. 

Numeric conversion rules:

undefined = NaN
null = 0
true and false = 1 and 0
string = Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise. the number is "read" fromt he string. An error gives NaN.

Boolean Conversion

Simplest conversion

happens in logical operations but can also be performed explicitly with a call to Boolean(value).

Values that are intuitively "empty": 0, and empty string, null, undefined, NaN = false
Everything else = true

alert( Boolean(1) ); //true
alert( Boolean(0) ); //false
*special note*
alert( Boolean("0") ); //true- here 0 is a string so the result is true
alert( Boolean("hell") ); //true
alert( Boolean("") ); //false
*special note*
alert( Boolean(" ") ); //true: has a space, an NON-EMPTY string will return as true

Basic Operators, Maths

Operators are things like addition +, multiplication *, subtraction -, and division /. 

an operand - is what the operators are applied to. For instance, in the muliplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Can be called "arguments" instead of "operands". 

an operator is unary if it has a single operand. 

let x = 1;

x = -x;
alert( x ); // -1 unary - makes a value negative. 

an operator is binary if it has two operands. 
let x = 1, y = 3;
alert( y - x); //2, binary minues subtracts values.

Maths

The following math operations are supported:

Addition +
Subtraction -
Multiplication *
Division /
Remainder %
Exponentiation **

Remainder:
alert( 5 % 2); //1, a remainder of 5 divided by 2
alert( 8 % 3); //2, a remainder of 8 divided by 3

Exponentiation:
alert( 2 ** 2 ); // 4
alert( 2 ** 3 ); //8
alert( 2 ** 4 ); //16

Can also do the square root or cube root- this is an exponentiation by 1/2 or 1/3 respectively
alert( 4 ** (1/2) ); //2
alert( 8 ** (1/3) ); //2

String concatenation with binary +

Usually, the plus operator + sums numbers

But when applied to strings, it merges (concatenates) them:

let s = "my" + "string";
alert(s); //mystring

If any of the operands is a string, the other one(s) is converted to a string too:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

different examples, operators work one after another
alert( 2 + 2 + '1' ); // "41" and not "221"

alert( '1' + 2 + 2 ); // "122" and not "14";

ONLY the + operator concatenates. All other operators act as expected and turn string values into numbers:

alert( 6 - '2' ); // 4
alert( '6' / '2' ); // 3

Numeric conversion, unary +

plus operator + applied to a single non number value converts to a number

alert( +true ); // 1
alert ( +"" ); // 0

does the same thing as Number(...) but is shorter
Useful for converting information for maths

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23"

If we want to treat as numbers, we need to convert them first

let apples = "2";
let oranges = "3";

alert( +apples + +oranges ); // 5

the longer variant:
alert( Number(apples) + Number(oranges) ); //5

unary pluses are applied first: they convert strings to numbers, and then the binary plus sums them up. 

Unary pluses are applied first because they have a 
*higher precedence*

Operator precedence

In math we have PEMDAS and left to right
1 + 2 * 2, multiplication is applied first
or if we want to change the order of operators
(1 + 2) * 2

Every operator has a corresponding precedence number. The operators with larger precedence numbers execute first. 
If the precedence is the same, the execution order is from left to right. 

Unary operators have higher precedence than corresponding binary operators:

...
15  unary plus  +
15  unary negation -
14  exponentiation **
13  multiplication *
13  division /
12  addition +
12  subtraction -

Assignment

an assignment = is also an operator. It has a very low precedence of 2. 

That's why, when we assign a variable, like
x = 2 * 2 + 1, the calculations are done first and then the
= is evaluated, storing the result in x.

let x = 2 * 2 + 1;

alert( x ); //5

Assignment = returns a value

all operators in JavaScript return a value. That's obvious for + and -, but also true for =

The call  x = value writes the value into x *and then returns it*

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); //3
alert( c ); //0

Chaining assignments

let a, b, c;

a = b = c = 2 + 2;

alert( a ); //4
alert( b ); //4
alert( c ); //4

Chained assignments evaluate from RIGHT TO LEFT. 

for the purpose of readability, it's best to split into a few lines:

c = 2 + 2;
b = c;
a = c;

Modify-in-place

When we need to apply an operator to a variable and store the new result in the same variable. 

let n = 2;
n = n + 5;
n = n * 2;

Notation can be shortened using the operators += and *=

let n = 2;
n += 5; //now n = 7 (same as n = n + 5)
n *= 2; //now n = 14 (same as n = n * 2)

short "modify-and-assign" operators exist for all arightmetical and bitwise operators: /=, -=, etc. 

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let n = 2;
n *= 3 + 5;
alert( n ); // 16 (right part evaluated first, same as n *= 8).

Increment/Decrement

Increment ++ increases a variable by 1
let counter = 2;
counter++; // same as counter = counter + 1 (but shorter)
alert( counter ); // 3

Decrement -- decreases a variable by 1:
let counter = 2;
counter--; // same as counter = counter - 1 (but shorter)
alert( counter ); //1

Placement

The operators ++ and -- can be placed either before or after a variable

when operator is after the variable, it is in "postfix form": counter++
when operator is in front of variable, it is in "prefix form"

prefix form returns the new variable
postfix form returns the old value (prior to increment/decrement).

let counter = 1;
let a = ++counter; // prefix form increments counter and returns the new value, 2. 
alert(a): // 2


let counter = 1;
let a = counter++; // postfix form returns original variable *before* incrementing.

alert(a); //1

if we'd like to increase a value *and* immediately use the result of the operator-use prefix form:

let counter = 0;
alert( ++counter ); // 1

to increment a value but use it's previous value, use postfix form:

let counter = 0;
alert( counter++ ); // 0

++/-- with Other Operators

Can be used inside expressions as well. 
Precedence is higher than most other arithmetical operators

let counter = 1;
alert( 2 * ++counter); // 4

compare to:

let counter = 1;
alert( 2 * counter++ ); // 2 b/c postfix returns original variable before incrementing

while technically okay, this is bad notation

ONE LINE DOES MULTIPLE THINGS-NOT GOOD

"One line-one action"

let counter = 1;
alert( 2 * counter );
counter++;

Bitwise Operators

bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

the list of operators:
AND ( & );
OR ( | );
XOR ( ^ );
NOT ( ~ );
LEFT SHIFT ( << );
RIGHT SHIFT ( >> );
ZERO-FILL RIGHT SHIFT ( >>> );

Unlikely to be needed, but interesting to know about

Comma
The comma operator , is on of the most rare and unusual operators. 
Allows to eval several expressions, dividing them with a comma ,  Each is evaluated but only the result of the last one is returned. 

let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)

Why use something that throws away everything except the last expression?

Sometimes, use more complex constructs to put several actions in one line. 

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...



COMPARISONS

we know many comparison operators from maths

Greater than or less than
a > b, a < b

Greater/less than or equals
a >=b b, a <=b

Equals
a == b note: the double equality sign == means the equality test, while a single one a = b means an assignment

Not Equals
in JS written as a != b

Boolean is the result

All comparison operators return a boolean value:
-true--means "yes", "correct" or "the truth"
-false--means "no", "wrong", or "not the truth"

Comparison result can be assigned to a variable, just like any value:

let result = 5 > 4;
alert( result );

Ex:
alert( 2 > 1 ); //true (correct)
alert( 2 == 1 ); //false (wrong)
alert( 2 != 1 ); //true (correct)

A comparison result can be assigned to a variable, just like an value

let result = 5 > 4; //assign the result of the comparison
alert( result ); //true

String Comparison

to compare if a string is greater than another, JS uses the so-called "dictionary" or "lexicographical" order. 
i.e. strings are compared letter-by-letter

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); //true
alert( 'Bee' > 'Be' ); //true

Not a real dictionary, but Unicode order
mostly the same as dictionary method, but not exactly

ex: Case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? Lowercase "a". Has a greater index in the internal encoding table JavaScript uses (Unicode). 

Comparison of Different Types

When comparing values of different types, JS converts the values to numbers.

alert( '2' > 1 ); //true, string '2' becomes a number 2
alert( '01' == 1 ); //true, string '01' becomes a number 1

For boolean values, true becomes 1 and false becomes 0

alert( true == 1 ); //true
alert( false == 0 ); //true

Strict Equality Check

regular equality check == cannot differentiate 0 from false

alert( 0 == false ); //true

same thing happens with an empty string

alert( '' == false ); //true

operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero. 

Strict equality operator === checks equality type WITHOUT type conversion

alert( 0 === flase ); //false, because the types are different

also, strict non-equality operator !== analogous to !=

Comparison with Null and Undefined

