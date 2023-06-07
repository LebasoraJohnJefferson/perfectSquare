var cell=[];
var empty=0;
var tempt=0;
let holduserInput = "";
var table = document.getElementById('tables');
var resetBtn = document.getElementById('reset');
var submitBtn = document.getElementById('submit');


function getNumber(){
	if (submitBtn.disabled==false){
	let userInput=document.getElementById("number").value;
	let x=Math.round(userInput/2)-1;
	let y = 0;
	if (userInput%2===1){
		let i=userInput;
		let j=userInput;
		
			
		
				tableWithEmptyCell(x,y,userInput);
				for (let i = 0 ; i < userInput ; i++){
					var row = tables.insertRow(i);
					for (let j = 0 ; j < userInput ; j++){
						let box=row.insertCell(j);
						box.innerHTML=cell[i][j];
					}
				}submitBtn.disabled=true;
				number.disabled=true;
			
			
			
		}else{
			alert("You Input an Even Number Or Missing Input");
	}
}}

function tableWithEmptyCell(x,y,userInput){
	// table
	let count=1;
	let holdX=x;
	let holdY=y;
	for (let i = 0 ; i < userInput ; i++){
		cell[i]=[]
		for (let j = 0 ; j < userInput ; j++){
			cell[i][j]=empty;	
		}
	}
	// logic
	do{
		if (cell[y][x]===empty){
		cell[y][x]=count;
		}
		else if(cell[y][x] !=empty){
			holdY+=1;
			if (holdY>userInput-1){
				holdY=0;
			}
			y=holdY;
			x=holdX;
			cell[y][x]=count;
		}
		holdX=x;
		holdY=y;
		x-=1;
		y-=1;
		
		if (x<0){
			x=userInput-1;
		}if (y<0){
			y=userInput-1;
		}
		count++;
	 }while(count<userInput*userInput+1);
	 resetBtn.disabled=false;
}



function clearNumber(){
	userInput=document.getElementById("number").value;
	if(resetBtn.disabled==false){
		for (let i = 0 ; i < userInput ; i++){
				table.deleteRow(0);
		}submitBtn.disabled=false;
		number.disabled=false;
	}
	resetBtn.disabled=true;
}