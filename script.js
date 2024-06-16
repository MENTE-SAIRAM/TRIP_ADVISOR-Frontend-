
function showpassword(){
    var x= document.getElementById("password");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
function showrepassword(){
    var x= document.getElementById("repassword");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

function validatepassword(){
    alert("hi")
    let a=document.getElementById("password");
    let v=a.tostring();
    let y=document.getElementById("repassword");
    let z=y.value.tostring();
    if(z===v){
        alert("both passwords are matched");
    }
    else{
        alert("both passwords are not match");
      

    }
}