# Angular_alpha
Learning log for angular

### What is Angular?
- A framework to build client side applications using HTML, CSS, JavaScript/Typescript
### Why do we need angular?
- Many applications are build using javascript and jquery, but as the application grows it will be hard to maintain the code base
- We need a way to properly structure our application. Even though there are javascript patterns available they are hard to understand from a beginner perspective.
- Applications build with plain javascript or Jquery are hard to test.
### Benefits of angular:
- Gives our application a clean structure.
- Includes lots of reusable code.
- Make application more testable.

 > We do not need a framework like angular to create applications in javascript, but it will make them easier to build and test.
 ### Architecture of angular applications:
 - Front-End contains HTML, CSS, Javascript, Angular
 - Back-End contains APIs, Databases.
 - Maximum the data is not stored in the front-end or client side because it cannot be stored more than the time the customer is using the application. So data is stored in the database where data is fetched using HTTP apis.
 ### Setting up Development Environment:
 - Node.js installation is required to run angular. Download and install node from nodejs.org
 - Node.js is chrome's javascript engine v8 embedded in c++ to run javascript outside a browser.
 - After installation open command prompt and run command ``` node --version ``` to check if node is installed.
 - Angular CLI (Command line interface) is used to create angular applications we need to install it from npm (node package manager)

 ```
 //Windows
 npm install -g @angular/cli
 //mac
 sudo npm install -g @angular/cli
 ```
> **-g** is for installing angular globally, else it will install only for the current folder.
- To check if angular cli is installed run the command ``` ng --version ```
### Creating a new app using angular cli:
- Run the command ``` ng new <<Project-name>> ``` eg ``` ng new initial-test ```
- It will take some time to complete the application creation, to start this app navigate to the folder in command prompt then run the command ``` ng serve ```
- CLI compiles and packages the application for us with the above command
- Generally this runs on http://localhost/4200