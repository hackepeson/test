var polynomArray = [0.0, 0.0, 0.0, 0.0, 0.0];

function  generatePolynomVector502()
{
        polynomArray[0] = 2.356143206190441e-11;
        polynomArray[1] = -5.129739989750741e-09;
        polynomArray[2] = 5.975498099177460e-05;
        polynomArray[3] = 0.096501823163562;
        polynomArray[4] = 0.142376160990732;
}

function  generatePolynomVector751()
{
        polynomArray[0] = -3.798790163038278e-11;
        polynomArray[1] = 1.259006813320964e-07;
        polynomArray[2] = -1.382848032077384e-04;
        polynomArray[3] = 0.114551605365813;
        polynomArray[4] = 0.202631578947401;
}

function  generatePolynomVector469()
{
        polynomArray[0] = 4.752193795575646e-12;
        polynomArray[1] = 9.868039512079360e-10;
        polynomArray[2] = 2.242972604888713e-05;
        polynomArray[3] = 0.087785959996930;
        polynomArray[4] = -0.079426129426086;
}

function  generatePolynomVector551()
{
        polynomArray[0] = -1.03260359687869e-11;
        polynomArray[1] = 5.26150589214247e-08;
        polynomArray[2] = -6.65447294998705e-05;
        polynomArray[3] = 0.0800776028218649;
        polynomArray[4] = -0.022884416924653;
}



function calcElevation(distance)
{
  
  var sum = 0.0;
  var i;
  
  for (i=0; i<4; i++)
  {
    //sum = (sum + polynomArray[i])) * distance;
    sum = (sum + polynomArray[i]);
    sum = sum * distance;
  }
  sum += polynomArray[4];
  return sum;
}    

function roundOf(n, p) {
    const n1 = n * Math.pow(10, p + 1);
    const n2 = Math.floor(n1 / 10);
    if (n1 >= (n2 * 10 + 5)) 
    {
        return (n2 + 1) / Math.pow(10, p);
    }
    return n2 / Math.pow(10, p);
}


function Calc(distance, ammo) 
{
/*  
   document.write("Aiming")
   document.write("<HR>")
   document.write("Distance : " + distance.value)
   document.write("<BR>")
   document.write("Ammo type : " + ammo.value)
   document.write("<HR>")
*/   
   
   var ammoAvailable = 1;
   switch (ammo.value)
   {
   case '502':
    generatePolynomVector502();
    break;
    case '751':
    generatePolynomVector751();
    break;
    case '469':
    generatePolynomVector469();
    break;
    case '551':
    generatePolynomVector551();
    break;
    default :     
    ammoAvailable = 0;
    
   }
   
   var elevation = roundOf(calcElevation(distance.value), 1);
   if (ammoAvailable == 1)
   {
    //document.write("Elevation mRad : ", elevation)
    //alert("Aim at " + elevation + " mRad")
    document.getElementById("elevationID").innerHTML = "Elevation [mRad] : " + elevation;
   }
   else
   {
     //document.write("Ammo type not implemented");
     alert("Ammo type NOT implemented")
   }
   
   return 1;
}

