// Floating Hearts Background
const floatingBg = document.getElementById("floating-bg");

function createHeart() {
  if (!floatingBg) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.animationDuration = Math.random() * 4 + 5 + "s";

  floatingBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 350);


// Falling Rose Petals
const petalsContainer = document.getElementById("petals-container");

function createPetal() {
  if (!petalsContainer) return;

  const petal = document.createElement("div");
  petal.classList.add("petal");

  const petals = ["🌸", "🌹", "💮"];
  petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 20 + 15 + "px";

  let duration = Math.random() * 5 + 5;
  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

setInterval(createPetal, 250);


// Popup functions
const popup = document.getElementById("popup");

function openPopup() {
  if (!popup) return;
  popup.classList.add("active");
}

function closePopup() {
  if (!popup) return;
  popup.classList.remove("active");
}


function loveMeter() {
  const meterText = document.getElementById("meterText");
  const meterSubText = document.getElementById("meterSubText");

  if (!meterText || !meterSubText) return;

  meterText.innerHTML = `<span class="infinity-glow">∞ 💖🌹</span>`;
  
  const cuteLines = [
    "Not measurable... because it's endless 💕",
    "Even the universe can't count this love 🌌💖",
    "More than stars, more than roses 🌹✨",
    "This love has no limit Swatiii 😭💗",
    "Infinite love loading forever... ♾️💞"
  ];

  meterSubText.innerHTML = cuteLines[Math.floor(Math.random() * cuteLines.length)];

  // Heart burst effect
  for (let i = 0; i < 15; i++) {
    createMiniHeartBurst();
  }
}

// Mini heart burst animation
function createMiniHeartBurst() {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.zIndex = "9999";
  heart.style.opacity = "1";
  heart.style.transition = "1s ease";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-80px) scale(1.5)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}




// Typing Animation
const typingText = document.getElementById("typingText");

const message = `So swatiii a very happy Rose day to youuu 🌹💗
you are a rose in the garden of my heart swatiiiii 💕
you are genuinely the only person I enjoy talking to
i feel happy when I talk to you , you just understands me , swati 🌸✨
there will be hard day's misunderstanding but I promise to you
i won't give up on you i won't leave you ever 💖
my cutuuu patutu malkinnn jii 😭💕
thank you for just simply being "YOU" 🌷💗`;

let index = 0;

function typeMessage() {
  if (!typingText) return;

  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, 40);
  }
}

typeMessage();


// Page Navigation
function goToRosePage() {
  window.location.href = "rose.html";
}

function goToPhotosPage() {
  window.location.href = "photos.html";
}

function goBack() {
  window.location.href = "index.html";
}



// POPUP MEDIA VIEW (IMAGE + VIDEO)
const mediaPopup = document.getElementById("mediaPopup");
const popupImage = document.getElementById("popupImage");
const popupVideo = document.getElementById("popupVideo");
const popupVideoSource = document.getElementById("popupVideoSource");

function openMedia(src, type) {
  if (!mediaPopup) {
    console.log("Popup not found");
    return;
  }

  mediaPopup.classList.add("active");

  if (type === "image") {
    popupVideo.style.display = "none";
    popupImage.style.display = "block";
    popupImage.src = src;
  } 
  else if (type === "video") {
    popupImage.style.display = "none";
    popupVideo.style.display = "block";
    popupVideoSource.src = src;
    popupVideo.load();
    popupVideo.play();
  }
}

function closeMedia() {
  mediaPopup.classList.remove("active");

  popupImage.style.display = "none";
  popupVideo.style.display = "none";

  if (popupVideo) {
    popupVideo.pause();
  }
}

// Close popup when clicking outside popup box
window.addEventListener("click", function(e) {
  if (e.target === mediaPopup) {
    closeMedia();
  }
});
