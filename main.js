document.write("Define a function that calculates the area of a circle"+"<br>");

document.write("Given array:let circles=[10,30,50]"+"<br>");
let circles=[10,30,50];




let empty=[];
let res1=circles.map(function(value,index,array){
    
         let area=Math.floor(3.14*value**2);
        
        return  area;
    
});


document.write(res1);

