//enis 연결 -> 라이브러리랑 같이 연결 안됨 !!

const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    ease: "liner",
  });

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};

initSmoothScrolling();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});
//------------------------------------------------------------------

// Shery.mouseFollower();

// // Shery.mouseFollower({
// //     //Parameters are optional.
// //     skew: true,
// //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
// //     duration: 1,
// //   });

//   Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.3,
//   });

//   Shery.textAnimate(".point-target" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//     scale:1,
//     delay: 0.1,
//     duration: 0.5,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   }); //scrollTrigger 들어가있음

//------------------------------------------------------------------
//🤍header🤍

let scrollHeader = () => {
  let header = document.querySelector("#header");
  // pageYOffset >= 50 ? A : B; // 조건문이 참이면 A가 실행되고 거짓이면 B가 실행된다.
  if (window.pageYOffset >= 50) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};

window.addEventListener("scroll", scrollHeader);

//------------------------------------------------------------------

//------------------------------------------------------------------

// //🤍section1 cont_box tap menu🤍

function openCont(e, cityName) {
  // console.log(cityName)
  let tabcontent = document.getElementsByClassName("tabcontent");
  let tablinks;
  console.log(tabcontent[1]);
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "flex";
}

document.getElementById("defaultOpen").click();

let topright = document.getElementsByClassName("topright");
console.log(topright);

for (let i = 0; i < topright.length; i++) {
  topright[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

// //🤍section1 banner txt ani🤍
function linkLine() {
  let line = document.querySelector(".sec_bn .slide-scroll-txt");
  let lineL = document.querySelector(".sec_bn .slide-scroll-line_l");
  let lineR = document.querySelector(".sec_bn .slide-scroll-line_r");

  line.addEventListener("mouseover", () => {
    gsap.to(lineL, {
      scaleX: -3,
      transformOrigin: "right left",
      duration: 0.6,
      ease: "power4",
    });
  });

  line.addEventListener("mouseout", () => {
    gsap.to(lineL, {
      scaleX: 0,
      transformOrigin: "right left",
      duration: 0.6,
      ease: "power4",
    });
  });

  line.addEventListener("mouseover", () => {
    gsap.to(lineR, {
      scaleX: 3,
      transformOrigin: "right left",
      duration: 0.6,
      ease: "power4",
    });
  });

  line.addEventListener("mouseout", () => {
    gsap.to(lineR, {
      scaleX: 0,
      transformOrigin: "right left",
      duration: 0.6,
      ease: "power4",
    });
  });
}

function init() {
  linkLine();
}

init();

let spline = document.querySelector(".spline");

gsap
  .timeline({
    scrollTrigger: {
      trigger: spline,
      start: "top top",
      end: "80% bottom", //속도 반영할수 잇음
      scrub: 1,
      //scroller:"#main",
      pin: true,
      //markers: true,
    },
  })
  .to(spline, {
    xPercent: 0,
    duration: 0.2,
  })
  .to(spline, {
    xPercent: 200,
    yPercent: 200,
    autoAlpha: 0,
    delay: 1,
  })
  .to(spline, {
    PointerEvent: "none",
  });
  gsap.to(".mw_cont2", {
    scrollTrigger: {
      trigger: ".mw_cont1",
      start: "top 20%",
      end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
      pin: true,

    },
    opacity: 1,
  });
  


//////////////////////////////////////////////////////

//🤍page3 - text ani (글자 쪼개기)🤍

let clutter = "";

//.textContent --> 텍스트콘텐츠에 가져온다
let page3_h2 = document.querySelector("#page3>h2").textContent.split("");
page3_h2.forEach((dets) => {
  clutter += `<span>${dets}</span>`;
  document.querySelector("#page3>h2").innerHTML = clutter;
});

gsap.to("#page3>h2>span", {
  scrollTrigger: {
    trigger: "#page3>h2>span",
    start: "top bottom",
    //start: "0% 100%", 같은말임
    end: "bottom top",
    //scroller: "#main",
    scrub: 0.5,
  },
  stagger: 0.2,
  color: "#fff",
});

gsap.to("#page3>.background", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    //start: "0% 100%", 같은말임
    end: "bottom bottom",
    //scroller: "#main",
    scrub: true,
  },
  opacity: 0,
});

