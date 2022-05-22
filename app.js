

// # Create a Bangladeshi phone number patter



let phone_number = "01303202090";

let pattern1 = /^(\+8801|01|008801)[0-9]{9}$/;

console.log(pattern1.test(phone_number));



// // # Create a Bangladeshi phone number pattern


let gmail = "sajol_90@gmail.cjjm";

let pattern3 = /^[a-z_.0-9]*@[a-z]{2,}\.[a-z]{2,5}$/;

console.log(pattern3.test(gmail));


// // # Create a zipcode pattern  


let zip = "2090";

let pattern2 = /^[0-9]{4}$/;

console.log(pattern2.test(zip));



// // # Create a password pattern 


let password = "1A~2f$6h";

let pattern4 = /^[a-zA-Z0-9~!@#$%^&*()_+]{8}$/;

console.log(pattern4.test(password));



// // # Create a  username pattern



let username = "sajolkhan105";

let pattern = /^[^A-Z0-9~!@#$%^&*()+][a-z0-9_\.]{5,}$/;

// console.log(pattern.test(username));




