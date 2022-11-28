const parrafos = document.querySelectorAll('.parrafo')
const sections = document.querySelectorAll('.section')
const dragImg = document.querySelector('#drag-img')

parrafos.forEach(par => {
    par.addEventListener('dragstart', event => {
        event.dataTransfer.setData('id', par.id)
        const parrafo = document.querySelector(`#${par.id}`)
        // animacion
        event.dataTransfer.setDragImage(dragImg, 25, 25)
        parrafo.classList.toggle('dragged')
    })
})

parrafos.forEach(par => {
    par.addEventListener('dragend', () => {
        // animacion
        const parrafo = document.querySelector(`#${par.id}`)
        parrafo.classList.toggle('dragged')
    })
})

sections.forEach(sec => {
    sec.addEventListener('dragover', event => {
        event.preventDefault()
    })
})

sections.forEach(sec => {
    sec.addEventListener('drop', event => {
        const parrafo = document.querySelector(`#${event.dataTransfer.getData('id')}`)
        if (sec.id === 'delete') {
            parrafo.style.display = 'none'
            sec.style = 'transform: scale(1.1); transition: all 1s;'
            setTimeout(() => {
                sec.style = 'transform: scale(1); transition: all 1s;'
            }, 500);
        } else {
            sec.append(parrafo)
        }
    })
})