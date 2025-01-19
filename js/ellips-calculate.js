function AreaOfEllips () {
    const ellipsOfA = document.getElementById('ellips-A');
    const A_txt = ellipsOfA.value;
    const A = parseFloat(A_txt);

    const ellipsB = document.getElementById('ellips-B');
    const B_txt = ellipsB.value;
    const B = parseFloat(B_txt);

    const area = 3.1416 * A * B;
    console.log('Area of Ellips is : ', area);

    const display = document.getElementById('ellips-area');
    display.innerText = area;
}