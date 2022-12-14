// Manages any command calls
class CommandManager{

    execute(command, ...args){
        return command.execute(...args)
    }
}
export default CommandManager;