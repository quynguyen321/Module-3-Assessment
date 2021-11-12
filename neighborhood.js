console.log(`hello`)


// let btn= document.getElementById("restaurant");
// btn.addEventListener("click", function() {
//     const restaurantArr = ["chinese restaurant", "Korean restaurant", "italian restaurant", ];

//     const random = Math.floor(Math.random() * restaurantArr.length);
//     console.log(random, restaurantArr[random]);
   
  
// }, false);

function GetValue()
{
    var myarray= new Array("chinese restaurant", "Korean restaurant", "italian restaurant", "VietNam restaurant","American restaurant");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    
    document.getElementById("message").innerHTML=random;
}





