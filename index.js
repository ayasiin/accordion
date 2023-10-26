const items = document.querySelectorAll('.accordion-item')
items.forEach(item =>{
    item.addEventListener('click',()=>{
        const toggle = item.querySelector('.toggle')
        const line = item.querySelector('.line')

        item.classList.toggle('.text-gray-500')
        toggle.classList.toggle('hidden')
        line.classList.toggle('hidden')
    })
})