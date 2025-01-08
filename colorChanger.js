const pageColor = document.getElementsByTagName("body");
const colorContainer = document.querySelector("#wrapper");


const colors = [
  "#272855",
  "#344e41",
  "#e63946",
  "#450920",
  "#8338ec",
  "#fb8500",
  "#52154E",
  "#111344",
];
const predefinedClasses = [
  "bg-[#272855]",
  "bg-[#344e41]",
  "bg-[#e63946]",
  "bg-[#450920]",
  "bg-[#8338ec]",
  "bg-[#fb8500]",
  "bg-[#52154E]",
  "bg-[#111344]",
];
predefinedClasses.forEach((bgClass, index) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<span class="color-dp ${bgClass}" ></span>
    <h2 class="title">${colors[index]}</h2>`;
  colorContainer.appendChild(newDiv);
});

const singleColor = document.querySelectorAll(".color-dp");

singleColor.forEach((color, index) => {
  color.addEventListener("click", (event) => {
    pageColor[0].className = `transition-all duration-300 text-white bg-[${colors[index]}]`;
  });
});
