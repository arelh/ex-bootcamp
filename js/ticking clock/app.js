function displayTime() {
  let dateTime=new Date();
  let hrs=dateTime.getHours();
  let min=dateTime.getMinutes();
  let sec=dateTime.getSeconds();
  let day=dateTime.getDay();
  let month=dateTime.getMonth();
  let year=dateTime.getFullYear();
  let session=document.getElementById("session")

  if (hrs>12){
    session.innerText="PM"
  }
  else{
    session.innerText="AM"

  }
if(hrs<10){
  hrs="0"+hrs
}
if(min<10){
  min="0"+min
}
if(sec<10){
  sec="0"+sec
}
if(day<10){
  day="0"+day
}
if(month<10){
  month="0"+month
}
if(year<10){
  year="0"+year
}

document.getElementById("hours").innerHTML=hrs;
document.getElementById("minutes").innerHTML=min;
document.getElementById("second").innerHTML=sec;
document.getElementById("day").innerHTML=day;
document.getElementById("month").innerHTML=month;
document.getElementById("year").innerHTML=year;

}
setInterval(displayTime,10)