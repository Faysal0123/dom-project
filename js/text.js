let total = 0;

function handleClickCard(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[1].childNodes[5].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li); 

    const price = target.parentNode.childNodes[1].childNodes[7].innerText.split ( " ")[0];

    total = parseInt(total) + parseInt (price);
    
    const firstTotal = (document.getElementById("total").innerText = total);

    if (total > 200){
        document.getElementById("coupon-button").disabled = false;
    }

}

document.getElementById ("coupon-button"). addEventListener('click',function(){
    const inputField = document.getElementById('input-coupon');
    const inputPassword = inputField.value;
    
    
    if (inputPassword === 'SELL200'){
        const discountValue = total * 0.2 ;
        const lastTotal = total - discountValue;
        console.log(discountValue)
        document.getElementById('discunt-total').innerText = discountValue;
        document.getElementById('grand-total').innerText = lastTotal;
        }
    
    else {
        alert('please enter corret code')
    }
    
})

document.getElementById("home-button").addEventListener('click',function (){
    window.location.reload()
})








