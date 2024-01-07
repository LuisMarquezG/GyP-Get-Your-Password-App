# GyP Get your Password App.

## Description

This is the week 5 challenge, the project is create an app that generate safe passwords.

- With this app users will have safe passwords for using where they are required.
- I have learned in this project:
  - How to use the method .concat.
  - How to use the function getRandom().
  - How to use the method .join.
  - I can use if statements with out else.
  - How to use "!" to force a result.



## Logic 
- I have created all the variables that I will need to prompt the requirements for the users to generate the passwords, they will type the length of the password that they want.
  ![alt text](/assets/images/code-screenshots/1-getPasswordOptions.png)

- I have created an object called return and I storage there all the variables previously created with a value that I will use later for generate the password
  ![alt text](/assets/images/code-screenshots/2-prompts-logic.png)

- Then, the function getRandom(arr) generates a valid random index for the array passed as an argument and then returns the element corresponding to that index, as I understand, this fuction will provide the connection between the previous and the following logics.
   ![alt text](/assets/images/code-screenshots/3-getRandom.png)
- From my point of view this is the core of the app, where the magic happens.
  - This fuction generates a random password based on the options showed to the user.
  - The function uses user-provided options to determine which types of characters to include in the password (lowercase, uppercase, numeric, special, emojis) and then generates a random password that meets those specifications. The final password is shuffled to ensure that guaranteed characters appear in a random order.
    ![alt text](/assets/images/code-screenshots/4-generatePassword.png)
  - These variables contain arrays that will be used in the if statment to generate the passwords.
    ![alt text](/assets/images/code-screenshots/5-vars-in-generatePassword.png)
  - With the concat method the diferent type of characters will show all together as a result for the user.
  - The push method will put them in to the array.
  - The random result will be generate by the getRandom function that is using as argument, the variables containing the arrays of characters.
    ![alt text](/assets/images/code-screenshots/6-if-statement-generatePassword.png)
    

    



## License

