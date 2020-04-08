const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

class Start {

    prompt1() 
    {
        return inquirer
        .prompt([
            {
            type: "input",
            name: "managersName",
            message: "What's your manager's name?"
            },
            {
            type: "input",
            name: "managersId",
            message: "What is your manager's Id?"
            },
            {
            type: "input",
            name: "managersEmail",
            message: "What is your manager's email?"
            },
            {
            type: "input",
            name: "managersOffice",
            message: "What is your manager's office number?"
            },
            {
            type: "list",
            name: "specificRoles",
            message: "What type of team member would you like to add?",
            choices: 
                [
                "Intern",
                "Engineer",
                "I am done addign team members"
                ]
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.managersOffice)
            employees.push(manager);
            console.log(employees);

            if (answers.specificRoles === "Intern") 
            {
                this.prompt2();
            } 
            else if (answers.specificRoles === "Engineer") 
            {
                this.prompt3();
            }
        })
        .catch(error => {
            console.log("There was an error");

        });
    }

    prompt2() {
        return inquirer
        .prompt([
            {
            type: "input",
            name: "internName",
            message: "What's your intern's name?"
            },
            {
            type: "input",
            name: "internId",
            message: "What is your intern's Id?"
            },
            {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
            },
            {
            type: "input",
            name: "internSchool",
            message: "What is your School's name?"
            },
            {
            type: "list",
            name: "specificRoles",
            message: "Would you like to add another team member?",
            choices: 
            [
            "Intern",
            "Engineer",
            "I am done addign team members"
            ]
            },
        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            employees.push(intern);
            console.log(employees);
            
            if (answers.specificRoles === "Intern") 
            {
                this.prompt2();
            } 
            else if (answers.specificRoles === "Engineer") 
            {
                this.prompt3();
            }
        })
        .catch(error => {
            console.log("There was an error");

        });
    }

    prompt3() {
        return inquirer
        .prompt([
            {
            type: "input",
            name: "engineerName",
            message: "What's your engineer's name?"
            },
            {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's Id?"
            },
            {
            type: "input",
            name: "engineerEmail",
            message: "What is your manager's email?"
            },
            {
            type: "input",
            name: "engineerGitHub",
            message: "What is your GitHub username"
            },
            {
            type: "list",
            name: "specificRoles",
            message: "Would you like to add another team member?",
            choices: 
            [
            "Intern",
            "Engineer",
            "I am done addign team members"
            ]
            },
            ])
            .then(answers => 
            {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
            employees.push(engineer);
            console.log(employees);

            if (answers.specificRoles === "Intern") 
            {
                this.prompt2();
            } 
            else if (answers.specificRoles === "Engineer") 
            {
                this.prompt3();
            }

            })
            .catch(error => 
            {
            console.log("There was an error");
            });
    }
}


const generator = new Start();

generator.prompt1();










// // Write code to use inquirer to gather information about the development team members,
// inquirer
//   .prompt([
//     {
//         type: "input",
//         name: "managersName",
//         message: "What's your manager's name?"
//     },
//     {
//         type: "input",
//         name: "managersId",
//         message: "What is your manager's Id?"
//     },
//     {
//         type: "input",
//         name: "managersEmail",
//         message: "What is your manager's email?"
//     },
//     {
//         type: "input",
//         name: "managersOffice",
//         message: "What is your manager's office number?"
//     },
//     {
//         type: "list",
//         name: "specificRoles",
//         message: "What type of team member would you like to add?",
//         choices: [
//           "Intern",
//           "Engineer",
//           "I am done addign team members"
//         ]
//     },

//     // Engineer's Info
//     {
//         type: "input",
//         name: "engineerName",
//         message: "What's your engineer's name?"
//     },
//     {
//         type: "input",
//         name: "engineerId",
//         message: "What is your engineer's Id?"
//     },
//     {
//         type: "input",
//         name: "engineerEmail",
//         message: "What is your manager's email?"
//     },
//     {
//         type: "input",
//         name: "engineerGitHub",
//         message: "What is your GitHub username"
//     },

//     // Intern Info
//     {
//         type: "input",
//         name: "internName",
//         message: "What's your intern's name?"
//     },
//     {
//         type: "input",
//         name: "internId",
//         message: "What is your intern's Id?"
//     },
//     {
//         type: "input",
//         name: "internEmail",
//         message: "What is your intern's email?"
//     },
//     {
//         type: "input",
//         name: "internSchool",
//         message: "What is your School's name?"
//     },

//   ])
//   .then(answers => {
//     console.log(answers);
//   })
//     .catch(error => {
//         console.log("There was an error");

//     });





// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
