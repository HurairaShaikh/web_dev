let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");

var typed = new Typed(element1, {
    strings: ['Software Engineer', 'FrontEnd Developer', 'Web Developer', 'Mobile App Developer'],
    typeSpeed: 50,
    loop: true
});
var typed = new Typed(element2, {
    strings: ['Software Engineer', 'FrontEnd Developer', 'Web Developer', 'Mobile App Developer'],
    typeSpeed: 50,
    loop: true
});

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("toast");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        form.reset();
        toast.textContent = "✓ Message sent successfully!";
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);

    } else {
        successMessage.textContent =
            "Something went wrong. Please try again.";
    }
});


const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {

    dropdown.classList.toggle("active");

});