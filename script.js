const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  consolelog('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName === 'flex-grow');
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => addEventListener('click', toggleOpen));

panels.forEach(panel => addEventListener('transitionend' toggleActive));

