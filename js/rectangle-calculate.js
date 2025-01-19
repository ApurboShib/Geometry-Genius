// console.log('retange is here');

function AreaOfRectangle () {
    // get the length.
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleText = rectangleLengthInput.value;
    const length = parseFloat(rectangleText);

    // get the width.

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // calculate the area of rectangle.

    const area = length * width;
    console.log('Area of Rectangle is : ', area);
    
    // display the area.
    const display = document.getElementById('rectangle-area');
    display.innerText = area;
}
