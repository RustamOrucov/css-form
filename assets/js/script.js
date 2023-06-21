const ElementSpans = document.querySelectorAll(".hide");
const ElementInput = document.querySelectorAll(".text");
const EmailElement = document.getElementById("email");

function HideDel() {
  event.preventDefault();
  ElementInput.forEach((InputEl) => {
    if (InputEl.value == "") {
      ElementSpans.forEach((element) => {
        element.classList.remove("hide");
        InputEl.style.borderColor = "hsl(0, 100%, 74%)";
        EmailElement.value = "example@gmail.com";
        EmailElement.style.borderColor = "hsl(0, 100%, 74%)";
        EmailElement.style.color = "hsl(0, 100%, 74%)";
        InputEl.placeholder = "";
      });
    }
  });
}
