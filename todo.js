// function ajax(){
//     var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState==4&&this.status==200){
//         var response = JSON.parse(this.responseText);
//         var output = "";
//         for(var i=0;i<response.length;i++){
//             output += "<li>"+response[i].title+"</li>";
//         }
//         document.getElementById("demo").innerHTML = output;
//     }
// }
// xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// xhttp.send();
// }

$(document).ready(function(){
   $.ajax({
       url : "https://jsonplaceholder.typicode.com/todos",
       type: "GET",
       success : function(data){
           $.each(data, function(key,value){
               $("demo").append(value.title);
           })
           
       }
   })
})