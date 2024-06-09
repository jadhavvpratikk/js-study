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
const object3 = {5:"c", 6:"d"};

// const objectmerge = {object1,object2};
// console.log(objectmerge);//{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }
// Not recommended above solution

// const objectmerge = Object.assign(object1,object2);
// console.log(objectmerge);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } = all properties are combined = recommended

//const object4 = Object.assign({},object1,object2,object3);//If we dont mention {} then it goes in object1 so please mention {}
//console.log(object4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

// const object5 = {...object1,...object2,...object3};//Recommended
// console.log(object5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }


const usersdata = [
    {
        id:1,
        email:"p1@gmail.com"
    },
    {
        id:2,
        email:"p2@gmail.com"
    }
];

//to loop this array 
//console.log(usersdata[0].id);

// console.log(tinderUser);//{ id: '123abc', name: 'Sam', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] = keys

// console.log(Object.values(tinderUser));//[ '123abc', 'Sam', false ] = values

// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true = It check that tinderUser has this key present in or not

console.log(tinderUser.hasOwnProperty('isLogged'));//false = because it is not present















