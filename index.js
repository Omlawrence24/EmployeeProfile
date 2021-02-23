const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
 const empHtml = require("./empHtml.js");
var Prompt = require("prompt-expand");
// const empHtmlInfo = require("./empHtml");
// const writeFileAsync = util.promisify(fs.writeFile);


const questions = [];

// const writeFileAsync = promisify(fs.writeFile);

// Creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}

// This prompts for read me input 
 function intake() {
  console.log("Welcome to Employee Management Portal ");
  console.log("Lets Create your Profile ");
   inquirer.prompt([
    {
      type: "input",
      message: "What is your Name?",
      name: "empname",
    },
    {
      type: "input",
      message: "What is your Employee ID?",
      name: "empId",

    },
    {
      type: "input",
      message: "What is your Email?",
      name: "description",
    },

    {
      type: "input",
      message: "What is your Office Number?",
      name: "office",
    },
    {
      type: "list",
      message: "What would like to add to your Team? ",
      name: "addon",
      choices: ['Engineer', 'Intern','Finish building my Team'], 
    },
    {
      type: "expand",
      name: "addon",
      message: "Who would you like to add to your team?",
      choices: [
        {
          key: 'a',
          value: "Engineer",
        },
        {
          key: 'c',
          value: "Intern",
        },
      ],
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    
    {
      type: "input",
      message: "Developer Info",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your GitHub Name",
      name: "githubName",
    },
    {
      type: "input",
      message: "What is your GitHub Email?",
      name: "githubEmail",
    },
     ])
  // gathers the data to create the README after user input 
    .then(function (data) {
      let html = empHtmlHtml (data);
     
      return writeFileAsync("employeeinfo/empHtmlInfo.html", html);
     
       })
       .then(function() {
     console.log("Successfully Created Html")
       })
       .catch(function(err) {
         console.log(err);
       });
         

 
}
    intake() 
    