

function AreaOfRhombus () {

    // get the base.
    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText);

    // get the height.

    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height = parseFloat(rhombusHeightText);

    // area of rhombus.

    const area = 0.5 * base * height;
    console.log('Area of Rhombus is : ', area);

    // display the area.

    const display = document.getElementById('rhombus-area');
    display.innerText = area;
}