// 8 kyu
// Student's Final Grade

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples:
//
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100
//
// finalGrade(85, 5);    // 90
//
// finalGrade(55, 3);    // 75
//
// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0
// *Use Comparison and Logical Operators.




function finalGrade (exam, projects) {


  console.log("Exam Grade: ", exam, "Completed Projects: ", projects)

  if( (exam > 90 && exam <= 200) || (projects > 10 && projects <= 20) ){

    return 100;

  }
  else if( (exam > 75 && exam <= 100) && (projects >= 5 && projects <= 20) ){

    return 90;

  }
  else if( (exam > 50 && exam <= 90) && (projects >= 2 && projects <= 10) ){

    return 75;

  }
  else{

    return 0;

  }
}

// Sample Tests:

// describe("Sample tests", function(){
//   Test.assertEquals(finalGrade(100, 12), 100);
//   Test.assertEquals(finalGrade(85, 5), 90);
// });
