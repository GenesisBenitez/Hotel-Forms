

function bookReservation(e){
e.preventDefault();
var modal = document.getElementById("modal");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phoneNumber");
var reservationDate = document.getElementById("reservationDate");
var modal = $("#modal");
$(".modal-body").append(`
    <h5>Hello ${capitalize(firstName.value)} ${capitalize(lastName.value)}</h5>
    <p>Your reservation for ${reservationDate.value} is confirmed. We have sent a confirmation to <b>${email.value}</b></p>
    <small>Thank you!</small>
`);
modal.modal('show');
console.log(firstName.value);
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}