//////////////////////////////////////////////////////

//🤍 page4 - canvas🤍
function canvas() {
  const canvas = document.querySelector("#page4>canvas");
  const context = canvas.getContext("2d"); //canvas사용의 !필수!

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `./3d_img/beauty/ezgif-frame-001.jpg
      ./3d_img/beauty/ezgif-frame-002.jpg
      ./3d_img/beauty/ezgif-frame-003.jpg
      ./3d_img/beauty/ezgif-frame-004.jpg
      ./3d_img/beauty/ezgif-frame-005.jpg
      ./3d_img/beauty/ezgif-frame-006.jpg
      ./3d_img/beauty/ezgif-frame-007.jpg
      ./3d_img/beauty/ezgif-frame-008.jpg
      ./3d_img/beauty/ezgif-frame-009.jpg
      ./3d_img/beauty/ezgif-frame-010.jpg
      ./3d_img/beauty/ezgif-frame-011.jpg
      ./3d_img/beauty/ezgif-frame-012.jpg
      ./3d_img/beauty/ezgif-frame-013.jpg
      ./3d_img/beauty/ezgif-frame-014.jpg
      ./3d_img/beauty/ezgif-frame-015.jpg
      ./3d_img/beauty/ezgif-frame-016.jpg
      ./3d_img/beauty/ezgif-frame-017.jpg
      ./3d_img/beauty/ezgif-frame-018.jpg
      ./3d_img/beauty/ezgif-frame-019.jpg
      ./3d_img/beauty/ezgif-frame-020.jpg
      ./3d_img/beauty/ezgif-frame-021.jpg
      ./3d_img/beauty/ezgif-frame-022.jpg
      ./3d_img/beauty/ezgif-frame-023.jpg
      ./3d_img/beauty/ezgif-frame-024.jpg
      ./3d_img/beauty/ezgif-frame-025.jpg
      ./3d_img/beauty/ezgif-frame-026.jpg
      ./3d_img/beauty/ezgif-frame-027.jpg
      ./3d_img/beauty/ezgif-frame-028.jpg
      ./3d_img/beauty/ezgif-frame-029.jpg
      ./3d_img/beauty/ezgif-frame-030.jpg
      ./3d_img/beauty/ezgif-frame-031.jpg
      ./3d_img/beauty/ezgif-frame-032.jpg
      ./3d_img/beauty/ezgif-frame-033.jpg
      ./3d_img/beauty/ezgif-frame-034.jpg
      ./3d_img/beauty/ezgif-frame-035.jpg
      ./3d_img/beauty/ezgif-frame-036.jpg
      ./3d_img/beauty/ezgif-frame-037.jpg
      ./3d_img/beauty/ezgif-frame-038.jpg
      ./3d_img/beauty/ezgif-frame-039.jpg
      ./3d_img/beauty/ezgif-frame-040.jpg
      ./3d_img/beauty/ezgif-frame-041.jpg
      ./3d_img/beauty/ezgif-frame-042.jpg
      ./3d_img/beauty/ezgif-frame-043.jpg
      ./3d_img/beauty/ezgif-frame-044.jpg
      ./3d_img/beauty/ezgif-frame-045.jpg
      ./3d_img/beauty/ezgif-frame-046.jpg
      ./3d_img/beauty/ezgif-frame-047.jpg
      ./3d_img/beauty/ezgif-frame-048.jpg
      ./3d_img/beauty/ezgif-frame-049.jpg
      ./3d_img/beauty/ezgif-frame-050.jpg
      ./3d_img/beauty/ezgif-frame-051.jpg
      ./3d_img/beauty/ezgif-frame-052.jpg
      ./3d_img/beauty/ezgif-frame-053.jpg
      ./3d_img/beauty/ezgif-frame-054.jpg
      ./3d_img/beauty/ezgif-frame-055.jpg
      ./3d_img/beauty/ezgif-frame-056.jpg
      ./3d_img/beauty/ezgif-frame-057.jpg
      ./3d_img/beauty/ezgif-frame-058.jpg
      ./3d_img/beauty/ezgif-frame-059.jpg
      ./3d_img/beauty/ezgif-frame-060.jpg
      ./3d_img/beauty/ezgif-frame-061.jpg
      ./3d_img/beauty/ezgif-frame-062.jpg
      ./3d_img/beauty/ezgif-frame-063.jpg
      ./3d_img/beauty/ezgif-frame-064.jpg
      ./3d_img/beauty/ezgif-frame-065.jpg
      ./3d_img/beauty/ezgif-frame-066.jpg
      ./3d_img/beauty/ezgif-frame-068.jpg
      ./3d_img/beauty/ezgif-frame-067.jpg
      ./3d_img/beauty/ezgif-frame-067.jpg
      ./3d_img/beauty/ezgif-frame-067.jpg
      ./3d_img/beauty/ezgif-frame-067.jpg
      `;

    return data.split("\n")[index]; //\n => 엔터를 기준으로 split 하는 약속된 기호
  }

  const frameCount = 71; //이미지 전체 갯수
  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image(); //img태그 만들기
    img.src = files(i);
    images.push(img);
  }
  //console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //마지막 프레임의 인덱스번호
    snap: "frame", //"frame" 단위로 값을 맞추겠다는 의미
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: "#page4",
      start: "top top",
      end: "250% top", //캔버스 높이의 6배만큼 도착하면 끝나게 만들겠다.
      //scroller: "#main",
    },
    onUpdate: render, //gsa.to가 변할때마다 업데이트가 일어남
  });
  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    console.log(hRatio + "," + vRatio);

    //let ratio = Math.max(10, 20); //20 /가장 큰수를 찾음

    //이미지 500*500 가정할때
    //넓은 화면일때 화면의 넓이가 1000*600이라고 가정
    //[hRatio=> 1000/500 =2] [vRatio=> 600/500 = 1.2] => [ratio = 2]

    //이미지 500*500 가정할때
    //좁은 화면일때 화면의 넓이가 400 * 600이라고 가정
    //[hRatio=> 400/500 = 0.8] [vRatio=> 600/500 = 1.2] => [ratio = 1.2]

    let ratio = Math.max(hRatio, vRatio); //20 /가장 큰수를 찾음
    let centerShift_x = (canvas.width - img.width * ratio) / 2;
    let centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height); //화면정리 ==> 하얀네모 도화지를 삭제
    //캔버스에 이미지를 표현할 때 drawImage(이미지, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    //sx, sy, swidth, sheight => 소스자체
    //dx, dy, dwidth, dheight --> 소스가 만들어진 후 설정
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  // gsap.to("#page>canvas",{
  //     scrollTrigger:{
  //         trigger: "#page>canvas", //애니메이션이 시작될 요소
  //         scroller:"#main", //스크롤이 발생하는 요소
  //         pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
  //         start: "top top", //애니메이션 시작
  //         end: "600% top", //애니메이션 끝
  //     }
  // })

  ScrollTrigger.create({
    trigger: "#page4", //애니메이션이 시작될 요소
    //scroller: "#main", //스크롤이 발생하는 요소
    pin: true, //스크롤 하는 동안 트리거요소를 고정시킴.
    start: "top top", //애니메이션 시작
    end: "250% top", //애니메이션 끝
  });
}
canvas();

