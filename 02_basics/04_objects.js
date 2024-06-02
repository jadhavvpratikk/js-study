//Ways to declare object
//const tinderUser = new Object(); // singleton object
//2nd way to declare object
const tinderUser = {};//non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);//{} = empty object

const regularUser = {
    email: "pratik@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Pratik",
            lastName: "Jadhav"
        }
    }
}

// console.log(regularUser.fullName);//{ userfullname: { firstName: 'Pratik', lastName: 'Jadhav' } }
// console.log(regularUser.fullName.userfullname.firstName);//

const object1 = {1:"a", 2:"b"};
const object2 = {3:"a", 4:"b"};

// const objectmerge = {object1,object2};
// console.log(objectmerge);//{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }
// Not recommended above solution

const objectmerge = Object.assign(object1,object2);
console.log(objectmerge);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } = all properties are combined = recommended







