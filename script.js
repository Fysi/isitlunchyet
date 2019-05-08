var today = new Date().getHours();
if (today >= 13 && today < 14) {
  document.title = "Yes, it is lunch time.";
  document.getElementById("container").innerHTML = "Yes, it is lunch time.";
} else if (today >= 12 && today < 13) {
  document.title = "No, but it is almost lunch time.";
  document.getElementById("container").innerHTML = "No, but it is almost lunch time.";
} else {
  document.title = "No, it is not lunch time.";
  document.getElementById("container").innerHTML = "No, it is not lunch time.";
}
