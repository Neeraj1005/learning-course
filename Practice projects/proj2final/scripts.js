const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(red);
// console.log(window.getComputedStyle(red).backgroundColor);

const getRGB = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
}
// const color = getRGB(violet)

// violet.addEventListener('click', () => {
//   center.style.background = color;
// });


const getSelectedColors = (colorElementName, colorname) => {

  colorElementName.addEventListener("mouseover", () => {
    center.style.background = colorname;
    colorElementName.innerHTML = colorname;
  });

  colorElementName.addEventListener("mouseleave", () => {
    center.style.background = 'none';
    colorElementName.innerHTML = '';
  });

};


getSelectedColors(red, getRGB(red));
getSelectedColors(cyan, getRGB(cyan));
getSelectedColors(violet, getRGB(violet));
getSelectedColors(orange, getRGB(orange));
getSelectedColors(pink, getRGB(pink));


