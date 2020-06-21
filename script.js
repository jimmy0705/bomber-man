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
  
   // alert ('ID is: ' +id);
}





function creatRandomNum(){

    for(let x =0;x<10;x++){
        //console.log(Math.round(Math.random()*80));
        randomNum.push(Math.round(Math.random()*80))
        }
        

}

//console.log(randomNum);