//header

/*
let underlinks = document.querySelectorAll(".headerlink")

underlinks.forEach(link => {
    link.addEventListener('click',function (event) {
        event.preventDefault
    })
})
*/

let underlinks = document.querySelectorAll(".headerlink");

/*   
    underlinks[3].addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    underlinks[2].addEventListener('click', function() {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    });
    underlinks[1].addEventListener('click', function() {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth'
        });
    });
    underlinks[0].addEventListener('click', function() {
        window.scrollTo({
            top: 3000,
            behavior: 'smooth'
        });
    });
*/
//메뉴이동 for문으로 함축하기
for (let w = 0; w < underlinks.length; w++) {
  underlinks[w].addEventListener("click", function () {
    window.scrollTo({
      top: 3000 - 1000 * w,
      behavior: "smooth",
    });
  });
}
//visual

let liV = document.querySelectorAll(".li_img"),
  slideCount = document.querySelectorAll(".li_img").length,
  now = 0, //현재갯수
  timer;

function goSlide(num) {
  liV[now].style.opacity = 0;
  liV[num].style.opacity = 1;
  now = num;
}

function opacityV() {
  if (now !== slideCount - 1) {
    goSlide(now + 1);
  } else {
    goSlide(0);
  }
}

function start() {
  timer = setInterval(opacityV, 3000);
}

start();

//container
let con1 = document.querySelector(".con1");
let con1Img = document.querySelector(".img_over");
let con1Text = document.querySelector(".c_text");
let con2Text = document.querySelectorAll(".c2_text");
let con2TextCount = document.querySelectorAll(".c2_text b");
//console.log(con2TextCount.length)
let con3Img = document.querySelectorAll(".con3 li");
let under = document.querySelectorAll(".under");
let go = document.querySelector(".arrow");
let wrap = null;
let wrap2 = null;
let wrap3 = null;
let countText = 1800;
let countText2 = 0;
let countText3 = 0;
let footer = document.querySelector(".foot");

//숫자올리기 함수
function addCount() {
  countText++;

  if (countText > 2000) {
    clearInterval(wrap);
  } else {
    con2TextCount[0].innerText = countText;
  }
}

function addCount2() {
  countText2++;

  if (countText2 > 0) {
    //오르고싶은 만큼 입력
    clearInterval(wrap2);
  } else {
    con2TextCount[1].innerText = countText2;
  }
}

function addCount3() {
  countText3++;

  if (countText3 > 6) {
    clearInterval(wrap3);
  } else {
    con2TextCount[2].innerText = countText3;
  }
}

window.addEventListener("scroll", function () {
  let howmany = window.scrollY;

  console.log(howmany);

  if (howmany < 100) {
    under[3].style.textDecoration = "underline"; //스크롤시 메뉴 영역별 언더라인
    under[2].style.textDecoration = "none";
    under[1].style.textDecoration = "none";
    under[0].style.textDecoration = "none";
  }
  if (howmany > 400) {
    con1.style.opacity = "100%";
    con1Img.style.transform = "translateX(100px)";
    con1Img.style.transition = "1s";
    con1.style.transition = "1s";
    con1Text.style.display = "block";

    under[3].style.textDecoration = "none";
    under[2].style.textDecoration = "underline";
    under[1].style.textDecoration = "none";
    under[0].style.textDecoration = "none";
  }

  if (howmany > 1300) {
    under[3].style.textDecoration = "none";
    under[2].style.textDecoration = "none";
    under[1].style.textDecoration = "underline";
    under[0].style.textDecoration = "none";
  }

  if (howmany > 1100 && wrap === null) {
    con2Text[0].style.display = "block";

    wrap = setInterval(addCount, 5); //숫자올리기함수 호출
  }

  if (howmany > 1600 && wrap2 === null) {
    con2Text[1].style.display = "block";

    wrap2 = setInterval(addCount2, 300); //숫자올리기함수 호출
  }

  if (howmany > 1900 && wrap3 === null) {
    con2Text[2].style.display = "block";

    wrap3 = setInterval(addCount3, 100); //숫자올리기함수 호출
  }
  if (howmany > 2600) {
    under[3].style.textDecoration = "none";
    under[2].style.textDecoration = "none";
    under[1].style.textDecoration = "none";
    under[0].style.textDecoration = "underline";
  }

  if (howmany > 2600) {
    footer.style.display = "flex";
    footer.style.transform = "translateY(0px)";
    footer.style.opacity = "100%";
    footer.style.transition = "1s";
  } else if (howmany < 2600) {
    footer.style.display = "flex";
    footer.style.transform = "translateY(200px)";
    footer.style.opacity = "0%";
    footer.style.transition = "1s";
  }

  if (howmany > 2100) {
    for (let i = 0; i <= con3Img.length; i++) {
      con3Img[i].style.display = "block";

      con3Img[i].style.animationDelay = `${i * 0.3 + "s"}`;
    } //딜레이 순차별 적용
  }
});

//footer
let fam = document.querySelector(".famC");
let familyLi = document.querySelector(".family");
let overfam = document.querySelector(".overfam ul");

let count = 0;

fam.addEventListener("click", function () {
  if (count == 0) {
    overfam.style.transform = "translateY(0px)";
    overfam.style.transition = "1s";
    count += 1;
  } else {
    overfam.style.transform = "translateY(500px)";
    overfam.style.transition = "1s";
    count = 0;
  }
});

//팝

let close = document.querySelector(".close");
let open = document.querySelector(".open");
let pop = document.querySelector("#pop");
let ul = document.querySelector("#pop ul");
let font = document.querySelectorAll(".smallfont");

open.addEventListener("click", function () {
  pop.style.left = "0%";
  pop.style.transition = "1s";
  ul.style.display = "block";
  pop.style.opacity = "100%";
});
close.addEventListener("click", function () {
  pop.style.opacity = "0%";

  setTimeout(function () {
    pop.style.left = "-100%";
  }, 1000);

  ul.style.display = "none";
});

let pic_before = document.querySelector(".pic_img");
let pic_after = document.querySelector(".img_hover");

let pic_before2 = document.querySelector(".pic_img2");
let pic_after2 = document.querySelector(".img_hover2");

pic_before.addEventListener("mouseover", function () {
  pic_before.style.opacity = "0";
  pic_before.style.transition = "0.5s";
  pic_after.style.transition = "0.5s";
  pic_before.style.scale = "calc(0.8)";
  pic_after.style.scale = "calc(0.8)";
});

pic_before.addEventListener("mouseleave", function () {
  pic_before.style.opacity = "1";

  pic_before.style.scale = "calc(1)";
  pic_after.style.scale = "calc(1)";
});

pic_before2.addEventListener("mouseover", function () {
  pic_before2.style.opacity = "0";
  pic_after2.style.opacity = "1";
  pic_before2.style.transition = "0.5s";
  pic_after2.style.transition = "0.5s";
  pic_before2.style.scale = "calc(0.8)";
  pic_after2.style.scale = "calc(0.8)";
});

pic_before2.addEventListener("mouseleave", function () {
  pic_before2.style.opacity = "1";
  pic_after2.style.opacity = "0";

  pic_before2.style.scale = "calc(1)";
  pic_after2.style.scale = "calc(1)";
});
