
function numSiblings(){
    let n = parseInt(prompt('How many siblings do you have?'));
    if(n===1){
       console.log(`1 sibling!`);
    }
    else if (n>1){
        console.log(`More than 1 sibling`);
    }
    else{
        console.log(`No siblings`);
    }
}
numSiblings()