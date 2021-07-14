//Utility functions

function UserInput (movieNameI, timeOfDayI, userAgeI) {
  this.movieName = movieNameI;
  this.timeOfDay = timeOfDayI;
  this.userAge = userAgeI;
}

function CreateMovie (titleI, timesI, basePriceI) {
  this.title = titleI;
  this.times = timesI;
  this.basePrice = basePriceI;
}

// Business Logic
let bobTheBuilder = new CreateMovie("Bob Strikes Back", ["1:30","3:30","5:30","7:30","11:00"],12);
let userInput = new UserInput("Bob Strikes Back", ["1:30","3:30","5:30","7:30","11:00"],12)

console.log(bobTheBuilder.title === userInput.movieName);


// User Interface Logic