//////////////////////////////////////////////////////

//🤍 page5 - start ani🤍

gsap.to("#page5", {
  scrollTrigger: {
    trigger: "#page5",
    start: "top top",
    end: "+=300 top", //바닥이 화면의 40%에 왔을때 끝나라
    // scroller: '#main',
    scrub: true,
  },
  opacity: 1,
});

/* gsap.from(".wp_area", {
  scale: 11,
  scrollTrigger: {
    trigger: ".wp_area",

    scrub: true,
  },
  onComplete: () => {
    gsap.to(".wp_area", {
      scale: 1,
      scrollTrigger: {
        trigger: ".wp_area",
        start: "top 50%",
        end: "bottom top",
        //markers: true,
      },

    });
  },
});

 */

//////////////////////////////////////////////////////

//🤍 page5 - text ani🤍
Splitting();

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rotatingHeader",
    start: "top center",
    end: "+=200 70%",
    scrub: 1,
    pin: true,
  },
});

function initHeaders() {
  let header = document.querySelector(".rotatingHeader");
  let original = header.querySelector("h1");
  let clone = original.cloneNode(true);
  header.appendChild(clone);
  gsap.set(clone, {
    yPercent: -100,
  });

  let originalSplit = document.querySelectorAll("h1:first-child .char");
  let cloneSplit = document.querySelectorAll("h1:last-child .char");

  gsap.set(cloneSplit, {
    rotationX: -90,
    opacity: 0,
    transformOrigin: "50% 50% -50",
  });

  tl.to(originalSplit, {
    duration: 0.4,
    rotationX: 90,
    stagger: 0.05,
    transformOrigin: "50% 50% -50",
  });

  tl.to(
    originalSplit,
    {
      duration: 0.4,
      opacity: 0,
      stagger: 0.05,
    },
    0
  );

  tl.to(
    cloneSplit,
    {
      duration: 0.05,
      stagger: 0.05,
      opacity: 1,
    },
    0.001
  );
  tl.to(
    cloneSplit,
    {
      duration: 0.4,
      rotationX: 0,
      stagger: 0.05,
    },
    0
  );
}

