//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final Mid pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final Exam points (0-35):"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseFloat(prompt("Is the course audit pass/fail (1) or Letter grade (2)"));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
        }
        else
        {
        stringFinalGrade = "Fail";
    }
}
    else
    {
    switch(intGradeOption === 2)
    {
        case floatTotalPts >= 90:
            stringFinalGrade = "A";
            break;
        case floatTotalPts >= 80 && floatTotalPts <90:
            stringFinalGrade = "B";
            break;
        case floatTotalPts >=70 && floatTotalPts <80:
            stringFinalGrade = "C";
            break;
        case floatTotalPts >=60 && floatTotalPts <70:
            stringFinalGrade = "D";
            break;
        case floatTotalPts <60:
            stringFinalGrade = "F";
            break;
    };  
  }  
 }   
alert("Your final grade is: " + stringFinalGrade);
}