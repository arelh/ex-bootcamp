//-------------------------------------------------------------------------------
// 1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id

function getCandy(candyStore, id) {
  const candy = candyStore.candies.filter((c) => c.id === id);
  console.log(candy[0]);
}
// //test//

// getCandy(candyStore, "as12f");

//---------------------------------------------------------------------------------------------

// 2.Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.

// function getPrice(candyStore, id){
//     const pri = candyStore.candies.filter((p) => p.price === id);
//     console.log(pri[0]);
// }
// / //test//

// getPrice(candyStore, 5);

//------------------------------------------------------------------------------

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything

// function addCandy(candyStore, id, name, price){
//       candyStore.candies.push({name:name ,id:id, price:price ,amount:1 })
//     }
//     addCandy(candyStore ,"abc123","bamba",5)

// console.log(candyStore)

//------------------------------------------------------------------------------------------

// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.

const candyStore = {
  candies: [
    { name: "mint gum", id: "as12f", price: 2, amount: 2 },
    { name: "twix", id: "5hd7y", price: 5, amount: 4 },
    { name: "bamba", id: "abc123", price: 5, amount: 1 },
  ],
  cashRegister: 200,
};

function mGetCandy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (candyStore.candies[i].id === id) {
      return candyStore.candies[i];
    }
  }
}

function buy(candyStore, id) {
  const candy = mGetCandy(candyStore, id); // if theres no candy with the specified id === undefine
  if (candy && candy.amount > 0) {
    candyStore.cashRegister += candy.price;
    candy.amount--;
  }
}
console.log(candyStore);
buy(candyStore, "5hd7y");
buy(candyStore, "abc123");

console.log(candyStore);
