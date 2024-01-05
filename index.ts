/* Here the parameters are defined as type: number. Trying to run the function without the correct parameter type will cause an error. */
const numberSummer = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(numberSummer(8, 9));
/* Here you define what data can be assigned to any object of type: Person */
interface Person {
  name: string;
  age: number;
  developer: boolean;
}

/* Here a userAccount class is made. and a constructor for making them. The same "type: Person" can be used to make sure the constructor has the correct
type of data. */
class UserAccount {
  name: string;
  age: number;
  developer: boolean;
  constructor(name: string, age: number, developer: boolean) {
    this.name = name;
    this.age = age;
    this.developer = developer;
  }
}

const newUser: Person = new UserAccount("Oscar", 42, false);

/* Since this user object is assigned as type: Person, trying to assign any other datatype than assigned above will cause an error. */
const user: Person = {
  name: "Dave",
  age: 42,
  developer: true,
};

const displayPerson = (user: Person) => {
  console.log(
    `${user.name} is ${user.age} of age, and ${
      user.developer ? "is" : "isn't"
    } a developer`
  );
};
displayPerson(user);
/* By using the <Type> generic, typescript can check if the array contains the correct "datatype".
f.ex if i tried running reverseArray with the numberArray but declared it as reverseNumber = reverseArray<string>(numberArray)
I would get an error, since the type of data in each index is a Number. */
const reverseArray = <Type>(arr: Type[]): Type[] => {
  return arr.reverse();
};

const myArray = ["one", "two", "three", "four"];
const numberArray = [1, 2, 3, 4];
const reversedArray = reverseArray<string>(myArray);
const reverseNumber = reverseArray<number>(numberArray);
console.log(reversedArray);
console.log(reverseNumber);

/* there are more ways of extending interfaces. Below some of these properties are optional, marked with ?. this means you don't need to use them, or only use them when aplicable. */
interface shape {
  name: string;
  color: string;
  width?: number;
  height?: number;
  radius?: number;
}

const logShape = (shape: shape) => {
  console.log(
    `This is a ${shape.name}, it's color is ${shape.color}, ${
      shape.radius
        ? `it has a radius of ${shape.radius}`
        : `it's ${shape.width} wide, and ${shape.height} high.`
    }`
  );
};

/* We can do the same with classes and constructors */
class makeShape {
  name: string;
  color: string;
  width?: number;
  height?: number;
  radius?: number;
  constructor(
    name: string,
    color: string,
    width?: number,
    height?: number,
    radius?: number
  ) {
    this.name = name;
    this.color = color;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }
}

const circle = new makeShape("circle", "red", null, null, 10);
const square = new makeShape("square", "blue", 30, 10, null);

logShape(circle);
logShape(square);

/* enum declaradion is a class of numbers. Without any other declaration each keyword is a number incremented once, starting at 0 from the top.
In this example, up = 0, down  = 1 and so on.  */
enum direction {
  up,
  down,
  left,
  right,
}

/* I can then use this as a "type" in the parameters to make sure i get an error when trying to use anything that isn't in the enum direction */
const makeDirectionMessage = (guideNumber: direction) => {
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

const stringOrNumber = (input: string | number) => {
  if (typeof input === "string") {
    return `Hello, ${input}`;
  } else {
    return input * input;
  }
};

console.log(stringOrNumber("Banana"))
console.log(stringOrNumber(42))


