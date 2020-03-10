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
### Project structure:
- **e2e** folder is the one where all the end to end testing, testing which will be a simulation of the end user script will be present.
- **node_modules** folder is the location where we store all the 3rd party libraries.These are required to run the application. This is  mainly for development, when we build the application parts of this are deployed. We will not be deploying this folder to server.
- **src** is the folder in which actual source code resides.
    - under src we have **app** folder which contains a module and a component, every project should have at least one module and one component. Each component has its own html, css and a type script file.
    - **assets** static files are placed here like images.
    - **environments** configuration settings for different environments are present here. One we will have for prod and one for development.
    - **favicon.ico** is the icon displayed in the browser.
    - **index.html** a simple html file that contains our application, all the components and styling references are dynamically added to this page.
    - **main.ts** a typescript file, which is the starting point of our application. The main module of our application is bootstrapped in this file. It is like the main method in other languages, which is a starting point of our application. Here the starting point is app module.
    - **polyfills.ts** which contains some scripts for running angular applications, because angular uses some of the functionality of javascript which are not available in the current version. So this fills the gap between the features that angular needs and features that are currently supported by angular.
    - **styles.css** this is were we add the global styles for the application.
    - **test.ts** which is used to setting up our test environment.
- **angular.json** configuration file for angular
- **.editorconfig** configuration for editor, if we are having multiple developers we need all the personal to use same editor config.
- **.gitignore** to ignore files and folders from your git repository.
- **karma.config.js** is a configuration for karma which is a test runner for javascript code.
- **package.json** every node.js folder has this, contains the information about your project like version and name.
    - __dependencies__ tag contains the libraries that our application is dependents upon. (like angular libraries), if we are using additional third party libraries we need to mention here.
    - __devDependencies__ tag contains the development dependencies, these are not required in a production environment.
- **protractor.js** to run end to end tests
- **tsConfig.json** have bunch of configuration for the typescript compiler.
- **tslint.json** is a configuration file for tslint which is a typescript static analysis tool checks for maintainability, readability, functionality errors.

### Webpack:
- Angular cli uses a build automation tool which compiles all the scripts, stylesheets in our app, bundles them and minify them.
- Make a small change in your application, to see this in action, goto src >> app >> app.component.ts
- update the string title to 'New App', Now the webpack will compile this and generate bundles.
- **polyfills** which will gap the difference between the javascript version angular supports and the javascript version browser supports.
- **styles** will package all the styles as javascript bundle.
- **vendor** will have all the third party scripts as a bundle.
- **hot module replacement (HMR)** is the web pack, which is making the source code changes reflect immediately without any application restart.

### Angular History:
- AngularJS was the initial version released in 2010
- Angular2 was the next version which is a complete restructure of the frame work using type script.
- Angular4 is made to generalize the versions and anything above angular2 is now considered as angular.

### Typescript essentials:
- A superscript of javascript, any valid javascript code is a typescript code. Typescript has additional features which JS do not have which are supported by browsers.
- Few features we get using typescript are:
    - Strong typing for variable definition like C#, Java to identify data types.
    - Object oriented features.
    - Will be able to catch many compile time errors.
    - Many great tools available in market to work on typescript.
- Typescript compiler **transpile** typescript code to javascript so browsers can understand it.

#### Installing type script:
- npm command ``` npm install -g typescript ``` in mac ``` sudo npm install -g typescript ```
- To check if typescript is installed or not in cmd ``` tsc --version ``` will show typescript version installed.
#### Create a typescript file:
- name a file as main.ts add a function as below
```
function log(msg){
    console.log(msg);
}
var message = 'Hello world';
log(message);
```
- to compile this use command ``` tsc main.ts ```
- a **.js** file will be created, now wew can run this with ``` node main.js ``` the program will be executed.