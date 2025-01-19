function AreaOfPentagon() {

    // get the perimeter.
    const pentagonPerimeter = document.getElementById('pentagon-perimeter');
    const pentagonText = pentagonPerimeter.value;
    const perimeter = parseFloat(pentagonText);

    const pentagonApthom = document.getElementById('pentagon-apthom');
    const pentagonApthomText = pentagonApthom.value;
    const apthom = parseFloat(pentagonApthomText);

    // calculate the area.

    const area = 0.5 * perimeter * apthom;
    console.log('Area of pentagon is ', area);

    const display = document.getElementById('pentagon-area');
    display.innerText = area;

}