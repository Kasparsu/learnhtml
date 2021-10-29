let greeting: string = "hello typescript";
let num: Number = 3;
function yell(text:string){
    console.log(text.toUpperCase());
}

yell(greeting);
//yell(num); Annaks errori: TS2345: Argument of type 'Number' is not assignable to parameter of type 'string'.