// set initial count
let count = 0;

//select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
btn.addEventListener("click", function (e){
const styles = e.currentTarget.classList;
 if(styles.contains("decrease")){
    count--;
} else if(styles.contains("increase")){
    count++;
} else{count = 0;}
 if(count>0){
    value.style.color = "#ff0000";
}
 if(count==0){
    value.style.color="black";
}
 if(count<0){
    value.style.color="green";
}
value.textContent=count;
})
});

