function myfunction() {
    let FormInput=['nameInput','emailInput','idNumber','phoneNumber','visitingDate','NoOfattedance','TypeOfRoom'];
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let idNumber = document.getElementById('idnumber');
    let phoneNumber = document.getElementById('phoneNumber');
    let visitingDate = document.getElementById('date');
    let NoOfattedance = document.getElementById('number');
    let TypeOfRoom = document.getElementById('room');
let message;


if (nameInput.value && TypeOfRoom.value && visitingDate.value && emailInput.value) {
    document.getElementById('display').classList.add('msg');
   
      message="congraturations... <br> you have succefully booked a room in our restaurant.<br>wait for a confirmation message." 

} else {

    document.getElementById("display").classList.add("error");
    message = "please input all the fields as recommeded";
}

document.getElementById('display').innerHTML=message;

}