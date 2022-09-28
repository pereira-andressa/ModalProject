const botao = document.getElementById('open_modal')
botao.addEventListener('click', function (e) {
  const modal = document.getElementById('bg_modal')
  modal.classList.toggle('open')



  // modal.style.display = 'flex'
  // modal.style.opacity = '1'
})

const botao_fechar = document.getElementById('close_modal')
botao_fechar.addEventListener('click', function (e) {
  const modal = document.getElementById('bg_modal')
  modal.classList.toggle('open')


  // modal.style.display = 'none'
  // modal.style.opacity = '0'
})