
 import clearNode from '../helpers/clearNode';
 import getTotal from '../helpers/getTotal';

 
 export default function renderTotal(state){
    
    const parentNode=document.querySelector('.total');
    clearNode(parentNode);

    const total =getTotal(state);

    const totalSpan=document.createElement('span');
    totalSpan.innerText=`Total:$${total}`;

    parentNode.append(totalSpan);


}