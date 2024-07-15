import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let inputanswer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in todo list?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more in todo list?",
            default: "false",
        }
    ]);
    todolist.push(inputanswer.todo);
    condition = inputanswer.addMore;
    console.log(todolist);
}
