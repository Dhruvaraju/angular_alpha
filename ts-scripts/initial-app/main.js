function varTypes() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Value of i is " + i);
}
varTypes();
var testNumber = 2;
var testString = 'This is a string';
var testBoolean = true;
var testAny = '23fafd'; // any will let the variable act like var keyword
var testNumArray = [1, 2, 3, 4, 5];
var testStringArray = ['Hi', 'testArray'];
var Colour;
(function (Colour) {
    Colour["red"] = "col1";
    Colour["yellow"] = "col2";
})(Colour || (Colour = {}));
var colourSelection = Colour.red;
console.log(colourSelection);
