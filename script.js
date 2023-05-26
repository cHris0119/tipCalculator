let $buttons = document.querySelectorAll('input[type="button"]');
let $custom = document.querySelector('#custom')
let $reset = document.getElementById('reset')
let $form = document.querySelector('.container')
let $tipAmount = document.getElementById('tipAmount')
let $total = document.getElementById('total')
let $input = document.querySelectorAll('input')

let $bill = document.getElementById('bill')
let $people = document.getElementById('people')




const resetBtnStyle = () => {
  $buttons.forEach(el => {
    el.classList.remove('active-btn')
  });
  $custom.classList.remove('active-custom')
}

document.addEventListener("click", (e) => {

  if(e.target.type === "button"){
    let bill = parseFloat($bill.value)
    let people = parseFloat($people.value)
    resetBtnStyle()
    e.target.classList.add('active-btn')
    
    if(parseFloat($total.value) > 0){
      let tip = bill * (parseFloat(e.target.value)/100)
      let total = (bill + tip) / people
      total = total.toFixed(1)
      $total.value = total
      console.log(total)
    }
  };

  if(e.target.matches('#custom')){
    resetBtnStyle()
    e.target.classList.add('active-custom')
    if(e.target.value === ''){
      e.target.value = '0'
    }
  }

  if(e.target.matches('.bill') || e.target.matches('.people')){
    let span = e.target.previousElementSibling.lastElementChild
    
    if(e.target.value <= '0'){
      e.target.value = ''
      span.style.display = 'block'
    }
    e.target.addEventListener('input', e => {
      let bill = parseFloat($bill.value)
      let people = parseFloat($people.value)
      if(e.target.value > '0'){
        span.style.display = 'none'
        if(e.target.matches('.bill')){
          let total = bill/people
          total = total.toFixed(1)
          console.log(total)
          $total.value = total
        }
        if(e.target.matches('.people')){
          let total = bill/people
          total = total.toFixed(1)
          console.log(total)
          $total.value = total
        }
      } else{
        $total.value = '0'
        span.style.display = 'block'
      }
    })
  }
  if(e.target.matches('#reset')){
    e.preventDefault()
    $input.forEach(el =>{
      if(el.type === 'number'){
        el.value = el.defaultValue
      }
      if(el.type === 'button'){
        el.classList.remove('active-btn')
      }
      $reset.classList.remove('active-btn')
      $reset.disabled = true
    })
  }

  $input.forEach(el => {
    if(el.type === 'number'){
      if(el.value >= 2 ){
        $reset.classList.add('active-btn')
        $reset.disabled = false
      }
    }
    if(el.type === 'button'){
      if(el.classList.contains('active-btn')){
        $reset.classList.add('active-btn')
        $reset.disabled = false
      }
     
    }

  })
  
});







