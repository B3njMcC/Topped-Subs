let subOrder = [];

makeSub = () => {

    let subTotal = 0;
    
    let subName = document.getElementById('name').value;
    let breadType = document.getElementById('bread-type').value;breadType

    if(breadType === 'Plain White'){
        subTotal = subTotal + 10;
    } else if(breadType === 'Sourdough'){
        subTotal = subTotal + 15;
    } else if(breadType === 'Wholewheat'){
            subTotal = subTotal + 20;
    } else if(breadType === 'Ciabatta'){
            subTotal = subTotal + 25;
    }

    let toppingSelected = [];  
    let toppingElements = document.getElementsByName('toppings');
    
    for (let i = 0; i < toppingElements.length; i++) {
      if (toppingElements[i].checked) {
        toppingSelected.push(toppingElements[i].id);  
        subTotal = subTotal + +toppingElements[i].dataset.cost;
      }
    }

            let sauceOptions = document.getElementsByName('sauce-radio');
            let sauceValue;

            for(let i = 0; i < sauceOptions.length; i++){
                if(sauceOptions[i].checked){
                    sauceValue = sauceOptions[i].id;
                    subTotal = subTotal + +sauceOptions[i].dataset.cost;
                }
            }

                subOrder.push({
                    subName: subName,
                    breadType: breadType,
                    toppings: toppingSelected,
                    sauce: sauceValue,
                    subPrice: subTotal
                });

                console.log(subOrder);
}


subCard = () =>{
    let subArea = document.getElementsByName('CardSlots');
    
    for(let i = 0; i < subOrder.length; i++){
        let name = subOrder[i].subName;
        let size
    }
}

