function boom(number){
    // prompt(`enter a number`)
for(let i=1; i<number+1 ; i++){
    if (i % 7==0 && i.toString().includes("7") ){
        console.log("BOOM BOOM");
    } else if (i % 7==0){
        console.log("BOOM");
    }else{
        console.log(i);
    }
}}

