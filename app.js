// chapter  nama "arrays and loop"
//chapter # "17-20"


//question #1
//var arr=[[],[],[],[],[]]

//question#2
// var arr=[
//     [0,1,4,6,8],
//     [2,3,4,5,6],
//     [3,6,9,12,13],
// ];
// document.write(arr[0]+ "<br/>")
// document.write(arr[1]+ "<br/>")
// document.write(arr[2]+ "<br/>")

//question#3
// for(var i=1;i<=10;i++){
//     console.log(i)
// }

//question #4
// var number=prompt("enter a number to show its multiplication table")
// var lt=prompt("enter a lenght multiplication table")
// for(var i=1;i<=lt;i++){
//     console.log(number +" x "+i +" = "+number*i)
// }
//question #5
// var arr=[" apple", " banana", " mango", " orange",
//     " strawberry"]
//    for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
//    }
 
//    for(var i=0;i<arr.length;i++){
//      console.log("element at index "+i + " is"+arr[i])
//    }


// question # 6
// part (a)

// for(var i=1;i<=15;i++){
// document.write(i +",");
// }


// part (b)

// for(var i=10;i>=1;i--){
// document.write(i +",");
// }

//part(c)

//  for(var i=2;i<=20;i+=2){
//     document.write(i+",")
//  }



//part(d)

//  for(var i=1;i<=20;i+=2){
//     document.write(i+",")
//  }


//part (e)
//  for(var i=2;i<=20;i+=2){
//     document.write(i +"k, ")
//  }

// question #7

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user=prompt("entre an item to search for")
// var result=(false)
// for(var i=0;i<=a.length;i++){
    
//     if (a[i]===user){
//        result=(true)
//        break;
//     }
// }
// if (result){
//     alert(user+" is available at the index "+i+" in our bakery" )
// }else{
//     alert("we are sorry "+user+" is not available in our bakery")
// }


//question# 8

// var arr=[22,55,77,87,11,26]
// var max=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]> max){
//         max=arr[i]
//     }
// }
// console .log("the largest number in array is "+max);



// question #9


// var arr=[77,22,55,111,26,3]
// var max=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]< max){
//         max=arr[i]
//     }
// }
// console .log("the lowest number in array is "+max);


//question#10
// for(var i=1;i<=100;i++){
//     if(i%5===0){
//         console.log (i)
//     }

// }



//class task
// // var a = "b2bkfduy83290471p2jkdfl";
// // var letters = a.match(/[a-zA-Z]+/g);
// // console.log(letters);




// // var a = "b2bkfduy83290471p2jkdfl";
// // var numbers = a.match(/\d+/g);
// // console.log(numbers);



// var a = "b2bkfduy83290471p2jkdfl";
// var letters = "";
// var numbers = "";

// for(i=0;i<a.length;i++){
//     if(/[a-zA-Z]/.test(a[i])) {
//         letters +=a[i]
//     } else if (/[0-9]/.test(a[i])){
//         numbers +=a[i]
//     }
// }

// console.log(letters)
// console.log(numbers)