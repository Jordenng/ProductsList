var faker =  require("faker");
console.log("=======================")
console.log("Welcome To My Shop!")
console.log("=======================")

for(var i=0;i<10;i++){
    console.log(faker.commerce.productName() +" - $"+faker.commerce.price());
    // console.log(faker.commerce.price());
}
