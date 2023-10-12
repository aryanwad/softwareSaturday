function changepage(){
    console.log("thius works");
    let headingTag = document.getElementById("heading");
    headingTag.style.color = "green";
}

function age(){
    let inputAge = document.getElementById("age").value;
    let pAge = document.getElementById("pAge")
    console.log(inputAge)
    if (inputAge == 18){
        pAge.innerHTML = "Yes!"
    } else {
        pAge.innerHTML = "No, I am 18!"
    }
}