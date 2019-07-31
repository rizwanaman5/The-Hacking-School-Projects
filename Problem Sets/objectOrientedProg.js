// class Student {
//     constructor(fname, lname, age, gender, address) {
//         this.name = fname + ' ' + lname;
//         this.age = age;
//         this.gender = gender;
//         this.address = address;
//     }
// }

// class Teacher extends Student {
//     constructor(fname, lname, age, gender, address, prevJob, backgroundInfo) {
//         super(fname, lname, age, gender, address);
//         this.previousJob = prevJob;
//         this.backgroundInfo = backgroundInfo;
//     }
// }

// class Staff extends Teacher { 
//     constructor(fname, lname, age, gender, address, prevJob, backgroundInfo, role) {
//         super(fname, lname, age, gender, address, prevJob, backgroundInfo);
//         this.role = role;
//     }
// }

// const rizwan = new Student('Rizwan', 'Aman', '17', 'M', 'Hyd');
// const prash = new Teacher('Prashanth', 'Teja', '23', 'M', 'HYD', 'Developer', 'IIIT')
// const noman = new Staff('Noman','', '20', 'M', 'HYD', 'None','', 'caretaker')

// // console.log(rizwan);
// // console.log(prash);
// console.log(noman);


class User {
    constructor(name) {
        this.name = name;
        this.point = 0;
    }
    playing() {
        this.point = this.point - 5;
        console.log('you have', this.point, 'points left');
        return this;
    }
    eating() {
        this.point = this.point + 10;
        console.log('you have', this.point, 'points now');
        return this;
    }
}

var user1 = new User('firstUser');
var user2 = new User('secondUser')

console.log(user1);
console.log(user2);

user1.eating().playing();
console.log(user1);




// obj = {
//   a() {
//      return obj;
//  },
//   b() {
//      return obj;
//  },
//   c() {
//      console.log('hello world')
//      return obj;
//  }
// }
// obj.a().b().c();


// function a() {
//     return {
//         b: function () {
//             return {
//                 c: function () {
//                     console.log('hello world')
//                 }
//             }
//         }
//     }
// }
// a().b().c();