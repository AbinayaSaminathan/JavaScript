customerList=[];

function myForm(){
  var input1 =  document.getElementById("input1").value;
  var input2 =document.getElementById('input2').value;
  var input3 =document.getElementById('input3').value;

  document.getElementById('one').innerHTML=" ";
  document.getElementById('two').innerHTML=" ";
  document.getElementById('three').innerHTML=" ";
  let valid = true;
  const lettersPattern = /^[A-Za-z]+$/;
  if(input1 === ""){
    document.getElementById('one').innerHTML="*required ";
    valid = false;
  }
  else if(!lettersPattern.test(input1)){
    document.getElementById('one').innerHTML="Not valid ";
    valid = false;
  }
  if(input2 === ""){
    document.getElementById('two').innerHTML="*required ";
    valid = false;
  }
  else if (!input2.includes("@")) {
    document.getElementById('two').innerHTML = "It's not valid";
    valid = false;
}
else if (!input2.includes(".")) {
  document.getElementById('two').innerHTML = "It's not valid";
  valid = false;
}
  if(input3 === ""){
    document.getElementById('three').innerHTML="*required ";
    valid = false;
  }
  else if(input3.length<=6){
    document.getElementById('three').innerHTML="please enter more than six numbers ";
    valid = false;
  }
  if(valid){
    var customerList=JSON.parse(localStorage.getItem("customerList")) || [];
   var customerObj={
    objName:input1,
    objEmail:input2,
    objPassword:input3
  }
  customerList.push(customerObj)
  localStorage.setItem("customerList",JSON.stringify(customerList));
  insertTable();
} 
}
  function insertTable(){
    var customerList = JSON.parse(localStorage.getItem("customerList")) || [];  
    tableBody = " ";
    for(i = 0; i < customerList.length; i++) {
      customerObj = customerList[i];
      var box = document.getElementById("list");
      if (customerList.value > 0) {
          box.style.display = "none";
      } else {
          box.style.display = "block";      }
   tableBody += "<tr> <td> "+ customerList[i].objName + "</td><td> "+ customerList[i].objEmail + "</td><td> "+ customerList[i]. objPassword +  
    "</td><td>"+'<button class="mx-2"  onclick="buttonEdit(' + i + ')" style="background:transparent; border:hidden;color:blue;padding:1px;"><i class="fas fa-pen"></i></button>'+'<button class="mx-2"  onclick="buttonDelete(' + i + ')" style="background:transparent; border:hidden;color:red;padding:1px;"><i class="fas fa-trash"></i></button>'+"</td></tr>" ;
   }
document.getElementById("tableBody").innerHTML =  tableBody;
  }
function buttonDelete(i) {  
  var customerList = JSON.parse(localStorage.getItem("customerList")) || [];
  if(i==0){
    var box = document.getElementById("list");
   box.style.display="none";
 }
  customerList.splice(i, 1); 
  localStorage.setItem("customerList",JSON.stringify(customerList));
  insertTable();
}
function buttonEdit(i) {
  var customerList = JSON.parse(localStorage.getItem("customerList")) || [];
  var customerData = customerList[i]; 
  document.getElementById('input1').value = customerData.objName;
  document.getElementById('input2').value = customerData.objEmail;
  document.getElementById('input3').value = customerData.objPassword; 
  customerList.splice(i, 1); 
  localStorage.setItem("customerList",JSON.stringify(customerList)); 
}
window.onload=function(){
  insertTable();
}
