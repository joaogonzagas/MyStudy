function cadastrar() {
  const formulario = document.querySelector('form')
  const usuarios = []

  function cadastro(e) {
    e.preventDefault()
    const dadosEmail = document.querySelector('.email').value
    const dadosSenha = document.querySelector('.senha').value
    usuarios.push(
      {
        email: dadosEmail,
        senha: dadosSenha,
      })    
    alert('Cadastro efetuado! \n BONS ESTUDOS')
    window.location.assign("../../pages/Home/index.html")
  }

  formulario.addEventListener('submit', cadastro)
}

function minhasMaterias() {
  let formulario = document.querySelector('.cad')

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let inpTxt = document.querySelector('#materia').value
    let inpHr = document.querySelector('#hr').value
    localStorage.setItem('materia', inpTxt)
    localStorage.setItem('horario', inpHr)
    document.location.reload(true)
    window.location.href = "../Meu cronograma/index.html"

    licao()
  })
}
function licao() {
  let h1 = document.querySelector('#h1')
  let txt1 = document.querySelector('#txt1')
  h1.innerHTML = localStorage.getItem('horario')
  txt1.innerHTML = localStorage.getItem('materia')

  let data = new Date()
  let dias = data.getDay()
  let tuesday = document.querySelector('#Tuesday')
  if (dias == 0) {
    tuesday.innerHTML = 'Domingo'
    return
  }
  if (dias == 1) {
    tuesday.innerHTML = 'Segunda'
    return
  }
  if (dias == 2) {
    tuesday.innerHTML = 'Terça'
    return
  }
  if (dias == 3) {
    tuesday.innerHTML = 'Quarta'
    return
  }
  if (dias == 4) {
    tuesday.innerHTML = 'Quinta'
    return
  }
  if (dias == 5) {
    tuesday.innerHTML = 'Sexta'
    return
  }
  if (dias == 6) {
    tuesday.innerHTML = 'Sábado'
    return
  }
}

function jornada() {
  alert('Desculpe! Página em desenvolvimento')
}
function esqueciSenha () {
  alert ('Faça um novo cadastro')
  document.location.reload(true)
}


















































































































