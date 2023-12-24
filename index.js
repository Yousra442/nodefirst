
import fs from 'fs';

import { Command } from 'commander';

import inquirer from 'inquirer';
const pathfil='./hallo'
const program=new Command();
const questions=[{
    type:'input',
    name:'title',
    message:'what is your favorite programming language?'
},
{
    type:'number',
  name:'price',
    message:'what is the course costes?'
}]
program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program
.command('add')
.alias('a')
.description('Split a string into substrings and display as an array')
  .action(() => {
    inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    if(fs.existsSync(pathfil)){
       fs.readFile(pathfil,'utf8',(err,content )=>{

const newcontent=JSON.parse(content)
newcontent.push(answers);
fs.writeFile(pathfil,JSON.stringify(newcontent),'utf-8',()=>{
    console.log('courses done');
    
}
)



       })
  }
       else{
        fs.writeFile(pathfil,JSON.stringify([answers]),'utf-8',()=>{
            console.log('courses done');
            
       }
  )}

    })
})
program
.command('list')
.alias('l')
.description('Split a string into substrings and display as an array')
  .action(() => {
    fs.readFile(pathfil,'utf8',(err,conss)=>{
        const reew=JSON.parse(conss)
        console.table(reew)
    })})

 

program.parse(process.argv)






