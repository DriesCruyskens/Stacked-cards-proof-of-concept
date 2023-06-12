import { animate, scroll, inView, ScrollOffset } from "motion";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const sections = document.querySelectorAll("section");
sections.forEach((section, index0) => {
  const index = index0 + 1;
  const reverseIndex = sections.length - index0;
  const reverseIndex0 = sections.length - index;
  section.style.paddingTop = `calc((100vh / ${
    sections.length * 3
  }) * ${index0})`;

  // scroll(
  //   ({ y }) => {
  //     section.style.transform = `scale(${1 - y.progress / 3})`;
  //     //console.log(section.style.transform, y.offset)
  //   },
  //   {
  //     target: document.querySelector("main"),
  //     offset: [
  //       `${(index0 / sections.length) * 100}%`,
  //       `${(index / sections.length) * 100}%`
  //     ]
  //   }
  // );

  scroll(
    animate(section, {
      scale: [1, 1 - 0.1 * reverseIndex]
    })
    // {
    //   //target: document.querySelector("main"),
    //   offset: [
    //     `${(index0 / sections.length) * 100}%`,
    //     `${(index / sections.length) * 100}%`
    //   ]
    // }
  );
});
