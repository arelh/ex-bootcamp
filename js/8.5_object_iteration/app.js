const obj = { car: "tesla", model: "3", color: "red" };

const swap = (object) => {
  const newObject = {};
  for (let key in object) {
    console.log(key);
    console.log(object[key]);
    newObject[object[key]] = key;
    console.log(newObject);
  }
  return newObject;
};
swap(obj);
