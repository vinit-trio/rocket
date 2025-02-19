document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach(slide => {
    slide.addEventListener("mouseenter", function () {
      slides.forEach(s => s.classList.remove("swiper-slide-next"));
      this.classList.add("swiper-slide-next");
    });
  });
});
try {
  const swiperContainer = document.querySelector('.reviewsSwiper');

  if (!swiperContainer) {
    console.error("Swiper container '.reviewsSwiper' not found.");
  } else {
    const swiper = new Swiper('.reviewsSwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 'auto',
          allowTouchMove: false,
          spaceBetween: 0,
        },
      },
      on: {
        init(swiper) {
          try {
            swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.stop());
            swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.start());
          } catch (eventError) {
            console.error("Error adding event listeners:", eventError);
          }
        },
      },
    });
  }
} catch (error) {
  console.error("Error initializing Swiper:", error);
}

document.addEventListener("DOMContentLoaded", function () {
  let mainTabs = document.querySelectorAll(".tab-btn");
  let subTabs = document.querySelectorAll(".sub-tab-btn");
  let contents = document.querySelectorAll(".tab-content");
  let currentMainIndex = 0;
  let currentSubIndex = 0;
  let typingSpeed = 10;
  let userClicked = false;
  let loopTimeout;
  let contentMap = {
    "acf": ["init-acf", "search-acf", "install-acf", "activate-acf"],
    "php": ["init-php", "search-php", "install-php", "activate-php"],
    "js": ["init-js", "search-js", "install-js", "activate-js"],
    "css": ["init-css", "search-css", "install-css", "activate-css"],
  };
  let mainTabKeys = Object.keys(contentMap);
  function showMainTab(index, isAuto = true) {
    userClicked = !isAuto;
    mainTabs.forEach(tab => tab.classList.remove("active-tab"));
    let mainKey = mainTabKeys[index];
    document.querySelector(`.tab-btn[data-main="${mainKey}"]`).classList.add("active-tab");
    currentMainIndex = index;
    currentSubIndex = 0;
    showSubTab(contentMap[mainKey][0], isAuto);
  }
  function showSubTab(subId, isAuto = true) {
    userClicked = !isAuto;
    subTabs.forEach(tab => tab.classList.remove("active-subtab"));
    let subTab = document.querySelector(`.sub-tab-btn[data-sub="${subId.split('-')[0]}"]`);
    if (subTab) subTab.classList.add("active-subtab");
    contents.forEach(el => {
      el.style.display = "none";
      el.textContent = el.getAttribute("data-original-text") || el.textContent;
    });
    let contentEl = document.getElementById(subId);
    contentEl.style.display = "block";
    let text = contentEl.getAttribute("data-original-text");
    if (!text) {
      text = contentEl.textContent.trim();
      contentEl.setAttribute("data-original-text", text);
    }
    typeContent(contentEl, text, () => {
      if (isAuto || !userClicked) {
        handleNextTab();
      }
    });
  }
  function typeContent(element, text, callback) {
    clearTimeout(loopTimeout);
    element.textContent = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        loopTimeout = setTimeout(type, typingSpeed);
      } else {
        loopTimeout = setTimeout(callback, 800);
      }
    }
    type();
  }
  function handleNextTab() {
    currentSubIndex++;
    let mainKey = mainTabKeys[currentMainIndex];

    if (currentSubIndex < contentMap[mainKey].length) {
      showSubTab(contentMap[mainKey][currentSubIndex], true);
    } else {
      currentMainIndex = (currentMainIndex + 1) % mainTabKeys.length;
      showMainTab(currentMainIndex, true);
    }
  }
  mainTabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      userClicked = false;
      showMainTab(index, false);
    });
  });
  subTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      userClicked = false;
      let subId = `${this.dataset.sub}-${mainTabKeys[currentMainIndex]}`;
      showSubTab(subId, false);
    });
  });

  showMainTab(0, true);
});
const lines = [`<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get form data
  $name = htmlspecialchars(trim($_POST['name']));
  $email = htmlspecialchars(trim($_POST['email']));
  $message = htmlspecialchars(trim($_POST['message']));

  // Validate email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      die("Invalid email address.");
  }`];
let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 30;
let lineDelay = 1000;
const typingCode = document.querySelector('.typing-code')
function typeText() {
  if (lineIndex < lines.length) {
    let currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      typingCode.innerHTML += currentLine[charIndex];
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      typingCode.innerHTML += "<br>";
      charIndex = 0;
      lineIndex++;
      setTimeout(typeText, lineDelay);
    }
  } else {
    setTimeout(() => {
      typingCode.innerHTML = "";
      lineIndex = 0;
      charIndex = 0;
      typeText();
    }, 1000);
  }
}
window.onload = typeText;
document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    document.getElementById("environmentTag"),
    document.getElementById("acf"),
    document.getElementById("js"),
    document.getElementById("elementor"),
    document.getElementById("divi"),
  ];
  const envRect = document.getElementById("slate");
  let isAnimatingDown = true;
  function animateElements() {
    if (isAnimatingDown) {
      envRect.classList.add("anim-down");
      envRect.classList.remove("anim-up");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("anim-down");
          el.classList.remove("anim-up");
        }, (index + 1) * 500);
      });
    } else {
      elements.slice().reverse().forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("anim-up");
          el.classList.remove("anim-down");
        }, index * 500);
      });
      setTimeout(() => {
        envRect.classList.add("anim-up");
        envRect.classList.remove("anim-down");
      }, elements.length * 500);
      setTimeout(() => {
        envRect.style.opacity = "0";
      }, elements.length * 500 + 1000);
    }
    isAnimatingDown = !isAnimatingDown;
  }
  const animationDuration = elements.length * 500 + 2000;
  setInterval(animateElements, animationDuration);
  animateElements();
});