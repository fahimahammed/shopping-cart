// variable dec.. 
const mobilePrice=1219;
const casePrice=59;
let mPrice, cPrice;



      //first plus btn event 
      const plusBtn = document.getElementById("first-plus");
      plusBtn.addEventListener("click", function(){
         const newQuantity = updatePlusBtn("first-value"); 
         document.getElementById("first-value").value=newQuantity;
         mPrice=updatePrice("first-price", mobilePrice, newQuantity);
         document.getElementById("first-price").innerText=mPrice;
         const price=mPrice + cPrice;
         document.getElementById("subTotalPrice").innerText= price;
         document.getElementById("totalPrice").innerText= price;
      })
      //first minus btn event 
      const minusBtn = document.getElementById("first-minus");
      minusBtn.addEventListener("click", function(){
         const newQuantity = updateMinusBtn("first-value");
         document.getElementById("first-value").value=newQuantity;
         mPrice=updatePrice("first-price", mobilePrice, newQuantity);
         document.getElementById("first-price").innerText=mPrice;
         const price=mPrice + cPrice;
         document.getElementById("subTotalPrice").innerText= price;
         document.getElementById("totalPrice").innerText= price;
      })

      //second plus button
      const secondPlusBtn = document.getElementById("second-plus");
      secondPlusBtn.addEventListener("click", function(){
         const newQuantity = updatePlusBtn("second-value"); 
         document.getElementById("second-value").value=newQuantity;
         cPrice=updatePrice("second-price", casePrice, newQuantity);
         document.getElementById("second-price").innerText=cPrice;
         const price=mPrice + cPrice;
         document.getElementById("subTotalPrice").innerText= price;
         document.getElementById("totalPrice").innerText= price;
      })

      //second minus button
      const secondMinusBtn = document.getElementById("second-minus");
      secondMinusBtn.addEventListener("click", function(){
         const newQuantity = updateMinusBtn("second-value");
         document.getElementById("second-value").value=newQuantity;
         cPrice=updatePrice("second-price", casePrice, newQuantity);
         document.getElementById("second-price").innerText=cPrice;
         const price=mPrice + cPrice;
         document.getElementById("subTotalPrice").innerText= price;
         document.getElementById("totalPrice").innerText= price;
      })
     
      
      function updatePlusBtn(id){
         const currentQuantity = document.getElementById(id).value;
         const currentQuantityNumber = parseFloat(currentQuantity);
         const newQuantity = currentQuantityNumber + 1;
         return newQuantity;
      }
      function updateMinusBtn(id){
         const currentQuantity = document.getElementById(id).value;
         const currentQuantityNumber = parseFloat(currentQuantity);
         const newQuantity = currentQuantityNumber - 1;
         return newQuantity;
      }
      function updatePrice(id, price, newQuantity){
         const currentPrice = document.getElementById(id).innerText;
         const currentPriceNumber = parseFloat(currentPrice);
         const newPrice = newQuantity*price;
         //document.getElementById(id).innerText = newPrice;
         return newPrice;
      }