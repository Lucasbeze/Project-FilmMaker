export default function() {
  function showModal() {
  const element = document.querySelector('.modal')
  element.classList.add('show-modal')
  console.log('funcionou')
}

return showModal
}
