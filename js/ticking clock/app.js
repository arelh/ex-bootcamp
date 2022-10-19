function displayTime() {
  let dateTime=new Date();
  let hrs=dateTime.getHours();
  let min=dateTime.getMinutes();
  let sec=dateTime.getSeconds();
  let day=dateTime.getFullYear();
  let session=document.getElementById("session")

  if (hrs>12){
    session.innerText="PM"
  }
  else{
    session.innerText="AM"

  }


document.getElementById("hours").innerHTML=hrs;
document.getElementById("minutes").innerHTML=min;
document.getElementById("second").innerHTML=sec;
document.getElementById("day").innerHTML=day;

}


setInterval(displayTime,10)