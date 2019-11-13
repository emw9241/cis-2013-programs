/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intContinue, intMax, intMin, intRandom, intGuess, intCount, intPoints, stringMax, stringMin, stringLow, stringHigh, stringInvalid, stringGuess, stringEntryPrompt;

//asks the user whether or not they would like to play the Guessing Game
intContinue = prompt("Would you like to play the Guessing Game? Enter '1' to play or '2' to quit.");

//tests that the decision number entered is either 1 or 2 and validates
while (isNaN(intContinue) || intContinue > 2 || intContinue < 1)
  {
   intContinue = parseInt(prompt("If you would like to play, please enter '1', if not, please enter '2'."));
  }


/*begins loop dependent on what the user entered.
 *If the user entered 2, the site will send a final alert
 *thanking the player for stopping by.
 */

while (intContinue < 3 && intContinue > 0)
{
 if(intContinue !=1)
 {
  alert("Thanks for stopping by!");
 }

 //If the user entered 1, the Guessing Game will begin.
 else
{

//Declares the string messages for validation and guessing
stringInvalid = "Unfortunately, your entry was invalid. \n";
stringGuess = "Please enter your guess!";

/*the section declares the string message for the minimum.
 * the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
stringMin = "Please enter your minimum number for the range. This number must at least 0.";
intMin = parseInt(prompt(stringMin));

while (isNaN(intMin) || (intMin < 0))
    {
        intMin = parseInt(prompt(stringInvalid + stringMin));
    }
    document.write("\nLowest number = " + intMin);


/*The section declares the string message for the maximum.
 *The message calculates what 2 greater than the minimum is for the user.
 * the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
stringMax = "Please enter your maximum number for the range. This number must be at least " + (intMin + 2) + ".";
intMax = parseInt(prompt(stringMax));

while (isNaN(intMax) || (intMax < (intMin + 2)))
    {
        intMax = parseInt(prompt(stringInvalid + stringMax));
    }
    document.write("\nMaximum = " + intMax);
    
/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
    intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

var intCount = 1;

/*The section declares the string message for the Entry Prompt.
 * the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt(stringGuess));
stringEntryPrompt = "You must enter a valid number between " + intMin + " and " + intMax +".";

while (intGuess === isNaN || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt(stringEntryPrompt));
}


/* The section declares the string messages for if the entry is too low or too high.
 * The following section
 * provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
stringLow = "Your guess (" + intGuess + ") was too low. Try a number that is higher than " + intGuess + " but lower than " + intMax + "!";
stringHigh = "Your guess (" + intGuess + ") was too high. Try a number that is lower than " + intGuess + " but higher than " + intMin + "!";
 while (intGuess != intRandom)
 {
    if (intGuess < intRandom)
    {
        alert(stringLow);
    }
    else
    {
        alert(stringHigh);
    }
    intCount ++;
    intGuess = parseInt(prompt(stringGuess));
        while (intGuess === isNaN || intGuess < intMin || intGuess > intMax)
            {
            intGuess = parseInt(prompt(stringEntryPrompt));
            }
 }
 
 /* The number of points given to the user begins at 11
  * so that if the user guesses correctly on the first try,
  * they will have 10 points. 10 is the maximum.
  * The number of points will decrease with each guess
  */
 intPoints = 11 - intCount;
   

// provides final output of guess, tries, and points upon successful guessing.
alert("Congratulations!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!\n You get " + intPoints + " points!");

//Asks the player if they would like to continue playing.
intContinue = prompt("Would you like to play the Guessing Game? Enter '1' to play or '2' to quit.");

}
}
