
 import render from '../render';
 import clearNode from '../helpers/clearNode';
 
 
 function onToppingClick(topping,state){
    const {selectedToppings}=state;
    const isExists= state.selectedToppings.find(({name})=>name===topping.name);
 
    const newSelectedToppings= !isExists 
    ?[{...topping, amount:1}, ...selectedToppings]
    :selectedToppings.filter(({name})=>name !==topping.name);


    state.selectedToppings=newSelectedToppings;

    render(state);
    

 }


export default function renderToppings(state){
    const {toppings,selectedToppings}= state;

    const parentNode=document.querySelector('.toppings');
    clearNode(parentNode);

    toppings.forEach(topping => {
       const {name:toppingName,image:toppingImg} =topping;
       const container=document.createElement('div');
       container.classList.add('topping');

       if (selectedToppings.find(({name})=>name===topping.name)){
         container.classList.add('active');
       }

       container.onclick=function(){
          onToppingClick(topping,state);
       };
  
       const imageContainer= document.createElement('div');
       imageContainer.classList.add('img');
 
       const image=document.createElement('img');
       image.alt=toppingName;
       image.src=toppingImg;
 
       const name=document.createElement('span');
       name.innerHTML=toppingName;
 
       container.append(imageContainer,name);
       imageContainer.append(image);
       parentNode.append(container);

       
    });

    
   
 }