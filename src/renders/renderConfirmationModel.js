

import clearNode from '../helpers/clearNode';
import render from '../render';

function getToppingsString(toppings) {
    let result = '';
  
    toppings.forEach(({ name, amount }, index) => {
      result = index === 0 ? `${name} * ${amount}` : `${result}, ${name} * ${amount}`;
    });
  
    return result;
  }




  export default function renderConfirmationModal(state){
    const{isDisplayConfirmationModal,selectedToppings,selectedSize}=state;

    const parentNode=document.querySelector('.confirmation-modal');
  

    if(!isDisplayConfirmationModal|| !selectedSize){

        return;
    }

    const { name,price}=selectedSize;

    const modalDiv=document.createElement('div');
    modalDiv.classList.add('modal');

    const modalBoxDiv=document.createElement('div');
    modalBoxDiv.classList.add('modal-box');

    modalDiv.append(modalBoxDiv);

    const h1=document.createElement('h1');
    h1.innerHTML='Your Order Details';

    const addressDiv=document.createElement('div');
    addressDiv.classList.add('address');

    const nameP=document.createElement('p');

    const nameStrong=document.createElement('strong');
    nameStrong.innerHTML='CAI HENG';
    nameP.append(nameStrong);

    const streetP=document.createElement('p');
    streetP.innerHTML='Rusell Street';

    const cityP = document.createElement('p');
    cityP.innerText = 'Melbourne 3000';

    const numberP=document.createElement('p');
    numberP.innerHTML='0416413665';

    addressDiv.append(nameP,streetP,cityP,numberP);

    const hr= document.createElement('hr');

    const pizzasDiv=document.createElement('div');
    pizzasDiv.classList.add('pizzas');

    const pizzaDiv=document.createElement('div');
    pizzaDiv.classList.add('pizza');

    pizzasDiv.append(pizzaDiv);

    const itemDiv=document.createElement('div');

    const itemStrong=document.createElement('strong');
    itemStrong.innerHTML=`${name} Pizza`;

    const itemBr=document.createElement('br');

    const itemSpan=document.createElement('span');
    itemSpan.innerHTML = getToppingsString(selectedToppings); 
    // 调用顶部的function

    itemDiv.append(itemStrong,itemBr,itemSpan);

    const priceDiv=document.createElement('div');
    const total= getTotal(state);
    priceDiv.innerHTML=`$${total}`;
    priceDiv.classList.add('price');

    pizzaDiv.append(itemDiv, priceDiv);


    const actionsDiv=document.createElement('div');
    actionsDiv.classList.add('actions');

    const cancelButton=document.createElement('button');
    cancelButton.classList.add('cancel');
    cancelButton.innerText='Cancel';
    cancelButton.onclick=()=>{
        state.isDisplayConfirmationModal=false;
        render(state);
    };

    const confirmButton=document.createElement('button');
    confirmButton.classList.add('confirm');
    confirmButton.innerText='Confirm';

    actionsDiv.append(cancelButton,confirmButton);

    modalBoxDiv.append(h1,addressDiv,hr,pizzasDiv,actionsDiv);
    parentNode.append(modalDiv);




}