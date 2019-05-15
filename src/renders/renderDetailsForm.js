
import clearNode from '../helpers/clearNode';
export default function renderDetailsForm(state){
 
    const {inputs}=state;

    const parentNode=document.querySelector('.details');
    clearNode(parentNode);


    inputs.forEach(({label:formlabel,value}) => {
       
       
        const formControlDiv=document.createElement('div');
        formControlDiv.classList.add('form-control');
    
        const label=document.createElement('label');
        label.innerText=formlabel;

        const starSpan=document.createElement('span')
        starSpan.innerText='*';
        

        label.append(starSpan);
    
        const input=document.createElement('input');
        input.placeholder=value;
        input.type='text';
    
        formControlDiv.append(label,input);

        parentNode.append(formControlDiv);
    
        
    });

   
    

}