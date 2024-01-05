/* Here the parameters are defined as type: number. Trying to run the function without the correct parameter type will cause an error. */
var numberSummer = function (num1, num2) {
    return num1 + num2;
};
console.log(numberSummer(8, 9));
/* Here a userAccount class is made. and a constructor for making them. The same "type: Person" can be used to make sure the constructor has the correct
type of data. */
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age, developer) {
        this.name = name;
        this.age = age;
        this.developer = developer;
    }
    return UserAccount;
}());
var newUser = new UserAccount("Oscar", 42, false);
/* Since this user object is assigned as type: Person, trying to assign any other datatype than assigned above will cause an error. */
var user = {
    name: "Dave",
    age: 42,
    developer: true,
};
var displayPerson = function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " of age, and ").concat(user.developer ? "is" : "isn't", " a developer"));
};
displayPerson(user);
/* By using the <Type> generic, typescript can check if the array contains the correct "datatype".
f.ex if i tried running reverseArray with the numberArray but declared it as reverseNumber = reverseArray<string>(numberArray)
I would get an error, since the type of data in each index is a Number. */
var reverseArray = function (arr) {
    return arr.reverse();
};
var myArray = ["one", "two", "three", "four"];
var numberArray = [1, 2, 3, 4];
var reversedArray = reverseArray(myArray);
var reverseNumber = reverseArray(numberArray);
console.log(reversedArray);
console.log(reverseNumber);
var logShape = function (shape) {
    console.log("This is a ".concat(shape.name, ", it's color is ").concat(shape.color, ", ").concat(shape.radius
        ? "it has a radius of ".concat(shape.radius)
        : "it's ".concat(shape.width, " wide, and ").concat(shape.height, " high.")));
};
/* We can do the same with classes and constructors */
var makeShape = /** @class */ (function () {
    function makeShape(name, color, width, height, radius) {
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }
    return makeShape;
}());
var circle = new makeShape("circle", "red", null, null, 10);
var square = new makeShape("square", "blue", 30, 10, null);
logShape(circle);
logShape(square);
/* enum declaradion is a class of numbers. Without any other declaration each keyword is a number incremented once, starting at 0 from the top.
In this example, up = 0, down  = 1 and so on.  */
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
/* I can then use this as a "type" in the parameters to make sure i get an error when trying to use anything that isn't in the enum direction */
var makeDirectionMessage = function (guideNumber) {
    switch (guideNumber) {
        case direction.up:
            return "Going Up!";
        case direction.down:
            return "Going Down!";
        case direction.left:
            return "Going Left!";
        case direction.right:
            return "Going Right!";
        default:
            return "Invalid Direction";
    }
};
console.log(makeDirectionMessage(1));
/* You can define more than one datatype, this is called union types. This allows for different cases depending on datatype. */
var stringOrNumber = function (input) {
    if (typeof input === "string") {
        return "Hello, ".concat(input);
    }
    else {
        return input * input;
    }
};
console.log(stringOrNumber("Banana"));
console.log(stringOrNumber(42));
var makeElements = function (type, properties) {
    var element = document.createElement(type);
    Object.entries(properties).forEach(function (property) {
        var propertyName = property[0], propertyValue = property[1];
        element[propertyName] = propertyValue;
    });
    return element;
};
console.log(makeElements("div", { className: "main" }));
