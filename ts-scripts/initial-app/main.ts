function varTypes(){
    for(var i = 0; i < 10 ; i++){
        console.log(i);
    }
    console.log("Value of i is "+i);
}
varTypes();

let testNumber : number = 2;
let testString : string = 'This is a string';
let testBoolean : boolean = true;
let testAny : any = '23fafd' ; // any will let the variable act like var keyword
let testNumArray : number[] = [1,2,3,4,5];
let testStringArray : string[] = ['Hi','testArray'];

enum Colour { red = 'col1', yellow = 'col2'}

let colourSelection : string = Colour.red;
console.log(colourSelection);