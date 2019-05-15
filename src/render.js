
import renderToppings from './renders/renderToppings';
import renderSummary from './renders/renderSummary';
import renderSizes from './renders/renderSizes';
import renderConfirmationModal from './renders/renderConfirmationModel';
import renderTotal from './renders/renderTotal';
import renderDetailsForm from './renders/renderDetailsForm';
import clearNode from './helpers/clearNode';



export default function render(state){
   


    const rootElement=document.querySelector('#app');
    clearNode(rootElement);

    const detailContainer=document.createElement('div');
    detailContainer.classList.add('order-details');
   

    const pizzaViewer=document.createElement('div');
    pizzaViewer.classList.add('pizza-viewer');

    const tableSide=document.createElement('div');
    tableSide.classList.add('table-side');

    const table=document.createElement('div');
    table.classList.add('table');
    pizzaViewer.append(tableSide,table);
    rootElement.append(detailContainer);
  

  
    const pizzaForm=document.createElement('div');
    pizzaForm.classList.add('pizza-form');
  
    const detailsContainer=document.createElement('div');
    detailsContainer.classList.add('section');

    const detailsH2=document.createElement('h2');
    detailsH2.innerText='Enter Your Details';

    const detailsRoot=document.createElement('div');
    detailsRoot.classList.add('details');
    detailsContainer.append(detailsH2,detailsRoot);
   


    const pizzaChooseContainer=document.createElement('div');
    pizzaChooseContainer.classList.add('section');
    pizzaForm.append(detailsContainer,pizzaChooseContainer);
  

    const pizzaH2=document.createElement('h2');
    pizzaH2.innerText='Choose Your Pizzas';

    const pizzacCreator=document.createElement('div');
    pizzacCreator.classList.add('pizza-creator');
    pizzaChooseContainer.append(pizzaH2,pizzacCreator)
  

    const pizzaHeader=document.createElement('div');
    pizzaHeader.classList.add('pizza-header');
    const title=document.createElement('span');
    title.innerText='Pizza 1 *';

    pizzaHeader.append(title);






    const creatorDetails=document.createElement('div');
    creatorDetails.classList.add('creator-details');

    const DetailsH3=document.createElement('h3');
    DetailsH3.innerText='Select the size *';

    const sizeContainer=document.createElement('div');
    sizeContainer.classList.add('container');

    const sizes=document.createElement('div');
    sizes.classList.add('sizes');
    sizeContainer.append(sizes);

    const toppingsH3=document.createElement('h3');
    toppingsH3.innerText='Pick your toppings';

    const toppingsRoot=document.createElement('div');
    toppingsRoot.classList.add('toppings');

    creatorDetails.append(DetailsH3,sizeContainer,toppingsH3,toppingsRoot);



    const pizzaSummary=document.createElement('div');
    pizzaSummary.classList.add('toppinpizza-sumarygs');

    const summaryH2=document.createElement('h2');
    summaryH2.innerText='Order Summary';

    const SummaryUl=document.createElement('ul');
    SummaryUl.classList.add('summary');
    const hr=document.createElement('hr');
    const br=document.createElement('br');
   
    const totalRoot=document.createElement('div');
    totalRoot.classList.add('total');

    pizzaSummary.append(summaryH2,SummaryUl,hr,br,totalRoot);




    const SummaryBtn=document.createElement('div');
    SummaryBtn.classList.add('sumary-button');

    const button=document.createElement('button');
    button.innerText='Place order';
    button.type='submit';
    SummaryBtn.append(button);
    detailContainer.append(pizzaViewer,pizzaForm);
    pizzacCreator.append(pizzaHeader,creatorDetails,pizzaSummary,SummaryBtn);


    renderToppings(state);
    renderSummary(state);
    renderSizes(state);
    renderConfirmationModal(state);
    renderTotal(state);
    renderDetailsForm(state);



    
  }
