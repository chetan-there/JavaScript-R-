// Custom class with chainable methods
function TextTransformer(text) {
  this.text = text;

  this.trim = function () {
    this.text = this.text.trim();
    return this;
  };

  this.toLower = function () {
    this.text = this.text.toLowerCase();
    return this;
  };

  this.removeSpecialChars = function () {
    this.text = this.text.replace(/[^a-zA-Z0-9 ]/g, "");
    return this;
  };

  this.capitalizeWords = function () {
    this.text = this.text
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return this;
  };

  this.replaceSpacesWithDash = function () {
    this.text = this.text.replace(/\s+/g, "-");
    return this;
  };

  this.get = function () {
    return this.text;
  };
}

// Main function to trigger on button click
function transformText() {
  var input = document.getElementById("inputText").value;

  var result = new TextTransformer(input)
    .trim()
    .toLower()
    .removeSpecialChars()
    .capitalizeWords()
    .replaceSpacesWithDash()
    .get();

  document.getElementById("outputText").textContent = result;
}
