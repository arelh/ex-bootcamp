function avg(a,b,c) {
   return((a+b+c)/3)
}
     
let avgJhon=(avg(80,90,80));
let avgMike=(avg(90,80,100));
let avgMari=(avg(97 ,134 ,105 ));


console.log(`jhon's team average is ` + avgJhon);
console.log(`mikes's team average is ` + avgMike);
console.log(`mari's team average is ` + avgMari);




bigAvg=Math.max(avgJhon,avgMike,avgMari)
console.log( "the biggest average is " + bigAvg);

if(avgJhon>avgMike&&avgJhon>avgMari){
    console.log(`jhon win`)
}
else if (avgJhon<avgMike&&avgMari<avgMike){
    console.log(` mike win`)
}
else if (avgMari>avgMike&&avgMari>avgMike){
    console.log(`mary win`)
}
else {
    console.log(`drew`)
}