var tablinks = document.getElementsByClassName("tab-link");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

//         var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//     sidemenu.style.right = "0";
// }

// function closemenu() {
//     sidemenu.style.right = "-200px";
// }
// document.addEventListener("DOMContentLoaded", function() {
//     const text = "Frontend Developer";
//     let index = 0;
//     const speed = 100; // typing speed in milliseconds

//     function typeWriter() {
//         if (index < text.length) {
//             document.getElementById("typing-effect").textContent += text.charAt(index);
//             index++;
//             setTimeout(typeWriter, speed);
//         }
//     }

//     typeWriter();
// });
// Add this JavaScript to your existing script.js
document.addEventListener("DOMContentLoaded", function() {
    const text = "Frontend Developer";
    const typingEffectElement = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffectElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    typingEffectElement.textContent = "";  // Clear the initial text
    type();
});

