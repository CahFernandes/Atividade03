document.getElementById('botao').onclick = function() {
    document.getElementById('mensagem').innerHTML = 'Você clicou no botão!';
};

function classToggle() {
    const navs = document.querySelectorAll('.collapsibleNavId')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.navbar-toggler-icon')
    .addEventListener('click', classToggle);

function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}    

function maskc(o, f) {
  setTimeout(function() {
    var v = mcpf(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mcpf(cpf) {  
  var c = cpf.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
  
  return c;
}

function maske(o, f) {
  setTimeout(function() {
    var v = mcep(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mcep(cep) {  
  var e = cep.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')   
  return e;
}

function envia() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var cpf = document.getElementById("cpf").value;
  var data = document.getElementById("data").value;
  var sexo = document.getElementById("sexo").value;
  var cep = document.getElementById("cep").value;
  var telefone = document.getElementById("telefone").value;
  if(nome == '' || sobrenome == '' || cpf == '' || data == '' || sexo == '' || cep == '' || telefone == '') {
      alert("Preencha todos os campos obrigatórios!");
      sobrenome
  } else {
      document.getElementById("formulario").submit();
  }   
}

function validacao(event) {
  // Implementar validação
  event.preventDefault(); // Para evitar envio
  alert("Formulário enviado com sucesso!");
}

function toggleMenu() {
  const navbar = document.getElementById('navbarNav');
  navbar.classList.toggle('show');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function nextSlide() {
  // Lógica do carrossel
  const slides = document.querySelectorAll('.carouselProjetos');
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide

  slides[currentSlide].classList.add('active');
}