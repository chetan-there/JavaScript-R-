// Voting 

//  <h1>Voting verifier</h1>
//     <labal id="votinglabal">Enter your age :</labal> 
//     <input type="number" id="votingage">
//     <button id="votingbtn">validate</button>
//     <h3 id="votingoutput"></h3>
//     <hr>

document.getElementById("votingbtn").onclick = function() {
    // Get the current value each time the button is clicked
    let age = document.getElementById("votingage").value;

    // Convert it to a number to avoid string comparison issues
    age = Number(age);

    if (age >= 18) {
        document.getElementById("votingoutput").textContent = "You are eligible for voting.";
    } else if (age < 18 && age >= 0) {
        document.getElementById("votingoutput").textContent = "Not eligible for voting!!";
    } else {
        document.getElementById("votingoutput").textContent = "Please enter a valid age.";
    }
};

//marriage 
/*
<h1>Marriage Validator</h1>
<label id="genderlabel">Select your gender:</label><br>
<input type="radio" name="gender" id="male" value="male"> Male
<input type="radio" name="gender" id="female" value="female"> Female
<br><br>
<label id="marriageagelabel">Enter your age:</label>
<input type="number" id="marriageage">
<button id="marriagebtn">Validate</button>
<h3 id="marriageoutput"></h3>
<hr>*/

document.getElementById("marriagebtn").onclick = function () {
    let age = Number(document.getElementById("marriageage").value);
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        document.getElementById("marriageoutput").textContent = "Please select your gender.";
        return;
    }

    gender = gender.value;

    if (gender === "male" && age >= 21) {
        document.getElementById("marriageoutput").textContent = "You are eligible for marriage.";
    } else if (gender === "female" && age >= 18) {
        document.getElementById("marriageoutput").textContent = "You are eligible for marriage.";
    } else {
        document.getElementById("marriageoutput").textContent = "Not eligible for marriage.";
    }
};

//mnc

/*
<h1>MNC's</h1>
<label id="markslabel">Enter your marks:</label><br>
10th Marks: <input type="number" id="tenth"><br>
12th Marks: <input type="number" id="twelfth"><br>
GPA: <input type="number" id="gpa"><br>
<button id="mncbtn">Check Eligibility</button>
<h3 id="mncoutput"></h3>
<hr>

*/

document.getElementById("mncbtn").onclick = function () {
    let tenth = Number(document.getElementById("tenth").value);
    let twelfth = Number(document.getElementById("twelfth").value);
    let gpa = Number(document.getElementById("gpa").value);

    if (tenth >= 60 && twelfth >= 60 && gpa >= 6.0) {
        document.getElementById("mncoutput").textContent = "You are eligible for MNC companies!";
    } else {
        document.getElementById("mncoutput").textContent = "You are NOT eligible for MNC companies.";
    }
};



