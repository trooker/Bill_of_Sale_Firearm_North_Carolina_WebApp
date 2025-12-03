//Copyright &copy 1988-2025 by Abbott Analytical Products. All Rights Reserved.
/*
 * Multi
 * 
 * line
 */


/* Setup a touch the function from the webpage to verify talking correctly
 *  ==> different methods for calling javascript functions from within a webpage
 * https://www.google.com/search?client=ubuntu-sn&channel=fs&q=different+methods+for+calling+javascript+functions+from+within+a+webpage
 * 
 **/
function aapTouchFunc() {
 //external file
    alert("This function is from an external file!");
  //const button = document.getElementById("aapButton");
  //button.addEventListener("click", function() {
   //alert("Button clicked using event listener!");
  //});

}

 
/*
 * ==>> generate a unique random guid in javascriptguid 
 * https://www.google.com/search?client=ubuntu-sn&channel=fs&q=generate+a+unique+random+guid+in+javascriptguid+
 * Preferred const guid = crypto.randomUUID();
 */ 
  
//const eventGUID = createGuid4Event(); 
function createGuid4Event() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    //lost in the woods document.getElementById("tamp").innerHTML = "Date-Time Stamp: " + Date();

  });
}


 

function aapDateTimeFunction() {
   console.log("Date-Time Function called!");
   const ddayElement = document.getElementById('dday');

   ddayElement.innerHTML =  Date();
   document.getElementById("dday").value = Date();
}

function aapBOSDateTime() {
   console.log("Date-Time Function called!");
   const bosdayElement = document.getElementById('bosday');

   bosdayElement.innerHTML =  Date();
   document.getElementById("bosday").value = Date();
}

function aapStampSignature1() {
   console.log("Seller Date-Time Stamp called!");
   const s1dayElement = document.getElementById('s1day');

   s1dayElement.innerHTML =  Date();
   document.getElementById("s1day").value = Date();
}

function aapStampSignature2() {
   console.log("Buyer Date-Time Stamp called!");
   const s2dayElement = document.getElementById('s2day');

   s2dayElement.innerHTML =  Date();
   document.getElementById("s2day").value = Date();
}



function aapThrowAlert1() {
  alert("Button clicked 1936!");
  clearSignature1();
}

function aapThrowAlert2() {
  alert("Button clicked just now!");
}


