function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
}

function validateForm() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;
}
if (!destination || !date || !people) {
    alert ("Please fill in all the fields.");
} else {
    showModal();
}

