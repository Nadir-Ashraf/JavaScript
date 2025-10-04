// static = keyword that defines properties or methods that belong 
//          to class itself rather than the objects created 
//          from that class (class owns anything static, not the objects)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class MathUtil{
//     static PI = 3.14;

//     static getDiameter(radius){
//         return radius * 2;
//     }
    
//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10).toFixed(2));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }
// }

// const user1 = new User("Nadir");
// const user2 = new User("Harshil");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);

// user1.sayHello();
// user2.sayHello();

// User.getUserCount();