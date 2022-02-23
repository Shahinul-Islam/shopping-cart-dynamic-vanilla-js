//increment section for mobile
const mobilePlus = document.getElementById("mobile-plus");
mobilePlus.addEventListener("click", function () {
  let mobilePhones = document.getElementById("mobile-input");
  let numberOfMobile = parseInt(mobilePhones.value) + 1;
  mobilePhones.value = numberOfMobile;

  //set mobile phone price
  let mobilePriceValue = 1219;

  let singleMobilePrice = document.getElementById("single-mobile-price");
  let mobilePrice = mobilePriceValue * parseInt(numberOfMobile);
  singleMobilePrice.innerText = mobilePrice;
  //set sub total
  finalSubTotal();
});

//decrement section for mobil phone
const mobileMinus = document.getElementById("mobile-minus");
mobileMinus.addEventListener("click", function () {
  let mobilePhones = document.getElementById("mobile-input");
  let numberOfMobile = parseInt(mobilePhones.value) - 1;
  mobilePhones.value = numberOfMobile;

  let mobilePriceValue = 1219;
  var singleMobilePrice = document.getElementById("single-mobile-price");

  let mobilePrice = mobilePriceValue * parseInt(numberOfMobile);
  singleMobilePrice.innerText = mobilePrice;
  if (mobilePhones.value <= 0) {
    mobilePrice = 0;
    singleMobilePrice.innerText = mobilePrice;
    mobilePhones.value = 0;
  }
  //set sub total
  finalSubTotal();
});

//increment section for mobile case

const casePlus = document.getElementById("case-plus");
casePlus.addEventListener("click", function () {
  let mobileCases = document.getElementById("case-input");
  let numberOfCases = parseInt(mobileCases.value) + 1;
  mobileCases.value = numberOfCases;
  let casePriceValue = 59;
  const singleMobilCasePrice = document.getElementById("single-case-price");
  let mobileCasePrice = casePriceValue * parseInt(mobileCases.value);
  singleMobilCasePrice.innerText = mobileCasePrice;
  //set sub total
  finalSubTotal();
});

//decrement section for mobile case
const caseMinus = document.getElementById("case-minus");
caseMinus.addEventListener("click", function () {
  let mobileCases = document.getElementById("case-input");
  let numberOfCases = parseInt(mobileCases.value) - 1;
  mobileCases.value = numberOfCases;
  let casePriceValue = 59;
  var singleMobilCasePrice = document.getElementById("single-case-price");
  let mobileCasePrice = casePriceValue * parseInt(mobileCases.value);
  singleMobilCasePrice.innerText = mobileCasePrice;
  if (mobileCases.value <= 0) {
    casePriceValue = 0;
    singleMobilCasePrice.innerText = casePriceValue;
    mobileCases.value = 0;
  }
  //set sub total
  finalSubTotal();
});
//calculation of subtotal, total, and tax
function finalSubTotal() {
  const subTotal = document.getElementById("sub-total");

  const cartSubTotal =
    parseInt(document.getElementById("single-mobile-price").innerText) +
    parseInt(document.getElementById("single-case-price").innerText);
  subTotal.innerText = cartSubTotal;
  const finalTotal = document.getElementById("total");
  finalTotal.innerText = cartSubTotal;
  //tax
  const taxCalculation = document.getElementById("tax");

  const taxValue = taxCalculation.innerText;
  const taxAmount = parseInt(taxValue);
  const totalTax = (taxAmount / 100) * parseInt(cartSubTotal);
  if (parseInt(taxCalculation.innerText) > 0) {
    finalTotal.innerText = totalTax + cartSubTotal;
  } /* 
  if (cartSubTotal <= 0) {
    taxCalculation.innerText = 0;
    finalTotal.innerText = 0;
  } */
}
//remove mobile item calculation

document.getElementById("remove-mobile").addEventListener("click", function () {
  document.getElementById("mobile-div").style.display = "none";
  const subTotal = document.getElementById("sub-total");

  const cartSubTotal = parseInt(
    document.getElementById("single-case-price").innerText
  );
  subTotal.innerText = cartSubTotal;
  const finalTotal = document.getElementById("total");
  finalTotal.innerText = cartSubTotal;
});
