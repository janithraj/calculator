var a=document.getElementById("input1");
function display(num){
    a.value += num;
}

function calculator(){
    try{
        a.value=eval(a.value);
     }
     catch(err){
       alert("invalid")
     }
}


function delet(){

    a.value=a.value.slice(2,-1);

}

function cl(){

    a.value= "";

}