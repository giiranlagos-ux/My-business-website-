function createBusinessPage() {
  const name = document.getElementById("businessName").value;
  const description =
    document.getElementById("businessDescription").value;
  const phone =
    document.getElementById("businessPhone").value;
  const location =
    document.getElementById("businessLocation").value;

  if (!name) {
    alert("Please enter your business name.");
    return;
  }

  document.getElementById("businessResult").innerHTML = `
    <hr>
    <h2>${name}</h2>
    <p>${description}</p>
    <p>📞 ${phone}</p>
    <p>📍 ${location}</p>
    <button onclick="shareBusiness()">Share Website</button>
  `;
}

function shareBusiness() {
  if (navigator.share) {
    navigator.share({
      title: "My Business Website",
      text: "Check out my business website!"
    });
  } else {
    alert("Sharing is not supported in this browser.");
  }
}
function createBusinessPage() {
  const name = document.getElementById("businessName").value;
  const description =
    document.getElementById("businessDescription").value;
  const phone =
    document.getElementById("businessPhone").value;
  const location =
    document.getElementById("businessLocation").value;

  if (!name) {
    alert("Please enter your business name.");
    return;
  }

  document.getElementById("businessResult").innerHTML = `
    <hr>
    <h2>${name}</h2>
    <p>${description}</p>
    <p>📞 ${phone}</p>
    <p>📍 ${location}</p>
    <button onclick="shareBusiness()">Share Website</button>
  `;
}

function shareBusiness() {
  if (navigator.share) {
    navigator.share({
      title: "My Business Website",
      text: "Check out my business website!"
    });
  } else {
    alert("Sharing is not supported in this browser.");
  }
}
const videoInput = document.getElementById("videoInput");
const videoPreview = document.getElementById("videoPreview");

if (videoInput) {
  videoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      videoPreview.src = URL.createObjectURL(file);
      videoPreview.style.display = "block";
    }
  });
}

function shareVideo() {
  if (!videoInput.files.length) {
    alert("Choose a video first.");
    return;
  }

  if (navigator.share) {
    navigator.share({
      title: "My Video",
      text: "Check out my video!"
    });
  } else {
    alert("Your browser does not support sharing.");
  }
}
function connectPlatforms() {
  const selected = [];

  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach(function (box) {
      selected.push(box.value);
    });

  if (selected.length === 0) {
    alert("Select at least one platform.");
    return;
  }

  document.getElementById("platformResult").innerHTML =
    "Selected platforms: " + selected.join(", ");
}
function createPromotion() {
  const title = document.getElementById("marketingTitle").value;
  const link = document.getElementById("marketingLink").value;

  if (!title || !link) {
    alert("Enter a promotion title and link.");
    return;
  }

  document.getElementById("promotionResult").innerHTML = `
    <hr>
    <h3>${title}</h3>
    <p>Promotion created.</p>
    <a href="${link}" target="_blank">Open promoted content</a>
  `;
}