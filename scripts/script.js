const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/Structures of Navigation and the Syntax of the City  (3_4).jpeg") {
        myImage.setAttribute("src", "assets/camd.png");
    } else {
        myImage.setAttribute("src", "assets/Structures of Navigation and the Syntax of the City  (3_4).jpeg");
    }
};
let myButton = document.querySelector("button");
let myGreeting = document.querySelector("#mailing");

function mailingList() {
    const email = prompt("please enter your email.");
    if (!email) {
        mailingList();
    } else {
        localStorage.setItem("email", email);
        myGreeting.textContent = `thank-you: ${email}`;
    }
}

myButton.onclick = () => {
    mailingList();
};