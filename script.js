let $buttons = document.querySelectorAll('input[type="button"]');
let $custom = document.querySelector('#custom')
let $reset = document.getElementById('reset')
let $form = document.querySelector('.container')
let $tipAmount = document.getElementById('tipAmount')
let $total = document.getElementById('total')
let $input = document.querySelectorAll('input')

let $bill = document.getElementById('bill')
let $people = document.getElementById('people')

let tip = 0




const resetBtnStyle = () => {
  $buttons.forEach(el => {
    el.classList.remove('active-btn')
  });
  $custom.classList.remove('active-custom')
}

document.addEventListener("click", (e)=>{

  // RESET DATOS ✅
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
      }}
    })

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

  
  // AGREGAR TIP ✅
  if(e.target.matches(".tip")){

    tip = parseInt(e.target.value) / 100
    $tipAmount.value = Math.round((tip * $bill.value) / $people.value)

    const total = parseInt($bill.value) + (tip * $bill.value) 
    $total.value = Math.round(total / $people.value)

    if(e.target.matches("#custom")){
      document.addEventListener("input", (e) => {
        if(e.target.value.length > 99) return $custom.value = 0
        $custom.value = e.target.value
        console.log($custom.value)
        
      })
      
    }
    
  }


})

document.addEventListener("input", (e)=>{
 
  
  // MOSTRAR TOTAL ✅
  if(e.target.matches("#bill")){
    
    if(parseFloat(e.target.value) < 0.0) return;
    $tipAmount.value = Math.round((tip * $bill.value) / $people.value)
   
    const total = (tip * $bill.value) 
    
    $total.value = Math.round(parseInt(e.target.value) + parseInt(total))
  }
  
  // NUMERO DE PERSONAS
  if(e.target.matches(".people")){
    $tipAmount.value = Math.round((tip * $bill.value) / $people.value)

    const total = parseInt($bill.value) + (tip * $bill.value) 

    $people.value = parseInt(e.target.value)


    $total.value = Math.round(total / $people.value)
  }
  
}

)




