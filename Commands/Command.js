// Base class to be used by the rest of the 
// commands and command manager
class Command{
    constructor(execute){
        this.execute = execute;
    }
}
export default Command;