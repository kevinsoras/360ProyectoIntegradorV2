

  function errorenviardata(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tal vez has tratado, de no enviar los datos!',
        footer: '<a href>Prueba rellenando todos los campos </a>'
      })
  }
  function correcto(){
    Swal.fire({
        position: 'center',
        icon: 'Gracias',
        title: 'Tu registro ha sido guardado ,disfruta tu paseo virtual.',
        showConfirmButton: false,
        timer: 1500
      })
  }