function validateForm() {
    let arrivalDate = new Date(document.getElementById("arrivalDate").value);
    let departureDate = new Date(document.getElementById("departureDate").value);
    let errorMsg = document.getElementById("errorMsg");

    console.log(arrivalDate);
    console.log(departureDate);
    if (arrivalDate > departureDate) {
        errorMsg.innerHTML = "Arrival date cannot be after departure date!"
        errorMsg.style.display = "inline-block";
        return false;
    }
    if (arrivalDate < new Date().setHours(0, 0, 0, 0)) {
        errorMsg.innerHTML = "Arrival date cannot be before today's date!"
        return false;
    }
}