// Function to calculate and return a grade based on  marks
function calcGrade() {
  // Set the initial value for marks
  var marks = 65;

  if (marks > 79) {
    return "A"; // Return 'A' if marks are greater than 79
  } else if (marks >= 60 && marks <= 79) {
    return "B"; // Return 'B' if marks are between 60 and 79
  } else if (marks >= 50 && marks <= 59) {
    return "C"; // Return 'C' if marks are between 50 and 59
  } else if (marks >= 40 && marks <= 49) {
    return "D"; // Return 'D' if marks are between 40 and 49
  } else {
    return "E"; // Return 'E' if marks are 40 or below
  }
}

// Output the result of calcGrade function
console.log(calcGrade());
