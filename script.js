function computeMainCourse() {
  
    let specialQty = parseInt(document.getElementById("specialQty")?.value) || 0;
    let regularQty = parseInt(document.getElementById("regularQty")?.value) || 0;
    let bbqQty = parseInt(document.getElementById("bbqQty")?.value) || 0;
    let age = parseInt(document.getElementById("ageInput")?.value) || 0;

    let specialPrice = 150;
    let regularPrice = 80;
    let bbqPrice = 30;

    let gulamanQty = parseInt(document.getElementById("gulamanQty")?.value) || 0;
    let bukoQty = parseInt(document.getElementById("bukoQty")?.value) || 0;
    let ITQty = parseInt(document.getElementById("ITQty")?.value) || 0;
   
    let gulamanPrice = 60;
    let bukoPrice = 50;
    let ITPrice = 50;

    let ic = parseInt(document.getElementById("ICQty")?.value) || 0;
    let cj = parseInt(document.getElementById("CJQty")?.value) || 0;
    let hh = parseInt(document.getElementById("HHQty")?.value) || 0;

    let icPrice = 60;
    let cjPrice = 30;
    let hhPrice = 90;

    let total = (specialQty * specialPrice) + (regularQty * regularPrice) + (bbqQty * bbqPrice) + (gulamanQty * gulamanPrice) + (bukoQty * bukoPrice) + (ITQty * ITPrice) + (ic * icPrice) + (cj * cjPrice) + (hh * hhPrice);

    let finalTotal = total;
    if (age >= 60) {
        finalTotal = total - (total * 0.12);
    }

    let discountAmount = total - finalTotal;
    let payableAmount = finalTotal;

    document.getElementById("totalMain").textContent = total.toFixed(2);
    document.getElementById("totalDiscount").textContent = discountAmount.toFixed(2);
    document.getElementById("payableAmount").textContent = payableAmount.toFixed(2);
}
