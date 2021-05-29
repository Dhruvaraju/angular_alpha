## What is state of an application?
- The current instance of data displayed on an application is considered as the state of an app.
- The user logged in, text boxes enabled, buttons enabled, Services invoked, services awaiting data, these all can be considered as the state of the application.

## What is state management?
- The way we handle state of an application.
- While fetching data, do we have to get it from cache or get it from backend services?
- How do handle data if user opens app in a new browser, shall we authenticate user again?
- How to handle data if the user opens the app in a new tab?

## What does state management provides?
- State management gives us a common architecture, a simple pattern to follow along, with some rules that we can use everywhere, so we can manage the state of our application easily.
- It should be able to provide solutions for all state related queries.

> We can achieve, state management with help of reactive programming.

## Reactive programming
-  It means that our code will be designed to react to state changes, and it will also be designed to respond to user interactions in a common, reactive way that has the additional benefit of being loosely coupled. Angular and RxJS are frameworks that are extremely friendly to reactive programming.
- Reactive programming is a representation of reactive UI.

## Redux:
- A javascript library
- That helps in state management, by clarifying the inputs and outputs of the application, which inturn allow a smooth data flow across an application.
- Downside of redux is verbose intensive and contains lots of boilerplate code.
- Angular CLI helps to reduce the boilerplate code to maximum extent by generating it.

## What does state represent in Redux?
- Every single piece of data in an application.
- Data rendered on the screen
- Configuration / Session / user preferences data.
- If a user updates some of the details in a machine and logs to another machine they should be able to see all the changes made on the previous machine.
- State is single point of truth. An object tree that represents all of the data.
- State is readonly, which can be changed by dispatching actions.
- Eg: when you have an application with multiple tabs, on clicking a certain tab and opening the application in new browser tab,the application  should display the tab that was selected earlier.

## What is an action?
- An action is an object which will describe the change that need to be made to the existing data.
- Actions will have payload in some situations. Which will define the change of the state.
- eg: if we are performing a **login** operation then we will use the username and password as the payload.
 > REDUX is a pattern to implement state management. **Angular uses NgRx as an implementation of Redux**.

 ## Reducers
 - State get updated by an action, reducers are the functions which will make the transition happen.
 - A pure function that deals with state of an application by taking the action and current state of an application as parameters ``` (currentState, Action)=> newState ```
 - The new state is an updated copy of the old one,  it does not edit the current state.
 - Reducers only perform synchronous state changes.
  > To make asynchronous state changes effects are used.

  ## Store
  - Store is in-charge of storing the state. This is the only object with which we will be interacting in an application.
  - Holds the current state of an application and all of the reducers.
  - The central object where everything happens.
  - Store is used to change state, Store is used to subscribe to state updates.
  > NgRx has own store implementation, which uses RxJs so we can use observables and operators.

## Setting up ngrx
- NgRx provides schematics in conjunction with angular cli for generating ngrx boilerplate code.
- ng generate can be used to create state, actions and reducers.
``` npm install @ngrx/schematics --save-dev ``` 
> installs the ngrx schematics
- ngrx store and dev tools are also required, install them using the following commands
```
npm install @ngrx/store --save
npm install @ngrx/store-devtools --save
```

> you will face issues with latest angular vesrsion use the below commands

```
npm install @ngrx/store@latest --legacy-peer-deps  
npm install @ngrx/store-devtools  --legacy-peer-deps
```

