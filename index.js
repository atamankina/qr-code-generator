import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Gebe eine URL hier ein: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    console.log(url)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });