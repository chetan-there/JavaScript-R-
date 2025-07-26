function formatContact() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim().toLowerCase();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  var output = "";

  // ✅ Name: Title Case
  var nameParts = name.split(" ");
  for (var i = 0; i < nameParts.length; i++) {
    nameParts[i] = nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1).toLowerCase();
  }
  name = nameParts.join(" ");

  // ✅ Email: Basic validation
  if (!email.includes("@") || email.length < 5) {
    output += "❌ Invalid email format.\n";
  }

  // ✅ Phone: Remove spaces/dashes, check length
  phone = phone.replaceAll(" ", "").replaceAll("-", "");
  if (phone.length !== 10 || isNaN(phone)) {
    output += "❌ Invalid phone number.\n";
  }

  // ✅ Message: Clean and format
  message = message.replace(/bad|stupid|dumb/gi, "***"); // censor
  message = message.replaceAll(":)", "😊").replaceAll(":(", "😢");
  var wordCount = message.split(" ").length;

  // ✅ Build contact card
  if (output === "") {
    output += "✅ Contact Info Cleaned & Saved!\n\n";
    output += "Name     : " + name + "\n";
    output += "Email    : " + email + "\n";
    output += "Phone    : " + phone + "\n";
    output += "Message  : " + message + "\n";
    output += "Words    : " + wordCount + "\n";
    output += "-".repeat(30);
  }

  document.getElementById("output").textContent = output;
}
