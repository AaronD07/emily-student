function myFunction(){
   
    let password = document.getElementById('pwd').value;
    console.log(password)
    if(password == '4'){ 
        console.log("clicked on submit!")
        document.getElementById('label').innerHTML="Great Job!"
        document.getElementById('label').style.color='rgb(40,180,180)'
        document.getElementById('pwd').style.display = "none"
    }
    else{
        console.log("clicked on submit! but wrong")
        document.getElementById('label').innerHTML="Incorrect! Reload to try again."
        document.getElementById('label').style.color='rgb(194, 65, 91)'
        document.getElementById('pwd').style.display = "none" 
    }
}

function myFunction2(){
   
    let password = document.getElementById('pwd2').value;
    console.log(password)
    if(password == 'dog'){ 
        console.log("clicked on submit!")
        document.getElementById('label2').innerHTML="Success!"
        document.getElementById('label2').style.color='rgb(40,180,180)'
        document.getElementById('pwd2').style.display = "none"
    }
    else{
        console.log("clicked on submit! but wrong")
        document.getElementById('label2').innerHTML="Incorrect! Reload to try again."
        document.getElementById('label2').style.color='rgb(194, 65, 91)'
        document.getElementById('pwd2').style.display = "none" 
    }
}

function myFunction3(){
   
    let password = document.getElementById('pwd3').value;
    console.log(password)
    if(password == 'yes'){ 
        console.log("clicked on submit!")
        document.getElementById('label3').innerHTML="Nice!"
        document.getElementById('label3').style.color='rgb(40,180,180)'
        document.getElementById('pwd3').style.display = "none"
    }
    else{
        console.log("clicked on submit! but wrong")
        document.getElementById('label3').innerHTML="Incorrect! Reload to try again."
        document.getElementById('label3').style.color='rgb(194, 65, 91)'
        document.getElementById('pwd3').style.display = "none" 
    }
}