// Responsive Toogle Menu
var navLinks = document.getElementById('navLinks')

function showMenu() {
  navLinks.style.top = '0'
}

function hideMenu() {
  navLinks.style.top = '-1000px'
}

// Logo Carousel
$('.logo-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
})

// Contact Modal Form
var modal = document.getElementById('contact-modal')
var btn = document.getElementById('contact-btn')
var closeModal = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.style.display = 'block'
  $('#form').each(function () {
    this.reset()
  })
}

closeModal.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// Form Validation
var form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  modal.style.display = 'none'
  var x = document.querySelector('form.form').elements
  var userDetails = {
    nom: x['nom'].value,
    prenom: x['prenom'].value,
    societe: x['societe'].value,
    email: x['email'].value,
    telephone: x['telephone'].value,
    sujet: x['sujet'].value,
    message: x['message'].value.trim(),
  }
  console.log('User details: ', userDetails)
  alert('Form validated and console logged successfuly')
  e.preventDefault()
})
