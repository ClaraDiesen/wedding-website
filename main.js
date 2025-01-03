const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-50 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

/*
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3000;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})*/

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);


document.addEventListener('DOMContentLoaded', () => {
  const guestCountSelect = document.getElementById('guest-count');
  const additionalGuestsContainer = document.getElementById('additional-guests-container');

  guestCountSelect.addEventListener('change', () => {
      const guestCount = parseInt(guestCountSelect.value, 10);
      additionalGuestsContainer.innerHTML = ''; // Clear existing fields

      if (guestCount > 1) {
          for (let i = 2; i <= guestCount; i++) {
              const label = document.createElement('label');
              label.textContent = `*Name des Gasts ${i}`;
              label.setAttribute('for', `guest-name-${i}`);

              const input = document.createElement('input');
              input.type = 'text';
              input.id = `guest-name-${i}`;
              input.name = `guest-name-${i}`;
              input.required = true;

              const error = document.createElement('span');
              error.className = 'error';
              error.id = `guest-name-${i}-error`;
              error.textContent = 'Dies ist ein Pflichtfeld.';
              error.style.display = 'none';

              additionalGuestsContainer.appendChild(label);
              additionalGuestsContainer.appendChild(input);
              additionalGuestsContainer.appendChild(error);
          }
      }
  });

  // Form submission validation
  const form = document.getElementById('personal-info-form');
  form.addEventListener('submit', function (event) {
    const attendanceError = document.getElementById('attendance-error');
    const attendanceRadios = document.getElementsByName('attendance');
    
    let isAttendanceSelected = false;
    
    for (const radio of attendanceRadios) {
        if (radio.checked) {
            isAttendanceSelected = true;
            break;
        }
    }
    
    if (!isAttendanceSelected) {
        attendanceError.style.display = 'block';
        isValid = false;
    } else {
        attendanceError.style.display = 'none';
    }
    


      event.preventDefault();

      let isValid = true;

      // Validate First Name
      const firstname = document.getElementById('firstname');
      const firstnameError = document.getElementById('firstname-error');
      if (!firstname.value.trim()) {
          firstnameError.style.display = 'block';
          isValid = false;
      } else {
          firstnameError.style.display = 'none';
      }

      // Validate Last Name
      const lastname = document.getElementById('lastname');
      const lastnameError = document.getElementById('lastname-error');
      if (!lastname.value.trim()) {
          lastnameError.style.display = 'block';
          isValid = false;
      } else {
          lastnameError.style.display = 'none';
      }

      // Validate Email
      const email = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      if (!email.value.trim() || !email.value.includes('@')) {
          emailError.style.display = 'block';
          isValid = false;
      } else {
          emailError.style.display = 'none';
      }

      // Validate Guest Count
      const guestCountError = document.getElementById('guest-count-error');
      if (!guestCountSelect.value) {
          guestCountError.style.display = 'block';
          isValid = false;
      } else {
          guestCountError.style.display = 'none';
      }

      // Validate Additional Guests
      const guestCount = parseInt(guestCountSelect.value, 10);
      for (let i = 2; i <= guestCount; i++) {
          const guestInput = document.getElementById(`guest-name-${i}`);
          const guestError = document.getElementById(`guest-name-${i}-error`);
          if (guestInput && !guestInput.value.trim()) {
              guestError.style.display = 'block';
              isValid = false;
          } else if (guestError) {
              guestError.style.display = 'none';
          }
      }

      if (isValid) {
          alert('Vielen Dank für Ihre Angaben!');
          form.reset();
          additionalGuestsContainer.innerHTML = ''; // Clear additional guest fields
      }
  });
});
