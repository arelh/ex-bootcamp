const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];
for(let i=0 ; i<listOfNeighbours.length ; i++){
    let country= listOfNeighbours[i];
    for(let j=0 ; j<country.length ; j++){
        
    console.log(`${"Neighbour:"}`,country[j]);
}

}


    // With the use of two for loops, console log all the countries
    // one by one and in your terminal. You should see something
    // like this in your terminal:
    // Neighbour: Canada
    // Neighbour: Mexico
    // Neighbour: Spain
    // Neighbour: Norway
    // Neighbour: Sweden
    // Neighbour: Russia


    // const word= 'hello';
    // let reverseWord='';
    // for(let i=0 ;i<word.length ; i++){
    //     reverseWord+=word[i];
    //     console.log(reverseWord);
    // }