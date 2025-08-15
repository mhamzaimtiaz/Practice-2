// var age = 25;

// if(true){
//     console.log(age);
// }




// const a = Symbol("id");
// const b = Symbol("id");

// console.log(a === b); 




// let name=  `Love 
// Hamza`
// console.log(name);

// let s1='Hamza';
// let s2= ' Khan';
// console.log(s1+ s2)
// let ans=s1+ s2;
// console.log(ans);



// let s1='Hamza';
// let s2= ' Khan';
// console.log(s1+ s2)
// let ans=`${s1}${s2}`;
// console.log(ans);




// let s1='Hamza';
// let s2= ' Khan';
// console.log(s1+ s2)
// let ans=s1+ s2;
// console.log(ans);




// let exp= (a,b)=>{
//     return a**b;
// }
// let a=exp(2,4);
// console.log("Answer is",a)

// for(let i=1 ;i<=10;i++){
//     for(let j=0;j<=100;j++){
//         console.log(i*j, " ");
//     }
//     console.log(` 
//         `);
// }



// class human {
// age;
// wt;
// height;


// returnage(){
// console.log(this.age);
// }

// setage(val){
//     this.age=val;
// }
// }
// let obj= new human();
// obj.setage(10);
// obj.returnage();


// const bulb = document.getElementById("bulb");

// const turnOn=() => {
//     bulb.src = "onbulb.jpeg"; 
//     bulb.style.transform = "scale(1.1)";
//     bulb.style.filter = "drop-shadow(0 0 20px orange)";
// }

// const turnOff=() => {
//     bulb.src = "off bulb.jpg"; 
//     bulb.style.transform = "scale(1)";
//     bulb.style.filter = "none";
// }

    // const numbers = [1, 2, 3, 4, 5];
    // const found = numbers.find(num => num > 3); // found will be 4
    // console.log(found);

    // async function getdaata(){
    //     setTimeout(function(){
    //         console.log("I am inside async funtion")
    //     },4000);
    // }
    // let output=getdaata();

// const startTime = performance.now();
// // Perform some task or execute code block
// const endTime = performance.now();

// const elapsedTime = endTime - startTime;
// console.log(`Elapsed time: ${elapsedTime} milliseconds`);



// function timeConsumingTask() {
//     let sum = 0;
//     for (let i = 0; i < 1000000; i++) {
//         sum += i;
//     }
//     return sum;
// }

// const start = performance.now();
// const result = timeConsumingTask();
// const end = performance.now();

// console.log(`Result: ${result}`);
// console.log(`Execution time: ${end - start} milliseconds`);



// // This code triggers a reflow for every paragraph element
// for (let i = 0; i < 100; i++) {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'New paragraph';
//   document.body.appendChild(paragraph);
// }


// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'New paragraph';
//   fragment.appendChild(paragraph);
// }
// document.body.appendChild(fragment);



// console.log("First request in the Call Stack");

// function article(){
//     return article();
// }

// article();

// console.log("This request never gets on the call stack");




// console.log("First request on call stack");

// setTimeout(function(){
//     console.log("After 1000ms this will get into task queue and there it'll wait for call stack to get empty");
// }, 1000);

// console.log("This request gets into call stack because the above function is Non-Blocking");

