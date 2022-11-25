
/*
* Profile Generator - asks the user a series of questions through the terminal before responding with a quirky online profile description!
*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Begin capturing profile descrition answers
rl.question("Whats your name? Nicknames are also acceptable ", (nameAnswer) => {
  rl.question("Whats and activity you like doing? ", (activityAnswer) => {
    rl.question("What do you listen to while doing that? ", (musicAnswer) => {
      rl.question("Which meal is your favourite (eg. dinner, brunch, ect.)? ", (mealAnswer) => {
        rl.question("Whats your favourite thing to eat for that meal? ", (favouriteThingAnswer) => {
          rl.question("Which sport is your absolute favourite? ", (sportAnswer) => {
            rl.question("What is your superpower? in a few words, tell us what you are amazing at! ", (superPowerAnswer) => {

              // newline and profile description header
              console.log("\n");
              console.log("Here is your quirky profile description! \n");
              // Respond with their quirky profile description using the results of our question
              console.log(`Hey there! you can call me ${nameAnswer}. Nice to meet you. Sometimes I get a little to intesnse while ${activityAnswer}
and listening to ${musicAnswer}, but don't worry, I swear i'm normal most of the time! If I could eat ${mealAnswer} 3 times a day, 
I would. God didn't put ${favouriteThingAnswer} on this planet for no reason! By the way, did I tell you my favourite sport is ${sportAnswer}? 
And let me leave you with this - I'm no Bruce Wayne, but I ${superPowerAnswer}`);
              // Close program
              rl.close();
            });
          });
        });
      });
    });
  });
});


