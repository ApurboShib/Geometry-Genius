/*

objective : get base, height of triangle. calculate the area by using the formula.
 1. get base value of the triangle.
 2. added an id in the base input feild.
 3. use getElementById to access the input feild.
 4. get value from the input feild. (nomally we received the value as a string).
 5. convert the string value to a number to perform the operations.


*/

// console.log('connected');
function calculateTriangleArea () {
    // get triangle base value.

    // console.log('hello from inside the function');
    const triangleBaseInput = document.getElementById('triangle-base'); // base ta niye ashlam 
    const triangleBaseText = triangleBaseInput.value; // input eh ja value enter kora hbe seta access korlam.
    const base = parseFloat(triangleBaseText); // convert the sring to flout value.
    //console.log(triangleBaseText);
    // check the datatype.
    // console.log(typeof(triangleBaseText));
    // console.log(typeof(base));

    // get triangle height.
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // calculate the area of triangle.

    const area = 0.5 * base * height;
    console.log('Area of triangle is : ',area);

}