function calc(){
    let firstValue=document.getElementById("firstValue");
    let secondValue=document.getElementById("secondValue");
    console.log();
    if(firstValue.value=='' || secondValue.value ==''){
        if(firstValue.value=="" && secondValue.value==""){
            alert("input have no value")
        }
       else if(firstValue.value==''){
            alert("A don't have a value")
        }
       else if(secondValue.value==''){
            alert("B don't have a value")
        }
    }
    else{
        //add
        let valueAdd = Number(firstValue.value) + Number(secondValue.value)
        var addValue = document.getElementById("addValue")
        addValue.innerHTML = "Addition of this inputs is <b>A + B =</b>" + '<b>' + valueAdd + '</b>'
         //mul
         let valueSub = Number(firstValue.value) - Number(secondValue.value)
        var subValue = document.getElementById("subValue")
        subValue.innerHTML = "Addition of this inputs is <b>A - B =</b>" + '<b>' + valueSub + '</b>'
         //mul
         let valueMul = Number(firstValue.value) * Number(secondValue.value)
         var mulValue = document.getElementById("mulValue")
         mulValue.innerHTML = "Multiplication of this inputs is <b>A * B =</b>" + '<b>' + valueMul + '</b>'
         //div
        let valueDiv = Number(firstValue.value) / Number(secondValue.value)
        var divValue = document.getElementById("divValue")
        divValue.innerHTML = "Addition of this inputs is <b>A / B =</b>" + '<b>' + valueDiv + '</b>'
        //square
        let valueSquare = Number(valueAdd) * Number(valueAdd)
        var squareValue = document.getElementById("squareValue")
        squareValue.innerHTML = "Addition of this inputs is <b>A * B =</b>" + '<b>' + valueSquare + '</b>'
        //squareroot
        let valueSquareoot = Math.sqrt(valueAdd)
        var squareRootValue = document.getElementById('squareRootValue')
        squareRootValue.innerHTML = "Square root the sum value of <b>A </b> and <b>B =</b>" + '<b>' + valueSquareoot + '</b>'
        //log
        let valueLog = Math.log(valueAdd)
        var logValue = document.getElementById('logValue')
        logValue.innerHTML = "Log <b>(A+B)=</b>" + '<b>' + valueLog + '</b>'
        //sin
        let valueSin = Math.sin(valueAdd)
        var sinValue = document.getElementById('sinValue')
        sinValue.innerHTML = "Sin <b>(A+B)=</b>" + '<b>' + valueSin + '</b>'
        //cos
        let valueCos = Math.cos(valueAdd)
        var cosValue = document.getElementById('cosValue')
        cosValue.innerHTML = "Cos<b>(A+B)=</b>"+ '<b>' + valueCos + '</b>'
        //tan
        let valueTan = Math.tan(valueAdd)
        var tanValue = document.getElementById('tanValue')
        tanValue.innerHTML = "Tan <b>(A+B)=</b>" + '<b>' + valueTan + '</b>'
    }
}
function calculator(){
    let firstValue=document.getElementById("firstValue");
    let secondValue=document.getElementById("secondValue");
    console.log();
    if(firstValue.value,secondValue.value==''){
        alert("does not have a value")
    }
    else if (Number(firstValue.value) >= Number(secondValue.value)) {
        alert("give the   A value is greaterthan B")
     }
    else{
        var Array=[]
        oddArray=[]
        evenArray=[]
        arraySum=0
        oddSum=0
        evenSum=0
        oddNumber=document.getElementById('oddValue')
        evenNumber=document.getElementById('lengthValue')
        totalNumber=document.getElementById('totalValue')
        evenNumber=document.getElementById('numberEven')
        evenSumNumber=document.getElementById('NumberSum')
        oddSumNumber=document.getElementById('oddNumberValue')
        oddSumNumberValue=document.getElementById('oddNumberSum')       
        for(i=Number(firstValue.value);i<=Number(secondValue.value);i++){
            Array.push(i)
            arraySum +=i
            totalvalue.innerHTML="Total value between <b>A</b> and <b>B</b>="+ '<b>'+Array+'</b>'
            oddValue.innerHTML="Add total value between <b>A</b> and <b>B</b>="+ '<b>'+arraySum+'</b>' 
            lengthValue.innerHTML="Total length value of <b>A</b> and <b>B</b>="+ '<b>'+Array.length+'</b>'        
        if (i%2==0){
            evenSum +=i
            evenArray.push(i)
            evenNumber.innerHTML="Even value between <b>A</b> and <b>B</b>="+ '<b>'+evenArray+'</b>'
            evenSumNumber.innerHTML="Total value Sum <b>A</b> and <b>B</b>="+ '<b>'+evenSum+'</b>'
           }
        else{
            oddSum +=i
            oddArray.push(i)
            oddSumNumber.innerHTML="Odd value between <b>A</b> and <b>B</b>="+ '<b>'+oddArray+'</b>'
            oddSumNumberValue.innerHTML="Total value Sum <b>A</b> and <b>B</b>="+ '<b>'+oddSum+'</b>'
           }
        } 
    }
} 
function cal(){
    var textArea=document.getElementById("textArea");
        if(textArea.value ==''){
            alert('Input box is empty')
        }
        else{
            let textArea=document.getElementById("textArea").value;
            let output=document.getElementById("inputTotal");
            array=textArea.split(' ').join('');
            console.log(array.split(''))
            let finalArray=array.split('')
            for (let i = 0; i < finalArray.length; i++) {
                textArea=" "
            let count=0;
            for (let j = 0;j < finalArray.length;j++) {
            if (finalArray[i]==finalArray[j]&&i>j) {
            break;    
            }
            if (finalArray[i]==finalArray[j]) {
              count++;  
            }    
            }
            if (count>0) {
            if(output.innerHTML=='') {
                output.innerHTML='<h3>this inputs contains'+' '+'<b>'+finalArray.length+'</b>'+' '+'characters.</h3>'+
                '<h5>this total inputs'+' '+'<b>'+count+finalArray[i]+'</b>'+' '+'characters.</h5>'
            }
            else{
                 output.innerHTML+='<h5>this total inputs'+' '+'<b>'+count+finalArray[i]+'</b>'+' '+'characters.</h5>'
            }
            }
        }
     
    }
   
} 
function myFunction() {
    let text1 = document.getElementById("input1").value;
    let text2 = document.getElementById("input2").value;

    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";

    // let valid = true;

    if (text1 === "") {
      document.getElementById("one").innerHTML = "*required";
     } // valid = false
    if (text2 ==="") {
      document.getElementById("two").innerHTML = "*required";
      // valid = false;
    }

else {
      let date = new Date(text1);
      let daysAdd = Number(text2);
      date.setDate(date.getDate() + daysAdd);
      let result1 = date.toDateString();
      date.setDate(date.getDate()-(2*daysAdd));
      let result2=date.toDateString();    
      document.getElementById("result1").innerHTML =` adding <b>${text2}</b> days to <b>${text1}</b> Resulting Date = <b>${result1}</b>`;
      document.getElementById("result2").innerHTML =` adding <b>${text2}</b> days to <b>${text1}</b> Resulting Date = <b>${result2}</b>`;
    
   }
}

