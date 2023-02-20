function myfun()
{
	
	var b1=document.getElementById('b1').value;
	var b2=document.getElementById('b2').value;
	var b3=document.getElementById('b3').value;
	var b4=document.getElementById('b4').value;
	var b5=document.getElementById('b5').value;
	var b6=document.getElementById('b6').value;
	var b7=document.getElementById('b7').value;
	var b8=document.getElementById('b8').value;
	var b9=document.getElementById('b9').value;
	

 if(b1=="X"&&b2=="X"&&b3=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 	document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";
    
 }
 else if(b1=="X"&&b4=="X"&&b7=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 	document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b1=="X"&&b5=="X"&&b9=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b2=="X"&&b5=="X"&&b8=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b3=="X"&&b6=="X"&&b9=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b2").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b4=="X"&&b5=="X"&&b6=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b7=="X"&&b8=="X"&&b9=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b7=="X"&&b5=="X"&&b3=="X")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if(b1=="O"&&b2=="O"&&b3=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b1=="O"&&b4=="O"&&b7=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b1=="O"&&b5=="O"&&b9=="O")
 {
 	alert("player O Is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b2=="O"&&b5=="O"&&b8=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b3=="O"&&b6=="O"&&b9=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b2").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b4=="O"&&b5=="O"&&b6=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 	document.getElementById("b7").disabled=true;
 	document.getElementById("b8").disabled=true;
 	document.getElementById("b9").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }
 else if(b7=="O"&&b8=="O"&&b9=="O")
 {
 	alert("player O is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="O PLAYER IS WINNER";

 }else if(b7=="O"&&b5=="O"&&b3=="O")
 {
 	alert("player x is winner")
 	document.getElementById("b4").disabled=true;
 	document.getElementById("b5").disabled=true;
 	document.getElementById("b6").disabled=true;
 	document.getElementById("b1").disabled=true;
 	document.getElementById("b2").disabled=true;
 	document.getElementById("b3").disabled=true;
 		document.getElementById("rslt").innerHTML="X PLAYER IS WINNER";

 }
 else if((b1=="X" ||b1=="O") &&(b2=="X" ||b2=="O") &&(b3=="X" ||b3=="O") &&(b4=="X" ||b4=="O") &&(b5=="X" ||b5=="O") &&(b6=="X" ||b6=="O") &&(b7=="X" ||b7=="O") &&(b8=="X" ||b8=="O") &&(b9=="X" ||b9=="O"))
 {
 	document.getElementById("rslt").innerHTML="match draw!!!"
 }
 else
 {
 	if(flag==1)
 	{
 		document.getElementById("rslt").innerHTML="NOW X PLAYER TURN";
 	}
 	else
 	{
 		document.getElementById("rslt").innerHTML="NOW O PLAYER TURN";
       
 	}
 }
}
function reset()
{ 
	location.reload();
}
var flag=1;
function b1()
{
	if(flag==1)
	{
		document.getElementById("b1").value="X";
		document.getElementById("b1").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b1").value="O";
		document.getElementById("b1").disabled=true;	
		flag=1;
	}
}
function b2()
{
	if(flag==1)
	{
		document.getElementById("b2").value="X";
		document.getElementById("b2").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b2").value="O";
		document.getElementById("b2").disabled=true;	
		flag=1;
	}
}
function b3()
{
	if(flag==1)
	{
		document.getElementById("b3").value="X";
		document.getElementById("b3").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b3").value="O";
		document.getElementById("b3").disabled=true;	
		flag=1;
	}
}
function b4()
{
	if(flag==1)
	{
		document.getElementById("b4").value="X";
		document.getElementById("b4").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b4").value="O";
		document.getElementById("b4").disabled=true;	
		flag=1;
	}
}
function b5()
{
	if(flag==1)
	{
		document.getElementById("b5").value="X";
		document.getElementById("b5").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b5").value="O";
		document.getElementById("b5").disabled=true;	
		flag=1;
	}
}
function b6()
{
	if(flag==1)
	{
		document.getElementById("b6").value="X";
		document.getElementById("b6").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b6").value="O";
		document.getElementById("b6").disabled=true;	
		flag=1;
	}
}
function b7()
{
	if(flag==1)
	{
		document.getElementById("b7").value="X";
		document.getElementById("b7").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b7").value="O";
		document.getElementById("b7").disabled=true;	
		flag=1;
	}
}
function b8()
{
	if(flag==1)
	{
		document.getElementById("b8").value="X";
		document.getElementById("b8").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b8").value="O";
		document.getElementById("b8").disabled=true;	
		flag=1;
	}
}
function b9()
{
	if(flag==1)
	{
		document.getElementById("b9").value="X";
		document.getElementById("b9").disabled=true;
		flag=0;
	}
	else
	{
	    document.getElementById("b9").value="O";
		document.getElementById("b9").disabled=true;	
		flag=1;
	}
}
