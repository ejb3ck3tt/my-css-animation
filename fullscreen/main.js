var elem0 = document.getElementById("ourVideo0");
var elem1 = document.getElementById("ourVideo1");
var elem2 = document.getElementById("ourVideo2");
var elem3 = document.getElementById("ourVideo3");
var elem4 = document.getElementById("ourVideo4");
var elem5 = document.getElementById("ourVideo5");

function fullscreenVideo0() {
  if (elem0.requestFullscreen) {
    elem0.requestFullscreen();
  } else if (elem0.webkitRequestFullscreen) {
    /* Safari */
    elem0.webkitRequestFullscreen();
  } else if (elem0.msRequestFullscreen) {
    /* IE11 */
    elem0.msRequestFullscreen();
  }
}

function fullscreenVideo1() {
  if (elem1.requestFullscreen) {
    elem1.requestFullscreen();
  } else if (elem1.webkitRequestFullscreen) {
    /* Safari */
    elem1.webkitRequestFullscreen();
  } else if (elem1.msRequestFullscreen) {
    /* IE11 */
    elem1.msRequestFullscreen();
  }
}

function fullscreenVideo2() {
  if (elem2.requestFullscreen) {
    elem2.requestFullscreen();
  } else if (elem2.webkitRequestFullscreen) {
    /* Safari */
    elem2.webkitRequestFullscreen();
  } else if (elem2.msRequestFullscreen) {
    /* IE11 */
    elem2.msRequestFullscreen();
  }
}

function fullscreenVideo3() {
  if (elem3.requestFullscreen) {
    elem3.requestFullscreen();
  } else if (elem3.webkitRequestFullscreen) {
    /* Safari */
    elem3.webkitRequestFullscreen();
  } else if (elem3.msRequestFullscreen) {
    /* IE11 */
    elem3.msRequestFullscreen();
  }
}

function fullscreenVideo4() {
  if (elem4.requestFullscreen) {
    elem4.requestFullscreen();
  } else if (elem4.webkitRequestFullscreen) {
    /* Safari */
    elem4.webkitRequestFullscreen();
  } else if (elem4.msRequestFullscreen) {
    /* IE11 */
    elem4.msRequestFullscreen();
  }
}

function fullscreenVideo5() {
  if (elem5.requestFullscreen) {
    elem5.requestFullscreen();
  } else if (elem5.webkitRequestFullscreen) {
    /* Safari */
    elem5.webkitRequestFullscreen();
  } else if (elem5.msRequestFullscreen) {
    /* IE11 */
    elem5.msRequestFullscreen();
  }
}

// const playbtn = document.getElementById('play-btn');
// // const vid = document.getElementsByTagName(`video`);
// var vid = document.getElementById("myVideo");

// function playVideo() {
//   vid.play();
// }

// function pauseVid() {
//   vid.pause();
// }

// function openFullscreen(event) {
//   var elem = event.target.value
//   const playBtn = document.querySelectorAll("play-btn");
//   const ourVideos = document.querySelectorAll(".myVideo");

//   for (let i = 0; i < ourVideos.length; i++) {
//     if (ourVideos[i] === elem || elem === "0") {
//       console.log('true')
//     }
//   }
// }


// var elements = document.querySelectorAll('.play-btn');
// console.log(elements)

// var ourVideo0 = document.getElementById('ourVideo0');
// var ourVideo1 = document.getElementById('ourVideo1');

// Array.from(elements).forEach(function (ele) {
//   ele.addEventListener("click", function (ele) {
//     const eleValue = ele.target.value;
//     console.log("value", eleValue)

//     if (eleValue === undefined || eleValue === 0) {
//       if (ourVideo0.requestFullscreen) {
//         ourVideo0.requestFullscreen();
//       }
//       // openFullscreen();
//     } else if (eleValue === 1) {
//       if (ourVideo1.requestFullscreen) {
//         ourVideo1.requestFullscreen();
//       }
//     }
//   })
// });

// function openFullscreen(eleValue) {
//   console.log("openScreen", eleValue)
//   var ourVideos = document.querySelectorAll('.ourVideos');
//   [...ourVideos, 0].forEach(function (ourVid) {
//     if (ourVid.requestFullscreen) {
//       ourVid.requestFullscreen();
//     } else if (ourVid.webkitRequestFullscreen) {
//       /* Safari */
//       ourVid.webkitRequestFullscreen();
//     } else if (ourVid.msRequestFullscreen) {
//       /* IE11 */
//       ourVid.msRequestFullscreen();
//     } else {
//       console.log('error')
//     }
//   })
// }

// // Array.from(ourVideos).forEach(function (ourVid) {
// //   console.log(ourVid)[0]
// //   const playVid = ourVid[0];
// //   console.log("playVid", playVid)
// //   // if (ourVid.requestFullscreen && ele.value === ourVid.value) {
// //   //   ourVid.requestFullscreen();
// //   // }
// // })