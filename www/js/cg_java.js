var polynomArray = [0.0, 0.0, 0.0, 0.0, 0.0];
var polynomArrayWind = [0.0, 0.0, 0.0, 0.0, 0.0];

function  generatePolynomVector502()
{
        polynomArray[0] = 2.356143206190441e-11;
        polynomArray[1] = -5.129739989750741e-09;
        polynomArray[2] = 5.975498099177460e-05;
        polynomArray[3] = 0.096501823163562;
        polynomArray[4] = 0.142376160990732;
}

function  generatePolynomVector502WindDrift()
{
        polynomArrayWind[0] = -0.000000000000114;
        polynomArrayWind[1] = 0.000000000945537;
        polynomArrayWind[2] = 0.000001195042870;
        polynomArrayWind[3] = 0.000119028236425;
        polynomArrayWind[4] = -0.007670278637770;
}

// 751
function  generatePolynomVector751()
{
        polynomArray[0] = -3.798790163038278e-11;
        polynomArray[1] = 1.259006813320964e-07;
        polynomArray[2] = -1.382848032077384e-04;
        polynomArray[3] = 0.114551605365813;
        polynomArray[4] = 0.202631578947401;
}

function  generatePolynomVector751WindDrift()
{
        polynomArrayWind[0] = -0.000000000002568;
        polynomArrayWind[1] = 0.000000007039676;
        polynomArrayWind[2] = -0.000005935646086;
        polynomArrayWind[3] = 0.000282746980458;
        polynomArrayWind[4] = -0.011843395252836;
}

// 469
function  generatePolynomVector469()
{
        polynomArray[0] = 4.752193795575646e-12;
        polynomArray[1] = 9.868039512079360e-10;
        polynomArray[2] = 2.242972604888713e-05;
        polynomArray[3] = 0.087785959996930;
        polynomArray[4] = -0.079426129426086;
}

function  generatePolynomVector469WindDrift()
{
        polynomArrayWind[0] = -0.000000000000146;
        polynomArrayWind[1] = 0.000000001112368;
        polynomArrayWind[2] = -0.000000687559989;
        polynomArrayWind[3] = 0.000619275332511;
        polynomArrayWind[4] = -0.037662337662338;
}

// 751 new
function  generatePolynomVector751New()
{
        polynomArray[0] = -0.000000000039404;
        polynomArray[1] = 0.000000128429775;
        polynomArray[2] = -0.000137321968677;
        polynomArray[3] = 0.112472504269372;
        polynomArray[4] = 0.206540247678052;
}

function  generatePolynomVector751NewWindDrift()
{
        polynomArrayWind[0] = -2.50478264948582e-12;
        polynomArrayWind[1] = 6.73306969275467e-09;
        polynomArrayWind[2] = -5.49478451563689e-06;
        polynomArrayWind[3] = 9.33339318322034e-05;
        polynomArrayWind[4] = 1.41898864822642e-05;
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
function calcWindDrift(wind)
{
  
  var sum = 0.0;
  var i;
  
  for (i=0; i<4; i++)
  {
    //sum = (sum + polynomArray[i])) * distance;
    sum = (sum + polynomArrayWind[i]);
    sum = sum * wind;
  }
  sum += polynomArrayWind[4];
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

function updateWindCalc(val) 
{
  document.getElementById('windDrift').value=roundOf(calcWindDrift(document.getElementById('distanceID').value)*val,2); 
  
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
    generatePolynomVector502()
    generatePolynomVector502WindDrift()
    break;
    case '751':
    generatePolynomVector751()
    generatePolynomVector751WindDrift()
    break;
    case '751 (new)':
    generatePolynomVector751New()
    generatePolynomVector751NewWindDrift()
    break;
    case '469':
    generatePolynomVector469()
    generatePolynomVector469WindDrift()
    break;
    case '551':
    generatePolynomVector551()
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

