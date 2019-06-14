// the greeting function should be below here
// Prompt for users name
var username = prompt("Enter your name?");
// Log to console
console.log(hello(username));
// Alert to user
alert(hello(username));

// Save in a variable for later
var sentence = hello(username);
function hello(name){
    if(name){
        return "Hello, " + name + "!";
    }else{
        return "Hello there!";
    }
}
