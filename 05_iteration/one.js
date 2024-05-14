 // for loop

 for (let i = 0;i <= 10; i++) {
    const element = i;
    console.log(element)
 }

 // condition in loop

 for (let i = 0;i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element)
 }

 //  loop ke under loop


 for (let j = 0; j <= 20; j++) {
    console.log(`outer loop value ${j}`) // outer loop
    for (let i = 0; i <= 20; i++) {
        // console.log(`Innerloop loop value ${j} and inner loop ${i}`) // inner loop

        console.log(i + " * " + j + "=" + i*j);
    }
    
 }

 // use array in for loop

 let myArray = ["superman", "batsman", "flash","milkman"]
  console.log(myArray.length);
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
 }

//   break & continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
       console.log("Detected 5");
       break
    }
    console.log(`value of i is ${index}`)
    
}

//    continue
for (let index = 0; index < 20; index++) {
    if (index == 5) {
       console.log("Detected 5");
       continue
    }
    console.log(`value of i is ${index}`)
    
}