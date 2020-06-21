let randomNum = [];
let id = 1;
let score = 0;
gameStart();

function gameStart(){
    creatRandomNum();

    let cols = document.querySelectorAll('.col');
   // console.log(cols);
   cols.forEach(element => {
       //console.log(element);
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
  console.log(data_id);
 //console.log(col); 
   // alert ('ID is: ' +id);

   if(data_id =='1'){
       return;
   }else{
    console.log(randomNum.includes(TempId));
    if(randomNum.includes(TempId) == false){
        score= score+5;
        console.log(score);
        col.setAttribute("data-value", '1');
    }else{
        col.setAttribute("data-value", '-1');
        col.style.backgroundColor='red';
        

    }

   }


}





function creatRandomNum(){

    for(let x =0;x<10;x++){
        //console.log(Math.round(Math.random()*80));
        randomNum.push(Math.round(Math.random()*80))
        }
        

}

console.log(randomNum);