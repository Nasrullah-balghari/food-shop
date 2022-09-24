var foods = ["biryani","burger","pasta","daal chawal","karai","korma","chola","samosa","chiken"];
var user = prompt("WELCOME TO OUR DELECIOUS DHABA" + "/n" + "What do you want sir").toLowerCase();
var flag = false;
var sweets = ["Barfi" , "Jalebi" , "Mithai", "gola ganda", "gulab jaman","ladho"];
for (var i = 0; i < foods.length; i++) {
    if (user === foods[i]){
        flag = true;
        document.write(user +" is available Sir")
        break
    }
}

if (user === ""){
    document.write("Please enter a value to proceed")
    flag = true
}
if (flag === false){
    document.write("Sorry not available" + "<br>" + " You can also try these items" + "<br>" + "<br>" + sweets);
}

