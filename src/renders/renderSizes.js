

import render from '../render';
import clearNode from '../helpers/clearNode';

export default function renderSizes(state){
    const {sizes,selectedSize}=state;
 
    const parentNode=document.querySelector('.sizes');
 
    
    sizes.forEach((size) => {
        
        const {name,image,inches}=size;
        const sizeDiv=document.createElement('div');
        sizeDiv.classList.add('size');

    
        sizeDiv.onclick=()=>{
            state.selectedSize=size;
            render(state);
        }

        if (selectedSize && name===selectedSize.name){
            sizeDiv.classList.add('active');

        }

        const pizzaImg=document.createElement('img');
        pizzaImg.src=image;
        pizzaImg.classList.add('pizza');

        const sizeSpan=document.createElement('span');
        sizeSpan.innerHTML=`${name} (${inches}')`;

        sizeDiv.append(pizzaImg,sizeSpan);
        parentNode.append(sizeDiv);
       
        
    });
}