function userProfile(name){

     console.log("Hello, " + name + "!");
        }

userProfile("Kamal")

//Arrow Functions:

const double =(num)=>{
    return num*2
}
console.log(double(10))

//Anonymous function:

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//callback function:

function getUserData(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}

getUserData(function() {
    console.log("Call Back Function");
});