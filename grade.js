//. Declare a character variable to store a grade (A, B, C, D, or F) and use a
//switch statement to print a message based on the grade.
var mark=95;
var grade;
switch (true) {

    case(mark>=90 && mark<=100):
        
        
          grade="A+";
        
        break;
    case(mark>=80 && mark<=89):
        
          grade="A";
        
        break;
     case(mark>=70 && mark<=79):
        
          grade="B+"
          break;
     case(mark>=60 && mark<=69):
        grade="B";
        break;
    case(mark>=50 && mark<=59):
        grade="c";
        break;
}
console.log(`Grade is ${grade}`);