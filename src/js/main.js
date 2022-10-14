let mobileNavBtn = document.getElementById("mobile-nav-btn");
let mobileNav = document.getElementById("mobile-nav");

mobileNavBtn.addEventListener("click", function () {
  if (mobileNav.hasAttribute("class")) {
    mobileNav.removeAttribute("class");
  } else {
    mobileNav.setAttribute("class", "active");
  }
});

// Get the button:
let mybutton = document.getElementById("myBtn");
let myHeader = document.getElementById("theHeader");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  headerFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function headerFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    myHeader.style.padding = "5px 0 5px 0";
  } else {
    myHeader.style.padding = "40px 0 40px 0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var max_viewport_width = 919;
window.addEventListener(
  "resize",
  function () {
    var viewport_width = document.documentElement.clientWidth;
    if (viewport_width <= max_viewport_width) {
      console.log("stay put");
    } else if (mobileNav.hasAttribute("class")) {
      mobileNav.removeAttribute("class");
    }
  },
  true
);

let section_title = document.getElementById("section_title");
let section_title_i = document.getElementById("section_title_i");

section_title.addEventListener("mouseover", function () {
  if (section_title_i.hasAttribute("class", "showRed")) {
    section_title_i.removeAttribute("class", "showRed");
  } else {
    section_title_i.setAttribute("class", "showRed");
  }
});
section_title.addEventListener("mouseout", function () {
  if (section_title_i.hasAttribute("class", "showRed")) {
    section_title_i.removeAttribute("class", "showRed");
  }
});

let project_title_1 = document.getElementById("project_title_1");
let project_title_1_i = document.getElementById("project_title_1_i");

project_title_1.addEventListener("mouseover", function () {
  if (project_title_1_i.hasAttribute("class", "showRed")) {
    project_title_1_i.removeAttribute("class", "showRed");
  } else {
    project_title_1_i.setAttribute("class", "showRed");
  }
});
project_title_1.addEventListener("mouseout", function () {
  if (project_title_1_i.hasAttribute("class", "showRed")) {
    project_title_1_i.removeAttribute("class", "showRed");
  }
});

let project_title_2 = document.getElementById("project_title_2");
let project_title_2_i = document.getElementById("project_title_2_i");

project_title_2.addEventListener("mouseover", function () {
  if (project_title_2_i.hasAttribute("class", "showRed")) {
    project_title_2_i.removeAttribute("class", "showRed");
  } else {
    project_title_2_i.setAttribute("class", "showRed");
  }
});
project_title_2.addEventListener("mouseout", function () {
  if (project_title_2_i.hasAttribute("class", "showRed")) {
    project_title_2_i.removeAttribute("class", "showRed");
  }
});

// window.onscroll = function (ev) {
//   if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 60) {
//     // you're at the bottom of the page
//     console.log("Bottom of page");
//   }
// };
