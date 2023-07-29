/*
In this example, Animal is an abstract class with an abstract method speak. Cat and Dog are subclasses that implement speak method in their own ways. We can store any subclass of Animal in an Animal array, and we can call speak method on any Animal object, regardless of its subclass. This demonstrates polymorphism.
*/
abstract class Animal {
  constructor(public name: string) {}

  abstract speak(): void;
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} says: Meow!`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} says: Woof!`);
  }
}

let animals: Animal[] = [];
animals.push(new Cat("Whiskers"));
animals.push(new Dog("Rex"));

for (let animal of animals) {
  animal.speak();
}

/*
Output:

Whiskers says: Meow!
Rex says: Woof!
*/