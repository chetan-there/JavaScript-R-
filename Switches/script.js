function checkMood() {
  var moodRadios = document.getElementsByName("mood");
  var selectedMood = null;

  for (var i = 0; i < moodRadios.length; i++) {
    if (moodRadios[i].checked) {
      selectedMood = moodRadios[i].value;
      break;
    }
  }

  var message = "";

  switch (selectedMood) {
    case "happy":
      message = "That's great! Keep smiling!";
      break;
    case "sad":
      message = "Cheer up! Better days are ahead.";
      break;
    case "angry":
      message = "Take a deep breath. Calm down.";
      break;
    default:
      message = "Please select a mood!";
  }

  document.getElementById("result").textContent = message;
}