## Generating Store
- Generating a default state, placing the same in root folder, updating app module can be done with ng generate as
```javascript
ng generate @ngrx/schematics:store State --root --module app.module.ts
```
- **Index.ts** file will be generated in reducers folder with the below code
```javascript
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
export interface State {

}

export const reducers: ActionReducerMap<State> = {

};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
```
- **app.module** will be updated in imports with the below entry:
```javascript
StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
```
## Generating reducer 
- Use this to update state  of login details.
```javascript ng generate @ngrx/schematics:reducer login --group ``` 
> The group switch will group all the reducers in same folder
- The generated reducer will look as below: **login.reducer.ts**
```javascript
import { Action, createReducer, on } from '@ngrx/store';
export const loginFeatureKey = 'login';
export interface State {

}
export const initialState: State = {

};
export const reducer = createReducer(
  initialState,

);
```
- This contains a state interface, initiate state and  empty reducer function
- Add the values that need to be maintained in state interface and declare the initial value of them in initial state
- For example storing the login validation result and user name
```javascript
export interface State {
logInValidated : boolean;
loggedInUser : String;
}

export const initialState: State = {
logInValidated : null,
loggedInUser : null
};
```
## Creating actions
- For generating the action use command ``` ng generate @ngrx/schematics:action logIn --group ```
```javascript
import { Action } from '@ngrx/store';
export enum LogInActionTypes {
  LoadLogIns = '[LogIn] Load LogIns', 
}
export class LoadLogIns implements Action {
  readonly type = LogInActionTypes.LoadLogIns;
}
export type LogInActions = LoadLogIns;
```
- We can add the required actions now like addlogin removelogin.
- The modified code is mentioned below
```javascript
import { Action } from '@ngrx/store';
export enum LogInActionTypes {
  AddLogIns = '[LogIn] Add LogIns',
  RemoveLogIns = '[LogIn] Remove LogIns',
}
export class AddLogIns implements Action {
  readonly type = LogInActionTypes.AddLogIns;
  constructor(public valid: boolean, public userName: String){}
}
export class RemoveLogIns implements Action {
  readonly type = LogInActionTypes.RemoveLogIns;
  constructor(){}
}
export type LogInActions = AddLogIns | RemoveLogIns;
```
- adding reducer function to invoke the actions
- We can change the reducer and login state names.
```javascript
export function reducer(state = initialState, action: LogInActions): State {
  switch (action.type) {
    case LogInActionTypes.AddLogIns:
      {
        return {...state, logInValidated : action.valid, loggedInUser: action.userName };
      }
    case LogInActionTypes.RemoveLogIns:
      {
        return {...state, logInValidated : null, loggedInUser: null };
      }
    default:
      return state;
  }
}
```
- The updated names should be, added in the index.ts file

```javascript
export interface State {
logins : loginState
}
export const reducers: ActionReducerMap<State> = {
logins : loginReducer
};
```
- For invoking store in the app, we need to use store as a service.
- import state and store in the component you need to use 
```javascript
import { Store } from '@ngrx/store';
import { State } from '../reducers';
```
- Add store as a input to the constructor ``` private store : Store<State> ```
- we can use store to perform actions now as below
```javascript
this.store.dispatch(new AddLogIns(true, this.loginForm.get('userName').value));
```
- For Fetching values from store you can use it as below
```javascript
constructor(private store: Store<State>) { 
    store.select(state => state).subscribe(details => {
      console.log('Log in Validation: '+details.logins.logInValidated);
      console.log('Logged in user: '+details.logins.loggedInUser);
    })
  }
```

