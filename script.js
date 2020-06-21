let randomNum = [];
let id = 1;
let score = 0;
gameStart();

function gameStart(){
    creatRandomNum();

    let cols = document.querySelectorAll('.col');
   // console.log(cols);
   cols.forEach(element => {
      // console.log(id);
       element.innerHTML=id;
       element.id= id++;

      
       element.onclick = function() {
        showID(this.id);
    }
    

    element.setAttribute("data-value", "0");


    console.log(element);
      
   });



}




function showID(id) {
    // console.log(id);
    // console.log(typeof id);

    let TempId = parseInt(id);
 let col = document.getElementById(id);
 let data_id =col.dataset.value;
 // console.log(data_id);
 //console.log(col); 
   // alert ('ID is: ' +id);

   if(data_id =='1'){
       return;
   }else{
    console.log(randomNum.includes(TempId));
    if(randomNum.includes(TempId) == false){
        score= score+1;
        console.log(score);
        if(score == 71){
            alert("congratulation you won !! Play again :)");
            startGame();

        }else{

        }
       // console.log(score);
        col.style.backgroundColor='green';

        col.setAttribute("data-value", '1');
    }else{
       // col.setAttribute("data-value", '-1');
        col.style.backgroundColor='red';
        console.log(randomNum);
        for(let j =0;j<randomNum.length;j++){
            let col_red = document.getElementById(randomNum[j]);
            col_red.style.backgroundColor = "red";
           
        }
        
        alert("Sorry You loose ,,, Try Again !!");
        
        startGame();


    }

   }


}


function startGame(){
   
    let cols = document.querySelectorAll('.col');
     
       score = 0;

       cols.forEach(element => {
       element.style.backgroundColor = "white";
       element.setAttribute("data-value", '0');
        
     });

}





function creatRandomNum(){

    for(let x =1;x<=10;x++){
        //console.log(Math.round(Math.random()*80));
        randomNum.push(Math.round(Math.random()*80+0))
        }
        

}

console.log(randomNum);