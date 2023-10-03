    // var color1 = new Color(245, 223, 207);
    // var color2 = new Color(195,216,197);
    // var color3 = new Color(255, 255, 255);
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  

  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
 
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
  
  function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  videoconAnimation();
  
  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();
  
  function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });



    const colors = ["rgba(245, 223, 207)", "pink", "rgb(195,216,197)"];

    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
          backgroundColor:randomColor
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();
    // let col= document.querySelector(".col");
    // let col1= document.querySelector(".col1");
    // let col2= document.querySelector(".col2");
    // col.style.backgroundColor="rgb(195,216,197)";
    //   col1.style.backgroundColor="rgb(245, 223, 207)";
    //   col2.style.backgroundColor="rgb(255, 255, 255)";

  
    function tsted() {
      let tsts = document.querySelectorAll("#tst");
      var info = document.querySelector(".info");
    
      tsts.forEach((tst, index) => {
        // tst[0].style.backgroundColor="rgb(195, 216, 197)";
        // tst[1].style.backgroundColor="rgb(245, 223, 207)";
        // tst[2].style.backgroundColor="rgb(255, 255, 255)";
        tst.addEventListener("mouseenter", function () {
          // Set CSS properties for mouseenter event
          // switch (index) {
          //   case 0:
          //     tst.style.backgroundColor = "rgb(195, 216, 197)";
          //     break;
          //   case 1:
          //     tst.style.backgroundColor = "rgb(245, 223, 207)";
          //     break;
          //   case 2:
          //     tst.style.backgroundColor = "rgb(255, 255, 255)";
          //     break;
          //   // Add more cases for additional elements and colors
          //   default:
          //     break;
          // }
          
          tst.style.width = "50%";
          tst.style.height = "2vw";
          tst.style.paddingTop = "2vw";
          tst.style.top = "48%";
          tst.style.paddingBottom = "10vw";
          tst.style.zIndex = "8";
          tst.style.position = "absolute";
          tst.style.borderRadius = "25px";
        });
    
        tst.addEventListener("mouseleave", function () {
          // Set CSS properties for mouseleave event to revert to original form
          switch (index) {
            case 0:
              tst.style.backgroundColor = "rgb(195, 216, 197)";
              break;
            case 1:
              tst.style.backgroundColor = "rgb(245, 223, 207)";
              break;
            case 2:
              tst.style.backgroundColor = "rgb(255, 255, 255)";
              break;
            // Add more cases for additional elements and colors
            default:
              break;
          }
          // tst[0].style.backgroundColor = "rgb(195, 216, 197)";
          // tst[1].style.backgroundColor = "rgb(245, 223, 207)";
          // tst[2].style.backgroundColor = "rgb(255, 255, 255)";
          tst.style.height = "2vw";
          tst.style.borderRadius = "50px";
          tst.style.width = "50%";
          tst.style.paddingTop = 0;
          tst.style.paddingBottom = "0vw";
          tst.style.position = "absolute";
          tst.style.zIndex = "9";
          // tst.style.backgroundColor = "rgb(195, 216, 197)"; // Set the original color
        });
      });
    }
    
    tsted();
    
// let tl=gsap.timeline();  

// Wrap your code in a function and call it when the DOM is loaded
function animateElements() {
  // Select all elements with class "img" inside elements with class "flex1"
  const imgElements = document.querySelectorAll(".flex1 .img");

  // Initialize a timeline for the animation
  const tl = gsap.timeline();

  // Loop through each img element and add animations
  imgElements.forEach((imgElement, index) => {
    tl.fromTo(
      imgElement,
      { opacity: 0, y: 20 }, // Initial state (invisible and slightly down)
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration for the animation (adjust as needed)
        ease: "power2.out", // Easing function (adjust as needed)
      },
      `-=${index * 0.5}` // Delay each animation by 0.5 seconds
    );
  });

  // Return the timeline for further control if needed
  return tl;
}

// Call the animateElements function when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  animateElements();
});
