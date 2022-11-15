function myFunction(x) {
    x.classList.toggle("change");
  }

navbar = document.getElementsByClassName('navbar')
console.log(navbar)
navitem = document.getElementsByClassName('navitem')
console.log(navitem)
container = document.getElementsByClassName('container')
console.log(container)
change = document.getElementsByClassName('change')
console.log(change)
active = document.getElementsByClassName('active')
actnav = document.getElementsByClassName('actnav')

container.addeventlistner('click', () => {
  active.classList.toggle('navbar')
  actnav.classList.toggle('navbar')
})