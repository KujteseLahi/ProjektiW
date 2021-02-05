function changeForm(number){
    var divs=document.getElementsByClassName('forms');
   
    if(number==0){
      //show login
      divs[0].classList.add('form-style');
    divs[0].classList.remove('hidden');
      //hide register
      divs[1].classList.remove('form-style');
      divs[1].classList.add('hidden');
    
    
    

    }else if(number == 1){
      //show register
      divs[1].classList.add('form-style');
      divs[1].classList.remove('hidden');
      //hide us
      divs[0].classList.remove('form-style');
      divs[0].classList.add('hidden');
      

    }
}