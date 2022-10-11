// document.querySelector(".start-here").innerHTML = "main title";
// const li4 = document.createElement("li");
// li4.innerHTML = "sub title 4";
// document.querySelector("#subList").appendChild(li4);
// document.querySelector(".title3").remove();
// document.title = "Master Of The Dom";
// document.querySelector("p").innerHTML = "i like pizza";
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const list = document.createElement("ol");

users.forEach((element) => {
  const li = document.createElement("li");

  li.innerText = `${element.firstName} ${element.lastName}`;
  li.dataset.id = `${element.id}`;

  list.append(li);
});
document.body.prepend(list);

list.style.listStyle = "none";