## Effects
- Asynchronous way to perform tasks in NgRx. The sequence of operations will be like an action is triggered => which will trigger effect => a new action will be triggered once action completes
- For installing effects: ``` npm install @ngrx/effects --save ```
- For generating effects: ``` ng generate @ngrx/schematics:effect <<Effect-Name>> --module app.module --group ```
```javascript
//Example Code:
//Reducer
import {CurrentConditionsActions, CurrentConditionsActionTypes} from '../actions/current-conditions.actions';
export interface CurrentConditionsState {
    currentConditions: Map<string, any>;
}
export const initialState: CurrentConditionsState = {
    currentConditions: new Map()
};
export function currentConditionsReducer(state = initialState, action: CurrentConditionsActions): CurrentConditionsState {
    switch (action.type) {
        case CurrentConditionsActionTypes.CurrentConditionsLoaded:
            const cc = new Map(state.currentConditions);
            cc.set(action.zipcode, action.conditions);
            return {...state, currentConditions: cc};
        default:
            return state;
    }
}
//Actions
import { Action } from '@ngrx/store';
export enum CurrentConditionsActionTypes {
    CurrentConditionsLoaded = '[CurrentConditions] CurrentConditions Loaded',
    CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditions Load Failded'
}
export class CurrentConditionsLoaded implements Action {
    readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded;

    constructor(public zipcode: string, public conditions: any){}
}
export class CurrentConditionsLoadFailed implements Action {
    readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;

    constructor(public zipcode: string, public error: any){}
}
export type CurrentConditionsActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed;
//Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {AddZipcode, ZipcodeActionTypes} from '../actions/zipcode.actions';
import {WeatherService} from '../weather.service';
import {CurrentConditionsLoaded, CurrentConditionsLoadFailed} from '../actions/current-conditions.actions';
@Injectable()
export class CurrentConditionsEffects {
    @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(
        ofType(ZipcodeActionTypes.AddZipcode),
        mergeMap(action =>
            this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
                // If successful, dispatch success action with result
                map(data => new CurrentConditionsLoaded(action['zipcode'], data)),
                // If request fails, dispatch failed action
                catchError((err) => of(new CurrentConditionsLoadFailed(action['zipcode'], err)))
            )
        )
    );
    constructor(private actions$: Actions<AddZipcode>, private weatherService: WeatherService) {}
}
//Consuming Effect
store.select(state => state.currentConditions)
            .subscribe(conditions => this.currentConditions = conditions.currentConditions);
```
## Debugging using devtools
- redux devtools are available as extension for many browsers, Search term: **Redux Devtools**
- With redux devtools we can visually see the state of the application, either in a chart or tree.

## Selector
- Every time we use selector it will be doing an expensive operation of querying the entire state object.
- **CreateSelector** can be used to target a specific piece of the state so we will not be querying the entire state.
```javascript
export const selectZipcodeState = (state: State) => state.zipcodes;
export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.zipcodes);
export const selectCurrentConditionsState = (state: State) => state.currentConditions;
export const selectCurrentConditionsList = createSelector(selectCurrentConditionsState, (state: CurrentConditionsState) => state.currentConditions);

//while calling selectZipcodeList we will get the last cached value of the attribute zipcodes in state.
// if the value is  updated then we will get the updated value similar for selectCurrentConditionsList
```
## NgRx router store:
- Install router store using ``` npm install @ngrx/router-store --save ```
- To use router we need to add the router in state of index.js  ``` router: RouterReducerState ```
- Add corresponding reducer function also. ``` router: routerReducer ```
- these both are available in ``` import {routerReducer, RouterReducerState} from '@ngrx/router-store'; ```
- declare the router store in app module ```StoreRouterConnectingModule.forRoot({stateKey: 'router'}) ``` in imports.

```javascript
//Reducer entries will look like below
export interface State {
  router: RouterReducerState
}
export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};
```
- NgRx router store has 3 actions in it:
  - ROUTER_NAVIGATION invoked when a route navigation is done, before running any code
  - ROUTER_CANCEL when a route guard cancels the navigation to route
  - ROUTER_ERROR when an error occurs like navigating to a non existing route.
- Additional details on routing can be found in NgRx documentation.

## Generating and using entities
- To create entity use ``` ng generate @ngrx/schematics:entity <<entity-name>> --group ```
- Entities will generate all the boiler plate code so we can concentrate on the business logic.
- when we generate entity for user, it will create the reducers and actions for us.

## Component Architecture using NgRx
- Angular embraces reactive programming, in which components react to external changes, there are 2 types of components.
  - Container Components : Consumes services and works with data.
  - Presentational Components: Have to be feed with data, this will generally emit events.
