function MouseEvent() {
    var p = document.querySelector('p')
    p.style.cursor = 'pointer';
    p.addEventListener('mouseenter',() => p.style.color = 'orange')
    p.addEventListener('mouseleave',() => p.style.color = 'white')
    p.addEventListener ('click', () => alert('Felicitaciones! jejejejeje'))
}
MouseEvent();