initHeaders();
//////////////////////////////////////////////////////

//🤍 page5 - lipstick scroll ani🤍
gsap.registerPlugin(ScrollTrigger)

let path1 = document.querySelector('#path');
let path1Length = path1.getTotalLength(); //path의 길이

//console.log(path1Length) //3865.77197265625 

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.txt-mg',
        start: 'top top',
        end: '50% bottom',
        scrub: 1,
        pin: true,
    },
    duration:1
})

// tl.to(path1, {
//     strokeDashoffset: 0
// }, 'plane')

tl.to('.lipstick', {
    offsetDistance: '100%',
}, 'plane')



//////////////////////////////////////////////////////
//🤍 page5 - ripple🤍

var ripple6 = new RippleEffect({
  parent: document.querySelector(".serve"),
  texture: "img/ripple-2.png",
  intensity: 1.0,
  strength: 0.1,
  waveSpeed: 0.003,
  hover: false,
});

document.querySelector(".serve").addEventListener("mouseenter", ripple6.stop);
document.querySelector(".serve").addEventListener("mouseleave", ripple6.start);



//////////////////////////////////////////////////////
//🤍 page5 - bottom ani🤍
function pgbottom() {

  gsap.to(".header__marq-wrapp", {
      scrollTrigger: {
          trigger: ".eventpage",
          start: 'top top',
          scrub: 1.9
      },
      xPercent: -50

  })

  gsap.to(".header__marq-star img", {
      scrollTrigger: {
          trigger: ".eventpage",
          start: 'top top',
          scrub: 1.9
      },
      rotate: 720

  })


}

pgbottom();


let gsapSq = document.querySelectorAll('.section-title__square')


gsapSq.forEach((gSq, i) => {
    let rotate = gsap.from(gSq, {
        duration: 3,
        rotation: 720
    })

    ScrollTrigger.create({
        trigger: gSq,
        animation: rotate,
        start: 'top bottom',
        scrub: 1.9
    })
})


//////////////////////////////////////////////////////
//🤍 page6 - text ani🤍

// let pTag1 = document.querySelector(".first-perallel");
let pTag2 = document.querySelector(".second-perallel");

// let textArr1 =
//   "Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior".split(
//     " "
//   );
//띄워쓰기 기준으로 잘라서 배열로 만든다
// console.log(textArr1);

let textArr2 =
  "Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior".split(" ");
//console.log(textArr2);

// let count1 = 0;
let count2 = 0;

// initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

