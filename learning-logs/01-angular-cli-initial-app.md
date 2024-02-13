## Installation

- Angular requires `nodejs`.
- Nodejs provides `npm`
- Angular cli can be installed by using

```sh
npm install -g @angular/cli
```

- It will install all the required modules for creating angular applications.
- To check if angular cli is installed the command is `ng version`

## Creating an initial application

```sh
ng new <application_name> --no-strict --standalone false --routing false
```

- ng new is used to create a new angular application
- `--no-strict` will disable typescript  strict typing
- `--standalone false` will create an angular application instead of angular standalone component.
- `--routing false` will disable routing module for angular

> [!Starting angular app]
> Once the application is created use `ng serve`  or `npm start` to start the angular application.


