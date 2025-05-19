// This is a simple JavaScript code that types out a poem letter by letter on a webpage.

var i = 0;
var txt = `It’s for you, my favorite name, 
In fickling rain, I feel the same.
Each drop recalls a silent blame,
Yet still, I whisper you in shame.`;

var speed = 80; // The speed/duration of the effect in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
document.getElementById("giftImg").addEventListener("click","touchstart", () => {
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
