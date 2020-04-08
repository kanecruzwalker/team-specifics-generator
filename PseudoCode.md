<!-- # Unit 10 OOP Homework: Template Engine - Employee Summary

Build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. 

Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.

## Instructions

You will build a software engineering team generator command line application. 

The application will prompt the user for information about the team manager and then information about the team members. 

The user can input any number of team members, and they may be a mix of engineers and interns. 

This assignment must also pass all unit tests. 

When the user has completed building the team

An HTML file is created that displays a nicely formatted team roster based on the information provided by the user.

USERS STORY
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How do you deliver this? Here are some guidelines:

-Use Inquirer to gather information 
    -prompt user for their email
    -prompt user for their id
    
    -prompt user for their specific roles

    -intern position
        -provide their school

    -engineer position
        -provide their GitHub username

APP should run as a Node CLI to gather information about each employee


In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

-application dependencies are as follows
    -JEST 
        -for running tests
    -INQUIRER
        -for collecting input from the user


There are also unit tests to help you build the classes necessary.
It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

🎗 Remember, you can run the tests at any time with `npm run test`
It is recommended that you start with a directory structure that looks like this:

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

### Hints

- Create multiple HTML templates for each type of user. 
  - `main.html`
  - `engineer.html`
  - `intern.html`
  - `manager.html`

- Try to make your methods simple so that they are easier to test.

- The different employee types should all inherit some methods and properties from a base class of `Employee`.

- In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

## Minimum Requirements
- Functional application.
- GitHub repository with a unique name and a README describing the project.
- User can use the CLI to generate an HTML page that displays information about their team.
- All tests must pass.

### Classes
-This project must have the following 4 classes
    -Employee
    -Manager
    -Engineer
    -Intern

-The tests for these classes in the `tests` directory must all pass.

The first class is Employee, a parent class with the following properties and methods
    - name
    - id
    - email
    - getName()
    - getId()
    - getEmail()
    - getRole() // Returns 'Employee'

The other three classes will extend `Employee`.

The Manager class will have emplyee's properties and methods as well as
    - officeNumber
    - getRole() // Overridden to return 'Manager'

The Engineer class will have emplyee's properties and methods as well as
    - github // GitHub username
    - getGithub()
    - getRole() // Overridden to return 'Engineer'

The Intern class will have employee's properties and methods as well as
    - school
    - getSchool()
    - getRole() // Overridden to return 'Intern'


### User input
The project must prompt the user to build an engineering team. 
An engineering team consists of,
    -A manager
    -Any number of engineers 
    -Any number of interns.


### Roster output
The project must generate a `team.html` page in the `output` directory, 
The team.html page must display nicely formatted team roster. 
Each team member should display the following in no particular order:

    - Name
    - Role
    - ID
    - Role-specific property (School, link to GitHub profile, or office number)

## Bonus
- Use validation to ensure that the information provided is in the proper expected format.
- Add the application to your portfolio.


## Submission on BCS
You are required to submit the following:
    - The URL of the GitHub repository
    - **Optional**: GIF of your CLI applications functionality







<!-- Thanks Jhon -->
## start:
  add_manager
## new_team_member: ask user for next teammate
  possible responses include:
    - engineer
    - intern
    - no more
  if engineer
    call add_engineer
  else if intern
    call add_intern
  else if none
    call render html with employees array
## add_manager: prompt for manager details
- name
- id
- office number
 - this function will prompt user for manager info
 - creates new manager object
 - pushes to employees
 - call new_team_member
## add_engineer: prompt for engineer details
 - this function will prompt user for engineer info
 - creates new engineer object
 - pushes to employees
 - call new_team_member
## add_intern: prompt for engineer details
 - this function will prompt user for intern info
 - creates new intern object
 - pushes to employees
 - call new_team_member