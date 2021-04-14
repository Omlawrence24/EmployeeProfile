const empHtml = require("./templates/empHtml.js");
const internHtml = require("./templates/internHtml.js");
const engineerHtml = require("./templates/engineerHtml.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


//every time we create a new employee, push an Employee object to our employees array
const employee = [];
let html = ''
let openHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</head>
<body>`
let closeHtml = ` 
<h3> This completes my team with the members needed. </h3>
</div> 
</div>     
</body>
</html>`

// Creates a function to write HTML file
function writeToFile(filename) {
  fs.writeFile(filename, openHtml += html += closeHtml, function (err) {
      
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
    
  });
}
//msmconst writeFileAsync = promisify(fs.writeFile);

// This prompts for employee input 
function intake() {
  console.log("Welcome to Employee Management Portal");
  console.log("Lets Create your Manager Profile ");
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Name?",
      name: "ename",
    },
    {
      type: "input",
      message: "What is your Employee ID?",
      name: "empId",

    },
    {
      type: "input",
      message: "What is your Email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Office Number?",
      name: "office",
    },

  ])
    // gathers the data to create the html after user input 
    .then(function (managerData) {
      console.log(managerData);
      html += empHtml(managerData)
      
      return addNewEmployee();
    })
    
    .catch(function (err) {
      console.log(err);
    });

  // 

}

intake()

//our function that will prompt the user to either...
//1. add an engineer
//2. add an intern
//3. finish building the team
function addNewEmployee() {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would like to add to your Team? ",
      name: "addon",
      choices: ['Engineer', 'Intern', 'Finish building my Team']
    }

  ])
    .then(response => {
      console.log(response.addon);
      
      if (response.addon == 'Engineer') {
        return promptEngineerInfo();
      } else if (response.addon == 'Intern') {
        return promptInternInfo();
      } else if (response.addon == 'Finish building my Team') {
        return writeToFile("./dist/index.html");
      }
    })
}


//our function that will prompt the user to add an intern's school
function promptInternInfo() {
  return inquirer.prompt([
    //we also need to add questions for name, email, id
    {
      type: "input",
      message: "What is your Intern's Name?",
      name: "ename",
    },
    {
      type: "input",
      message: "What is your Intern's Employee ID?",
      name: "empId",
    },
    {
      type: "input",
      message: "What is your Intern's Email?",
      name: "email",
    },
    {
      type: "input",
      message: "Where did your Intern go to school?",
      name: "school",
    },
  ]).then(internInfo => {
    html += internHtml(internInfo)
    console.log(internInfo);
    addNewEmployee()
  });
}
//our function that will prompt the user to add an engineer's github username
function promptEngineerInfo() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Engineer's Name?",
      name: "ename",
    },
    {
      type: "input",
      message: "What is your Engineer's Employee ID?",
      name: "empId",

    },
    {
      type: "input",
      message: "What is your Engineer's Email?",
      name: "email",
    },
    { 
      type: "input",
      message: "What is your github Username?",
      name: "github"
    }
  ]).then(engineerInfo => { 
    html += engineerHtml(engineerInfo)

    console.log(engineerInfo);
    //1. use engineerInfo to create a new Engineer() and push it to our employees array
    addNewEmployee();
  })
}

module.exports = {intake, addNewEmployee, promptInternInfo, promptEngineerInfo}