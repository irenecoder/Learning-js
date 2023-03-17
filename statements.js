// do-while statement
// its a post test loop
// escape condition is only evaluated only after code inside loop has been executed

let i = 0;
do {
    i += 2
}while(i<10)

let j = 1;
while(j<10){
    j += 2
};

 function vendorMachine(){
     let price = 40;
     let bottles = 24;
     let amount = prompt("enter amount: ")

     if (price==amount){
         console.log("there you go!")
     }
     else if(price < amount){
         let change = amount-price;
         return change
     }
     else{
         console.log("Hey the price is 40, please add more money!")
     }

     

     switch(bottles){
         case bottles == 0:
             console.log(" No soda!")

     }
 };

 vendorMachine()
//  that was correct

// functions => professional javascript

function clap(hand1,hand2){
    return hand1 + hand2
}
// note that there is no semicolon at end of function declaration

let clap = function (hand2, hand3){
    return hand2 +hand3
};
// note that there is a semi colon ate end of declaration

let clap = (hand4,hand5)=> hand4 + hand5;
// arrow function has semi colon 
// zero parameters require an empty paranthesis




 



