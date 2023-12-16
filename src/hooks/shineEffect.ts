const useFabricBoxes = (colorBoxesLength: number) => {
  const bgAnimation = document.getElementById("bg-charts");

  for (let i = 0; i < colorBoxesLength; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");

    // Agrega la clase de animación según la mitad izquierda o derecha de los elementos
    if (i < colorBoxesLength / 2) {
      colorBox.classList.add("slide-in-right");
    } else {
      colorBox.classList.add("slide-in-left");
    }

    bgAnimation?.appendChild(colorBox);
  }
};

export default useFabricBoxes;
