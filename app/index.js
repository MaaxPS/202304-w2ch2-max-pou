import { strictEquals } from "./components/strictEquals().js";

console.log("The test with entries '1' and '1' returns: "+strictEquals(1,1))
console.log("The test with entries 'NaN' and 'NaN' returns: "+strictEquals(NaN,NaN))
console.log("The test with entries '0' and '-0' returns: "+strictEquals(0,-0))
console.log("The test with entries '-0' and '0' returns: "+strictEquals(-0,0))
console.log("The test with entries '1' and '\"1\"' returns: "+strictEquals(1,"1"))
console.log("The test with entries 'true' and 'false' returns: "+strictEquals(true,false))
console.log("The test with entries 'false' and 'false' returns: "+strictEquals(false,false))
console.log("The test with entries 'Water' and 'Oil' returns: "+strictEquals("Water","Oil"))
