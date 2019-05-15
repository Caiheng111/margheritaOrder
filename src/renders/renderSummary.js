



  import render from '../render';
  import clearNode from '../helpers/clearNode';

function onAddToppingClick(topping,state){
    const {selectedToppings}=state;

    const newSelectedToppings=selectedToppings.map(selectedTopping=>{
      const {name}=selectedTopping;

      if(name===topping.name){
        const { amount } = topping;
        const newAmount = amount + 1;
       
        return{
          ...topping,
          amount:newAmount,
        }
      }
      return selectedTopping;
    });

    state .selectedToppings=newSelectedToppings;
    render(state);

  }

  function onMinusToppingClick(topping,state){
    const {selectedToppings}=state;

    const newSelectedToppings=selectedToppings.map(selectedTopping=>{
      const {name}=selectedTopping;

      if(name===topping.name){
        const { amount } = topping;
        const newAmount = amount -1;

        if(newAmount===0){
           return undefined;
        }
       
        return{
          ...topping,
          amount:newAmount,
        }
      }
      return selectedTopping;
    });

    state .selectedToppings=newSelectedToppings.filter(e=>!!e);
    render(state);

  }
  



   export default function renderSummary(state){
     const {selectedToppings,selectedSize}=state;
  
     const parentNode=document.querySelector('ul.summary');
     clearNode(parentNode);


     let price=0;
    //  LARGE SIZE PIZZA
     if (selectedSize){
       
      const {name,price}=selectedSize;
      
      const pizzaPriceLi=document.createElement('li');
      const nameSpan=document.createElement('span');
      nameSpan.innerText=`${name} Pizza`;

      const priceSpan=document.createElement('span');
      priceSpan.innerText=`$${price}`;

      pizzaPriceLi.append(nameSpan,priceSpan);
      parentNode.append(pizzaPriceLi);
    }


    // selectedToppings
      const {name,amount}=selectedToppings;
     selectedToppings.forEach(selectedTopping=>{
      
      const { name,amount,price}=selectedTopping;

      const li=document.createElement('li');

      const addButton=document.createElement('button');
      addButton.innerHTML=`+`;
      addButton.classList.add('amount');
      addButton.onclick=()=>{
        onAddToppingClick(selectedTopping,state);
      }

      const minusButton=document.createElement('button');
      minusButton.classList.add('amount');
      minusButton.innerHTML=`-`;
      minusButton.onclick=()=>{
        onMinusToppingClick(selectedTopping,state);
      }

      const nameSpan=document.createElement('span');
      nameSpan.innerHTML=name;

      const amountSpan=document.createElement('span');
      amountSpan.innerHTML=`* ${amount}`;

      const priceSpan=document.createElement('span');
      priceSpan.innerHTML= `$ ${price}`;

      const totalSpan=document.createElement('span');
      totalSpan.innerHTML=`$ ${price*amount}`;


      li.append(addButton,minusButton,nameSpan,amountSpan,totalSpan);
      parentNode.append(li);




      });
    }

