function changeForm(number){
    var divs=document.getElementsByClassName('forms');
   
    if(number==0){
      //show login
      divs[0].classList.add('form-style');
    divs[0].classList.remove('hidden');
      //hide register
      divs[1].classList.remove('form-style');
      divs[1].classList.add('hidden');
      //hide cost
      divs[2].classList.remove('form-style');
      divs[2].classList.add('hidden')
    

    }else if(number == 1){
      //show register
      divs[1].classList.add('form-style');
      divs[1].classList.remove('hidden');
      //hide us
      divs[0].classList.remove('form-style');
      divs[0].classList.add('hidden');
      //hide cost
      divs[2].classList.remove('form-style');
      divs[2].classList.remove('hidden1')

    }else if(number == 2){
      //show register
      divs[2].classList.add('form-style');
      divs[2].classList.remove('hidden1','hidden2');
      //hide login
      divs[0].classList.remove('form-style');
      divs[0].classList.add('hidden');
      //hide login
      divs[1].classList.remove('form-style');
      divs[1].classList.add('hidden');

    }

  }