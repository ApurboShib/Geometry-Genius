// consol.log('hello from paralellogram);

function AreaOfParallegram () {

    // get the base.
    const paralellogramBaseInput = document.getElementById('parallelogram-base');
    const paralellogramText = paralellogramBaseInput.value;
    const base = parseFloat(paralellogramText);

    // get the height.

    const paralellogramHeightInput = document.getElementById('parallelogram-height');
    const paralellogramHeightText = paralellogramHeightInput.value;
    const height = parseFloat(paralellogramHeightText);

    // area of paralleogram.

    const area = base * height;
    console.log('Area of paralellogram is : ', area);

    // display the area.

    const display = document.getElementById('parallelogram-area');
    display.innerText = area;
}