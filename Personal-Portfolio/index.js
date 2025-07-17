const lis_a = document.querySelectorAll('.navbar__ul li a');

function removeClasses() {
        lis_a.forEach(anchor => {
        anchor.classList.remove('active')
    })
}

removeClasses() 


lis_a.forEach(anchor => { 
    anchor.addEventListener('click', () => {
        removeClasses()
        anchor.classList.add('active')
    })
})