// Mouse/Keypress events
const myDiv = document.getElementById("my-div");
// mouseover event
myDiv.addEventListener("mouseover", function() {
  myDiv.style.backgroundColor = "steelblue";
});
// mouseout event
myDiv.addEventListener("mouseout", function() {
  myDiv.style.backgroundColor = "#04aa6d";
});
// Random Generator
//  DOM elements
const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");
// Now we need to create an array of predefined quote objects which we will select from randomly:
const quotes = [{
  quote: "Don’t let yesterday take up too much of today.",
  author: "— Will Rogers"
}, {
  quote: "Believe you can and you're halfway there.",
  author: "— Theodore Roosevelt"
}, {
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
  author: "— Thomas Edison"
}, {
  quote: "It does not matter how slowly you go as long as you do not stop.",
  author: "— Confucius"
}, {
  quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  author: "— Winston Churchill"
}, {
  quote: "The only true wisdom is in knowing you know nothing.",
  author: "— Socrates"
}, {
  quote: "If you’re going through hell, keep going.",
  author: "— Winston Churchill"
}, {
  quote: "Every man dies. Not every man lives.",
  author: "— William Wallace"
}, {
  quote: "Nothing is impossible. The word itself says “I’m possible!.",
  author: "— Audrey Hepburn"
}, {
  quote: "We need much less than we think we need.",
  author: "— Maya Angelou"
}, {
  quote: "If things go wrong, don’t go with them.",
  author: "— Roger Babson"
}, {
  quote: "Be yourself; everyone else is already taken.",
  author: "— Oscar Wilde"
}, {
  quote: "Simplicity is the ultimate sophistication.",
  author: "— Leonardo da Vinci"
}, {
  quote: "Be so good they can’t ignore you.",
  author: "— Steve Martin"
}, {
  quote: "You do not find the happy life. You make it.",
  author: "— Camilla Eyring Kimball"
}];
//  event listener to the button element which listens for a click event.
button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  if(quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});
// Dark/Light Toggle
const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");
  const modeMessage = body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
  modeStatus.innerText = "Currently in " + modeMessage;
}
modeToggle.addEventListener("click", toggleMode);
// Form Validation
// DOM elements
const form = document.getElementById("formOne");
const submitButton = document.querySelector(".submit");
const successMessage = document.getElementById("form-submitted-msg");
// Store all form elements in an array by spreading the elements property of the form
const formElements = [...form.elements];
// Create function to check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if(element.nodeName === "SELECT") {
      return element.value !== "Please select an option";
    } else {
      return element.checkValidity();
    }
  });
  return valid;
};
// Define a function to handle changes to any form element
const handleChange = () => {
  // Use the forEach() function to execute the provided function once for each element in the formElements array
  formElements.forEach((element) => {
    // If the element is invalid and is not a button, a select dropdown, a checkbox, or a radio button, style it with a red border and red text
    if(!element.checkValidity() && element.nodeName !== "BUTTON" && element.nodeName !== "SELECT"
      // && element.type !== 'checkbox'
      // && element.type !== 'radio'
    ) {
      element.style.borderColor = "red";
      element.nextElementSibling.style.color = "red";
      element.nextElementSibling.style.display = "block";
      element.previousElementSibling.style.color = "red";
    }
    // If the element is valid, reset its style to the original colors
    // The conditions are the same as above for excluding certain elements
    if(element.checkValidity() && element.nodeName !== "BUTTON" && element.nodeName !== "SELECT"
      // && element.type !== 'checkbox'
      // && element.type !== 'radio'
    ) {
      element.style.borderColor = "#CED4DA";
      element.nextElementSibling.style.color = "#CED4DA";
      element.nextElementSibling.style.display = "none";
      element.previousElementSibling.style.color = "#212529";
    }
    // If the checkbox or radio button is valid, reset its style to the original colors
    // if (element.checkValidity()
    //       && (element.type === 'checkbox'
    //           || element.type === 'radio')
    // ) {
    //   element.style.borderColor = '#CED4DA'
    //   element.nextElementSibling.style.color = '#212529'
    // }
    // If the element is a select dropdown and the default option is selected, style it with a red border and red text
    if(element.nodeName === "SELECT" && element.value === "Please select an option") {
      element.style.borderColor = "red";
      element.nextElementSibling.style.color = "red";
      element.nextElementSibling.style.display = "block";
      element.previousElementSibling.style.color = "red";
    }
    // If an option other than the default is selected in the dropdown, reset its style to the original colors
    if(element.nodeName === "SELECT" && element.value !== "Please select an option") {
      element.style.borderColor = "#CED4DA";
      element.nextElementSibling.style.color = "#CED4DA";
      element.nextElementSibling.style.display = "none";
      element.previousElementSibling.style.color = "#212529";
    }
  });
  // If all form elements are valid, enable the submit button; otherwise, disable it
  if(allInputsValid()) {
    submitButton.removeAttribute("disabled", "");
  } else {
    submitButton.setAttribute("disabled", "");
  }
};
// Define a function to handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
  if(allInputsValid()) {
    successMessage.style.display = "block";
    form.reset();
    submitButton.setAttribute("disabled", "");
    // Hide the success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
};
// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener("change", handleChange);
});
// Add submit listener to the form
form.addEventListener("submit", (e) => handleSubmit(e));
