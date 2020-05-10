//Using Node.js


//Need to import API if running with Nodeinstead of browser
const fetch = require("node-fetch"); 
const readline = require('readline');

message = 'Hello user ! 👋 \n Start typing an ingredient ';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question(message, (input) => {
    console.log('You\'re searching for : '+input);
    rl.close();
})

function completer(line) {
    const completions = '.help .error .exit .quit .q'.split(' ');
    const hits = completions.filter((c) => c.startsWith(line));
    // Show all completions if none found
    return [hits.length ? hits : completions, line];
  }



