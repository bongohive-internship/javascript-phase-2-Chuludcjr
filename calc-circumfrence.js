// calcCircumfrence function should be here
// The formula for finding the circumference

function calcCircumfrence(radius) {
    /*
    A value can be assigned as follows to execute in the function.
    var radius = 5;
    */
    var circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);
  
    //radius squared you multiply by itself.
    var area = Math.PI * radius*radius; 
    console.log("The area is " + area);
  }

  calcCircumfrence();