function initTexts(element, textArray) {
  textArray.push(...textArray); //8개의 배열안의 아이템을 복사하여 다시 배열 뒤에 넣는다.
  //console.log("함수안" + textArray);
  for (let i = 0; i < textArray.length; i++) {
    //    &nbsp
    //    \u00A0   --> 자바스크립트의 공백을 나타냄
    element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`;
  }
}

/////////////////////////////
function animate() {
  // count1++;
  // console.log(count1)
  count2++;

  // count1 = marqueeText(count1, pTag1, 1);
  count2 = marqueeText(count2, pTag2, -1);

  window.requestAnimationFrame(animate);
  // setInterval--> 어떤 시간마다 할 일(오류가 많이나서 requestAnimationFrame로 대체사용)
}

function marqueeText(count, element, direction) {
  // .scrollHeight --> 보이지 않는 공간이라도 그 공간의 높이값을 불러낸다.
  // 보이지않는 공간일지라도 스크롤해서 확인할 수 있는 공간의 높이
  // .scrollWidth -->
  console.log("element.scrollWidth" + element.scrollWidth);
  console.log("count" + count);
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`;
  }

  element.style.transform = `translate(${count * direction}px,0)`;

  return count;
}

function scrollHandler() {
  count2 += 40;
}

animate();


window.addEventListener = function () {
};

window.addEventListener("scroll", scrollHandler());

//////////////////////////////////////////////////////
//🤍 page6 - clip-path 🤍

let video = document.querySelector(".main video"),
  videoWidth,
  videoHeight;

function setVideo() {
  videoWidth = video.offsetWidth;
  videoHeight = video.offsetHeight;
}
setVideo();
window.addEventListener("resize", setVideo);

let inset = { x: 20, y: 20, r: 50 };
let snap = gsap.utils.snap(10);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#page6",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin:true
    },
  })
  .fromTo(
    inset,
    {
      x: 20,
      y: 20,
      r: 50,
    },
    {
      duration: 0.5,
      x: 0,
      y: 0,
      r: 140,
      //onUpdate:()=>{}
      onUpdate() {
        video.style.clipPath = `inset(${(inset.x * videoWidth) / 200}px ${
          (inset.y * videoHeight) / 200
        }px round ${snap(inset.r)}px )`;
      },
    }
  );

//////////////////////////////////////////////////////
//🤍 page6 - text ani 🤍

gsap.to("#page6", {
  scrollTrigger: {
    trigger: "#page5",
    start: "center top",
    end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
    // scroller: '#main',
    scrub: true,
  },
  opacity: 1,
});

//////////////////////////////////////////////////////
//🤍 page7 - scroll ani 🤍


gsap.to("#page7", {
  scrollTrigger: {
    trigger: "#page7",
    start: "top top",
    end: 'bottom top', 
    scrub: true,
  },
  });
  

let slider = document.querySelector(".slider");
let slideWrapper = document.querySelector(".slider-wrapper");
let slides = document.querySelectorAll(".slide");

function updateScaleAnPosition() {
  slides.forEach((slide) => {
    let rect = slide.getBoundingClientRect();
    let centerPosition = (rect.left + rect.right) / 2;

    let distanceFromCenter = centerPosition;
    let scale;
    if (distanceFromCenter > 0) {
      scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
    } else {
      scale = Math.min(
        0.5,
        1 - Math.abs(distanceFromCenter) / window.innerWidth
      );
    }
    gsap.set(slide, { scale: scale });
  });
}
updateScaleAnPosition();

/* function updateScaleAnPosition() {
  slides.forEach((slide) => {
    let rect = slide.getBoundingClientRect();
    let centerPosition = (rect.left + rect.right) / 2;
    
    // Calculate the distance from the center of the viewport
    let distanceFromCenter = centerPosition - window.innerWidth / 2;

    let scale;
    if (distanceFromCenter > 0) {
      scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
    } else {
      scale = Math.min(
        0.5,
        1 - Math.abs(distanceFromCenter) / window.innerWidth
      );
    }
    gsap.set(slide, { scale: scale });
  });
}
 */

let horiz = gsap.to(slides,{
  xPercent:-97 * (slides.length - 1),
  scrollTrigger:{
      trigger:'.fashion',
      start:'top top',
      end:"+=3000",
      scrub:1,
      pin:true,
      onUpdate:()=>{updateScaleAnPosition()}

  }
})



//--------------------------------------------------------------------
//🤍 #page7 -컬러변경🤍

//--------------------------------------------------------------------
//🤍 #page8 -🤍

gsap.to("#page8", {
  scrollTrigger: {
    trigger: "#page8",
    start: "top top",
    pin: true,
    scrub: true,
  },
  opacity: 1,
});
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});


