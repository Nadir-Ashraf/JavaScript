// inheritance = allows a new class to inherit properties and methods 
//               from an existing class (parent -> child)
//               helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`The ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    
    jump(){     // unique method of rabbit
        console.log(`The ${this.name} can jump`);   
    }
}

class Dog extends Animal{
    name = "dog";

    smell(){
        console.log(`The ${this.name} can smell`);
    }
}

const rabbit = new Rabbit();
const dog = new Dog();

console.log(rabbit.alive);
console.log(rabbit.name);
rabbit.eat();
rabbit.sleep();
rabbit.jump();  

console.log(dog.name);
dog.eat();
dog.sleep();
dog.smell();