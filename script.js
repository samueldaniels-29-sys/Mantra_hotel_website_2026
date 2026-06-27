// MERIDIAN HOTEL & SPA — script.js

/* Mobile navigation toggle */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

/* Booking form validation */
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;
    const guests = document.getElementById("guests").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || phone === "" || checkin === "" || checkout === "" || roomType === "" || guests === "") {
      formMessage.className = "result err";
      formMessage.textContent = "Please fill all required fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.className = "result err";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      formMessage.className = "result err";
      formMessage.textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
      formMessage.className = "result err";
      formMessage.textContent = "Check-out date must be after the check-in date.";
      return;
    }

    formMessage.className = "result ok";
    formMessage.textContent = "Thank you, " + name + "! Your reservation enquiry has been received. Our front desk will confirm shortly.";
    bookingForm.reset();
  });
}

/* Room cost calculator */
function calculateStay() {
  const roomSelect = document.getElementById("roomSelect");
  const nightsInput = document.getElementById("nightsCount");
  const roomsInput = document.getElementById("roomsCount");
  const costResult = document.getElementById("costResult");
  if (!roomSelect || !nightsInput || !roomsInput || !costResult) return;

  const pricePerNight = Number(roomSelect.value);
  const nights = Number(nightsInput.value);
  const rooms = Number(roomsInput.value);

  if (nights <= 0 || rooms <= 0) {
    costResult.className = "result err";
    costResult.textContent = "Please enter a valid number of nights and rooms.";
    return;
  }

  const total = pricePerNight * nights * rooms;
  costResult.className = "result ok";
  costResult.textContent = "Estimated Total: ₹" + total.toLocaleString("en-IN") + " for " + nights + " night(s), " + rooms + " room(s).";
}

/* Gallery filter */
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  const buttons = document.querySelectorAll(".filter-buttons .btn");
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    }
  });
}