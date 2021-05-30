const body  = document.querySelector('body')
const changeColor = document.querySelector('.change-color')

const colorOptions = '0123456789ABCDEF'

const randomColor = () =>  {
   let color = '#'
   for (i = 0; i <= 5; i++) {
      color += colorOptions[Math.floor(Math.random() * colorOptions.length)]
   }
   return color;
}

changeColor.addEventListener('click', () => 
   body.style.background = randomColor()

)

