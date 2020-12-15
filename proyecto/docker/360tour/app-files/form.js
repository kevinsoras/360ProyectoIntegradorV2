
const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    alert("Asd")
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode:'cors',
        body: JSON.stringify(Object.fromEntries(formData))
    });

    x(5);
    const result = await response.json();
    console.log(result)
    if(result.status ==200){
      
      $(document).ready(function(){ 
        $('#closeboton')[0].click(function(){
        }); 
   });
      var x = document.getElementById("popup1");
       x.style.display = "none";
       var x = document.getElementById("botonagregar");
       x.style.display = "none";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Esperamos disfrutes tu paseo virtual.',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tal vez has tratado de no enviar los datos!',
            footer: '<a href>Prueba rellenando todos los campos </a>'
          })
    }


});









































function x( resultado){
  const result = response.json();

  alert("ASd")
}