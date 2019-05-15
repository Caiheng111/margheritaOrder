

import render from './render';
function main(){
    const toppings= [{
        name:'Anchovy',
        price:'0.69',
        image:'./image/anchovy.svg',
      },{
         name:'Bacon',
         price:'0.69',
         image:'./image/bacon.svg',
       },{
         name:'Basil',
         price:'0.69',
         image:'./image/basil.svg',
       },{ 
          name:'Chili',
          price:'0.69',
          image:'./image/chili.svg',
       },{
         name:'Mozzarella',
         price:'0.69',
         image:'./image/mozzarella.svg',
       },{
         name:'Mushroom',
         price:'0.69',
         image:'./image/mushroom.svg',
       },{
         name:'Olive',
         price:'0.69',
         image:'./image/olive.svg',
       },{
         name:'Onion',
         price:'0.69',
         image:'./image/onion.svg',
       },{
         name:'Pepper',
         price:'0.69',
         image:'./image/pepper.svg',
       },{
         name:'Peperion',
         price:'0.69',
         image:'./image/pepperoni.svg',
       },{
         name:'Sweetcorn',
         price:'0.69',
         image:'./image/sweetcorn.svg',
       },{
         name:'Tomato',
         price:'0.69',
         image:'./image/tomato.svg',
       }];


       const sizes=[{
         name:'small',
         inches:'9',
         price:'8.99',
         image:'./image/size-S.png'
       },{
         name:'medium',
         inches:'11',
         price:'10.99',
         image:'./image/size-M.png'
       },{
         name:'large',
         inches:'13',
         price:'12.99',
         image:'./image/size-L.png'
       }];



       const inputs=[{
         label: 'Name',
         value: 'John Smith'
       }, {
         label: 'Email',
         value: 'Entail your Emial'
       }, {
         label: 'Confirm Email',
         value: 'Confirm your email'
       }, {
         label: 'Address',
         value: '44 Pizza Street'
       }, {
         label: 'Post Code',
         value: '3053 VIC'
       }, {
         label: 'Contact Number',
         value: '0435678633'
       }];



       const selectedToppings = [];
       const state={
          toppings,
          selectedToppings,
          sizes,
          selectedSize:null,
          isDisplayConfirmationModal:false,
          inputs

 

       };
       window.state=state;


      render(state);



       document.querySelector('button[type="submit"]').onclick = () => {
         state.isDisplayConfirmationModal = true;
         render(state);
       }

}

  document.addEventListener('DOMContentLoaded',main);
