function validateForm() {
    let arrivalDate = new Date(document.getElementById("arrivalDate").value);
    let departureDate = new Date(document.getElementById("departureDate").value);
    let errorMsg = document.getElementById("errorMsg");

    console.log(arrivalDate);
    console.log(departureDate);
    if(arrivalDate > departureDate) {
      errorMsg.innerHTML = "Datum dolaska ne može biti nakon datuma odlaska!"
      errorMsg.style.display = "inline-block";
      return false;
    }
    if(arrivalDate < new Date().setHours(0,0,0,0)) {
      errorMsg.innerHTML = "Datum dolaska ne može biti manji od današnjeg datuma"
      return false;
    }
  }