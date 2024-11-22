var  customer = [];
    

function myFunction() {
  var text1 = document.getElementById("input1");
  var text2 = document.getElementById("input2");
  var text3 = document.getElementById("input3");
  var text4 = document.getElementById("input4");
  var text5 = document.getElementById("input5");
  var text6 = document.getElementById("input6");
  var text7 = document.getElementById("input7");
  var text8 = document.getElementById("input8");
  var text9 = document.getElementById("input9");
  var text10 = document.getElementById("input10");
  var text11 = document.getElementById("input11");
   
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    document.getElementById("ten").innerHTML = "";
    document.getElementById("ten1").innerHTML = "";

     let valid = true;

    if (text1.value === "") {
      document.getElementById("one").innerHTML = "*required";
      valid = false
     } 
     if (text2.value === "choose" || text2.value ==="" ) {
        document.getElementById("two").innerHTML = "*required";
        valid = false; 
    }
     if (text3.value ==="") {
         document.getElementById("three").innerHTML = "*required";
          valid = false;
       }
       if (text4.value ==="choose" || text4.value ==="" ) {
         document.getElementById("four").innerHTML = "*required";
          valid = false;
       }
      if (text5.value ==="choose" || text5.value ==="" ) {
        document.getElementById("five").innerHTML = "*required";
         valid = false;
      }
      if (text6.value ==="choose" || text6.value ==="" ) {
        document.getElementById("six").innerHTML = "*required";
         valid = false;
      }
     if (text7.value ==="") {
           document.getElementById("seven").innerHTML = "*required";
          valid = false;
       }
      if (text8.value ==="") {
        document.getElementById("eight").innerHTML = "*required";
         valid = false;
      }
      if (text9.value ==="") {
        document.getElementById("nine").innerHTML = "*required";
         valid = false;
      }
      if (text10.value ==="") {
        document.getElementById("ten").innerHTML = "*required";
         valid = false;
      }
      if (text11.value ==="") {
        document.getElementById("ten1").innerHTML = "*required";
         valid = false;
      }
      if(valid){
        var companyObj={
          companyName:text1.value,
           companyType:text2.value,
         companyGst:text3.value,
           companyState:text4.value,
         companyCity:text5.value,
         companyCountry:text6.value,
         companyNumber:text7.value,
           companyNum:text8.value,
         companyPerson:text9.value,
          companyPrefix:text10.value,
          companysefix:text11.value
        }
       customer.push(companyObj)
       console.log(customer)
       myArray();
       insertTable();
     
      }
    }

 function insertTable(){
      tableBody = "";
     for( i=0;i<customer.length;i++){
     tableBody += "<tr> <td> "+ customer[i].companyName + "</td><td> "+ customer[i].companyGst + "</td><td> "+ customer[i]. companyNumber +
     "</td><td><button class='btn btn-primary mx-3' onclick='buttonEdit(" + i + ")'>Edit</button><button class='btn btn-danger' onclick='buttonDelete(" + i + ")'>Delete</button></td></tr>";
  }
  document.getElementById("tableBody").innerHTML =  tableBody;
   }

// function companyObj(i) {
//   return customer[i];
// }
function buttonDelete(i) {  
  customer.splice(i, 1); 
  insertTable();
}

function buttonEdit(i) { 
  var customerData = customer[i]; 
  customer.splice(i,1)

  document.getElementById('input1').value = customerData.companyName;
  document.getElementById('input2').value = customerData.companyType;
  document.getElementById('input3').value = customerData.companyGst;
  document.getElementById('input4').value = customerData.companyState;
  document.getElementById('input5').value = customerData.companyCity;
  document.getElementById('input6').value = customerData.companyCountry;
  document.getElementById('input7').value = customerData.companyNumber;
  document.getElementById('input8').value = customerData.companyNum;
  document.getElementById('input9').value = customerData.companyPerson;
  document.getElementById('input10').value = customerData.companyPrefix;
  document.getElementById('input11').value = customerData.companysefix;

}

function myArray(){
  document.getElementById('input1').value = '';
  document.getElementById('input2').value = '';
  document.getElementById('input3').value = '';
  document.getElementById('input4').value = '';
  document.getElementById('input5').value = '';
  document.getElementById('input6').value = '';
  document.getElementById('input7').value = '';
  document.getElementById('input8').value = '';
  document.getElementById('input9').value = '';
  document.getElementById('input10').value = '';
  document.getElementById('input11').value = ''; 
 }

     



 