
class Animal{
    constructor(){

    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super();
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super();
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super();
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 2, 20);
const fish = new Fish("fish", 1, 12);
const hawk = new Hawk("hawk", 2, 40);
