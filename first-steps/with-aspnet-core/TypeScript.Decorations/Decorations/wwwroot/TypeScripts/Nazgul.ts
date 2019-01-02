//import { logger } from "./decorators";

function logger(constructor: Function): void {
    console.log("I'm logging class yeah");
}

@logger
class Nazgul {
}