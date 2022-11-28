#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
import Choices from "inquirer/lib/objects/choices.js";

const timout = ()=>{
    return new Promise ((resolve) => {
        setTimeout(resolve, 2000)
    })
}

async function welcome() {
    let wel = chalkAnimation.neon("Welcome to Nabeel-Calculator");
    await timout();
    wel.stop();

}
await welcome();
async function calc(){
const answers =await inquirer
  .prompt([{
    type:"list",
    name:"Operator",
    message :"Which Mathematic operation do you want perform \n",
    choices:["Add", "Sub", "Multi", "Divide"]
  },{
  type:"number",
  name:"Number1",
  message :"Enter the Number 1"
  },
  {
    type:"number",
    name:"Number2",
    message :"Enter the Number 2"
    },
  ])
  
    if (answers.Operator == "Add") {
        console.log(chalk.yellow(`The Addition is = ${answers.Number1 + answers.Number2}`));      
    }else if(answers.Operator == "Sub"){
        console.log(`The Subtraction is = ${answers.Number1 - answers.Number2}`);   
    }else if(answers.Operator == "Multi"){
        console.log(`The Subtraction is = ${answers.Number1 * answers.Number2}`);   
    }else if(answers.Operator == "Divide"){
        console.log(`The Subtraction is = ${answers.Number1 / answers.Number2}`);   
    }
    
  }



async function Again() {
   do{
    await calc();
    var again = inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? Press yes/no or y/n"

    })
   }while ((await again).restart == "Yes"  || (await again).restart == "yes" 
   || (await again).restart == "y"  || (await again).restart == "Y" || (await again).restart == "N"){
    
   } 
}
Again();