function mycalCul() {
    let text1 = document.getElementById("input1").value;
    let text2 = document.getElementById("input2").value;

    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";

    // let valid = true;

    if (text1 === "") {
      document.getElementById("one").innerHTML = "*required";
     } // valid = false
    if (text2 ==="") {
      document.getElementById("two").innerHTML = "*required";
      // valid = false;
    }
    else{
       const date1=new Date(text1);
       const date2=new Date(text2);
        const milliseconds =Math.abs(date2 - date1);
        const  second =Math.ceil(milliseconds / (1000 ));
        const minute =Math.ceil( second /( 60));
        const hour =Math.ceil(minute / 60);
        const day =Math.ceil( hour / 24);
        const week=Math.ceil(day/7);
        const month=Math.floor(day/30);
        const year =Math.floor( day / 365);

        var yearArr =['Years','Year']
        var monthArr=['Months','Month']
        var dayArr=['Days','Day']


        var years;
        var months;
        var days;
         if(day>1){
            days=dayArr[0]
        }
        else{
            days=dayArr[1]
        }
        if(month>1){
            months=monthArr[0]
        }
        else{
            months=monthArr[1]
        }
        if(year>1){
            years=yearArr[0]
        }
        else{
            years=yearArr[1]
        }
        document.getElementById("dFinal").innerHTML=`The total gap between = <b> ${day}</b> ${days} <b>${month}</b> ${months} <b>${year}</b> ${years}`;
        console.log(dFinal)



        console.log(milliseconds+" "+"milliSecond")
        console.log(second+" "+"Second")
        console.log(minute+" "+"minute")
        console.log(hour+" "+"hours")
        console.log(day+" "+"day")
        console.log(week +" "+"week")
        console.log(month+" "+"month")
        console.log(year+" "+"year")


        document.getElementById("year").innerHTML =`Year of difference between <b>DATE1</b> and <b>DATE2</b> = ${year}`;
        document.getElementById("month").innerHTML =` Month of difference between <b>DATE1</b> and <b>DATE2</b> =  ${month}`;
        document.getElementById("week").innerHTML =` Week of difference between <b>DATE1</b> and <b>DATE2</b> =  ${week}`;
        document.getElementById("day").innerHTML =` Day of difference between <b>DATE1</b> and <b>DATE2</b> =  ${day}`;
        document.getElementById("hour").innerHTML =` Hours of difference between <b>DATE1</b> and <b>DATE2</b> =  ${hour}`;
        document.getElementById("minute").innerHTML =` Minute of difference between <b>DATE1</b> and <b>DATE2</b> =  ${minute}`;
         document.getElementById("second").innerHTML =` Second of difference between <b>DATE1</b> and <b>DATE2</b> =  ${second}`;
        document.getElementById("milliseconds").innerHTML =` Milliseconds of difference between <b>DATE1</b> and <b>DATE2</b> =  ${milliseconds}`;

    // const date1 = new Date(text1);
    // const date2 = new Date(text2);
    
    // // Calculate the difference in milliseconds
    // const milliseconds = Math.abs(date2 - date1);
    
    // // Convert milliseconds to different time units
    // const seconds = Math.ceil(milliseconds / 1000);
    // const minutes = Math.ceil(seconds / 60);
    // const hours = Math.ceil(minutes / 60);
    // const days = Math.ceil(hours / 24);
    
    // // Output the results
    // console.log(`Difference in seconds: ${seconds}`);
    // console.log(`Difference in minutes: ${minutes}`);
    // console.log(`Difference in hours: ${hours}`);
    // console.log(`Difference in days: ${days}`);

    // document.getElementById("days").innerHTML =` Day of difference between <b>DATE1</b> and <b>DATE2</b> :  ${days}`;
    //     document.getElementById("hours").innerHTML =` Hours of difference between <b>DATE1</b> and <b>DATE2</b> :  ${hours}`;
    //     document.getElementById("minutes").innerHTML =` Minute of difference between <b>DATE1</b> and <b>DATE2</b> :  ${minutes}`;
    //      document.getElementById("seconds").innerHTML =` Second of difference between <b>DATE1</b> and <b>DATE2</b> :  ${seconds}`;
    

        //const milliseconds = Math.abs(date2 - date1);
        //const days = math.abs(milliseconds/hour*60);
        //console.log(days)
        // const dMinute= Math.abs(1000*60);
       //  let years = Math.round(day*365);
        // console.log(years)
      //   document.getElementById("one").innerHTML = years;
        
        // let date1 = new Date(text1);
        // let date2 = new Date(text2);
        // date1.setDate(date1.getDate() + date1.getDate());
        // let result1 = date2.toDateString();  
        // document.getElementById("result1").innerHTML =` adding ${text2} days to ${text1} Resulting Date: ${result1} `;
    }
}

  
