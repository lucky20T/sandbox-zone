// This is a simple JavaScript code that types out a poem letter by letter on a webpage.

var i = 0;
var j = 0;
var txt = `It’s for you, my favorite name, 
In fickling rain, I feel the same.
Each drop recalls a silent blame,
Yet still, I whisper you in shame.`;
var txt2 = `Happy Birthday to you, my love!

May all the happiness in the world knock at your door,
May life treat you gently, and love find you more.
Even if our paths grow apart, I’ll always hope you soar`;

var speed = 80; // The speed/duration of the effect in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

};

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("wish").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }else {
    // 🎯 Event is completed here — now show the button
    setTimeout(() => {
      const delayedBtn = document.getElementById("delayedBtn");
      delayedBtn.classList.remove("hidden-btn");
      delayedBtn.classList.add("show-btn");
    }, 1000); // 1 second delay (optional)
  }

};
function nextPage() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";

    const section3 = document.getElementById("section3");
    section3.classList.add("show");
}
function wishPage() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  const section4 = document.getElementById("section4");
  section4.classList.add("show");
}
function final() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  const section5 = document.getElementById("section5");
  section5.classList.add("show");
}
document.getElementById("giftImg").addEventListener("click", () => {
    // Play music
    const music = document.getElementById("myMusic");
    music.play();

    // Animate image (scale and fade)
    const gift = document.getElementById("giftImg");
    const text = document.getElementById("text-h");
    const home = document.getElementById("section1");
    const next = document.getElementById("section2");

    
    next.style.opacity = "1";
    text.style.transition = "transform 1s ease, opacity 1s ease";
    text.style.transform = "scale(0)";
    text.style.opacity = "0";  

    gift.style.transform = "scale(7)";
    gift.style.opacity = "0";

    // After animation, hide image and show new content
    setTimeout(() => {
    gift.style.display = "none";
    document.querySelector(".next-img").style.display = "block"; // show the image
    document.getElementById("wapper").classList.remove("hidden"); // show the typewriter text
    typeWriter(); // start typing
}, 1000);
});

//     setTimeout(() => {
//         gift.style.display = "none";
//         document.getElementById("newContent").classList.remove("hidden");
//     }, 1000); // matches the CSS transition duration
// });
document.getElementById("giftImg").addEventListener("touchstart", () => {
    // Play music
    const music = document.getElementById("myMusic");
    music.play();

    // Animate image (scale and fade)
    const gift = document.getElementById("giftImg");
    const text = document.getElementById("text-h");
    const home = document.getElementById("section1");
    const next = document.getElementById("section2");

    
    next.style.opacity = "1";
    text.style.transition = "transform 1s ease, opacity 1s ease";
    text.style.transform = "scale(0)";
    text.style.opacity = "0";  

    gift.style.transform = "scale(7)";
    gift.style.opacity = "0";

    // After animation, hide image and show new content
    setTimeout(() => {
    gift.style.display = "none";
    document.querySelector(".next-img").style.display = "block"; // show the image
    document.getElementById("wapper").classList.remove("hidden"); // show the typewriter text
    typeWriter(); // start typing
}, 1000);


/**
 * Navigates to the next page by hiding sections 1 and 2,
 * and displaying section 3 by adding the "show" class.
 */


});
