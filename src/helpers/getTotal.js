


export default function getTotal(state){
    const {selectedToppings,selectedSize}=state;
    let total=selectedSize ?+ selectedSize.price:0; 
    //选中pizza size换价格

    selectedToppings.forEach(({price,amount}) => {
        const selectedToppingTotal=price*amount;
        total=total+selectedToppingTotal;
    });
    return total;
}