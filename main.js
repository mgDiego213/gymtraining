  function newImage() {
      var image = document.getElementById('myImage');
      if (image.src.match("assets/image26.png")) {
          image.src = "assets/image27.png";
      } else {
          image.src = "assets/image26.png";
      }
  }
  function newImage(imageId, image1, image2) {
      var image = document.getElementById(imageId);
      if (image.src.match(image1)) {
          image.src = image2;
      } else {
          image.src = image1;
      }
  }
  function testage () {
    var grade = prompt ("How old are you?");
      if (grade >= 18) {
        alert ("You can continue your journey");
        } else {
        alert ("Get and instructor to help you with the exercises");
      }}

   //Metodo Generación Formulario
   	function GeneraForm(){
   		////Crear el objeto formulario
   		let formulario=document.createElement("form");

   		////Crear el objeto label de titulo
   		let titulo=document.createElement("label");

   		////Crear el objeto caja de texto Edad
   		let cajaTextEdad=document.createElement("input");

   		////Crear el objeto caja de texto Email
   		let cajaTextEmail=document.createElement("input");

   		////Crear el objeto boton
   		let boton=document.createElement("input");

   		////Asignar atributos al objeto formulario
           	formulario.setAttribute('method', "post");//Asignar el atributo method
           	formulario.setAttribute('action', "");//Asignar el atributo action
           	formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

           	////Asignar atributos al objeto caja de texto de Edad
           	cajaTextEdad.setAttribute('type', "text");//Asignar el atributo type
           	cajaTextEdad.setAttribute('placeholder', "Edad");//Asignar el atributo placeholder
           	cajaTextEdad.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

           	////Asignar atributos al objeto caja de texto de Email
           	cajaTextEmail.setAttribute('type', "text");//Asignar el atributo type
           	cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
           	cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

   		////Asignar atributos al objeto boton
   		boton.setAttribute('type', "button");//Asignar el atributo type
           	boton.setAttribute('value', "Enviar");//Asignar el atributo value
           	boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
           	boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick

           	titulo.innerHTML='<h1>Contacto</h1>';//Asignar el texto de titulo en el objeto titulo
           	formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
           	formulario.appendChild(cajaTextEdad);//Agregar el objeto caja de texto Edad al objeto formulario
           	formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
           	formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
           	document.getElementById('ContentFormulario').appendChild(formulario);//Agregar el formulario a la etiquete con el ID
   	}
