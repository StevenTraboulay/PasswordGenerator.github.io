# PasswordGenerator.github.io
A password generator.

Requirements:

Wants the ability to randomly generate passwords:

Acceptance Criteria:
Need a random, new, secure password
clicking the buttom generates the password
you're presented with prompts for the password criteria.
when you are prompted you choose which criteria to include in the password
also choose the length of the password
it is between 8 characters and 128 characters
after choosing ok or cancel on prompts those characters will be in the generation
must include lowercase uppercase number and special characters
once prompts answered it should match the selected items.
after all prompt the password is generated and displayed


Walk through:

First, created the arrays: numbers, characters, uppercase and lower case.

then created the function to call the array and string the password together
add function and logic to ensure a number was chosen in the prompts, as well as subsequent prompts ensuring the array is accessed

first created multiple longer if functions to call the array into the loop however ater confering with the tutor there's a cleaner option to do so
by global variable possible and guaranteed characters, and then turnign the password into options it allows for less code to be used off of one If operation.


we were provided with some basic CSS however I made it much more appealing by addint a background, aligning the texts, adding a button animation and the overall look to be interesting to look at.

after several pushes to the master the product was finished.

