
// 'use strict';
// $(document).ready(() => {

import axios from "axios";
import BlockUI from "./componentes/BlockUI/BlockUI";

// });

//#region RUTAS AL APP DE LOS MODELOS
const
   url_modelo_usuario_app = "../Backend/Usuarios/App.php",
   url_modelo_perfil_app = "../Backend/Perfil/App.php",
   url_modelo_menu_app = "../Backend/Menu/App.php",
   url_modelo_permiso_app = "../Backend/Permiso/App.php"
;
//#endregion


/*Select2*/
$.fn.select2.defaults.set('language', 'es');
moment.locale('es');



function mayusculas(e) {
   e.value = e.value.toUpperCase();
};

function focusSelect2(select2) {
   select2.click(function (e) {
      try {
         var buscador = $(".select2-search__field");
         buscador[0].focus();
      } catch (e) {

      }
   });
   select2.keydown(function (e) {
      try {
         var buscador = $(".select2-search__field");
         buscador[0].focus();
      } catch (e) {

      }
   });
}


/* --- FUNCIONES DE CAJON--- */
export async function Request(...props) {
   console.log("🚀 ~ file: funciones_globales.jsx ~ line 52 ~ Request ~ props", props)
   // BlockUI
   
   // const request = async () => {
      console.log("ahora los props");
      console.log(props);
      await axios({
         method: props.method,
         url: props.url,
         // headers: {'Authorization': `Bearer ${props.token}`},
         data: props.data,
         type: props.type
      })
      .then (axiosResponse => {
         console.log("jkhadklhsajkdsa");
         let dataResponse = axiosResponse.response
         mostrarToast("success", dataResponse)
      })
      .catch (axiosResponse => {
         let { message } = axiosResponse.response.data.errors
         mostrarToast("Error", message[0])
      })
      .then (axiosResponse => { //el Finally
         mostrarToast("success", "FIN")
      })
   // }
}














function peticionRegistrarEditar(url,datos,funcion_success) {
   $.ajax({
      type: "POST",
      url: url,
      data: datos,
      dataType: "json",
      beforeSend: () => {
         //mostrar pantalla cargando
         $.blockUI({ message: `<h4> REALIZANDO PETICIÓN, POR FAVOR ESPERE...</h4><br><div class='spinner-border text-light' role='status'> <span class='sr-only'></span></div>`, css: { backgroundColor: null, color: '#fff', border: null } });
      },
      success: (ajaxResponse) => {
         if (ajaxResponse.Resultado) {
            Swal.fire({
               icon: ajaxResponse.Icono_alerta,
               title: ajaxResponse.Titulo_alerta,
               html: ajaxResponse.Texto_alerta,
               showConfirmButton: false,
               confirmButtonColor: '#494E53',
               timer: 1500,
               allowEscapeKey: false,
               allowOutsideClick: false,
               showConfirmButton: false,
            })
            funcion_success();

         } else {
            Swal.fire({
               icon: "error",
               title: "Oops...!",
               text: `${ajaxResponse.Texto_alerta}`,
               showConfirmButton: true,
               confirmButtonColor: '#494E53'
            })
         }
      },
      error: (ajaxResponse) => {
         Swal.fire({
            icon: "error",
            title: "Oops...!",
            text: `Hubo un error, verifica tus datos e intenta de nuevo.`,
            showConfirmButton: true,
            confirmButtonColor: '#494E53'
         })
      },
      complete: () => {
         //limpiar formulario
         btn_reset_formulario.click();
         //quitar pantalla cargando
         $.unblockUI();
      }
   });
}

function peticionRellenarTabla(url,datos) {
   $.ajax({
      type: "POST",
      url: url,
      data: datos,
      dataType: "json",
      beforeSend: () => {
         //mostrar pantalla cargando
         $.blockUI({ message: `<h4> REALIZANDO PETICIÓN, POR FAVOR ESPERE...</h4><br><div class='spinner-border text-light' role='status'> <span class='sr-only'></span></div>`, css: { backgroundColor: null, color: '#fff', border: null } });
      },
      success: (ajaxResponse) => {
         if (ajaxResponse.Resultado) {
            pintarTabla(ajaxResponse);

         } else {
            Swal.fire({
               icon: "error",
               title: "Oops...!",
               text: `${ajaxResponse.Texto_alerta}`,
               showConfirmButton: true,
               confirmButtonColor: '#494E53'
            })
         }
      },
      error: (ajaxResponse) => {
         Swal.fire({
            icon: "error",
            title: "Oops...!",
            text: `Hubo un error, verifica tus datos e intenta de nuevo.`,
            showConfirmButton: true,
            confirmButtonColor: '#494E53'
         })
      },
      complete: () => {
         //quitar pantalla cargando
         $.unblockUI();
      }
   });
}

function peticionEditarObjeto(url,datos,) {
   $.ajax({
      type: "POST",
      url: url,
      data: datos,
      dataType: "json",
      beforeSend: function () {
         //mostrar pantalla cargando
         $.blockUI({ message: `<h4> REALIZANDO PETICIÓN, POR FAVOR ESPERE...</h4><br><div class='spinner-border text-light' role='status'> <span class='sr-only'></span></div>`, css: { backgroundColor: null, color: '#fff', border: null } });
      },
      success: (ajaxResponse) => {
         if (ajaxResponse.Resultado) {
            rellenarFormulario(ajaxResponse);

         } else {
            Swal.fire({
               icon: "error",
               title: "Oops...!",
               text: `${ajaxResponse.Texto_alerta}`,
               showConfirmButton: true,
               confirmButtonColor: '#494E53'
            })
         }
      },
      error: (ajaxResponse) => {
         Swal.fire({
            icon: "error",
            title: "Oops...!",
            text: `Hubo un error, verifica tus datos e intenta de nuevo.`,
            showConfirmButton: true,
            confirmButtonColor: '#494E53'
         })
      },
      complete: () => {
         //quitar pantalla cargando
         $.unblockUI();
      }
   });
}

function peticionEliminarObjeto(titulo,texto,url,datos) {
   Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
   }).then((result) => {
      if (result.isConfirmed) {
         $.ajax({
            type: "POST",
            url: url,
            data: datos,
            dataType: "json",
            beforeSend: function () {
               //mostrar pantalla cargando
               $.blockUI({ message: `<h4> REALIZANDO PETICIÓN, POR FAVOR ESPERE...</h4><br><div class='spinner-border text-light' role='status'> <span class='sr-only'></span></div>`, css: { backgroundColor: null, color: '#fff', border: null } });
            },
            success: (ajaxResponse) => {
               if (ajaxResponse.Resultado) {
                  Swal.fire({
                     icon: ajaxResponse.Icono_alerta,
                     title: ajaxResponse.Titulo_alerta,
                     html: ajaxResponse.Texto_alerta,
                     showConfirmButton: false,
                     confirmButtonColor: '#494E53',
                     timer: 1500,
                     allowEscapeKey: false,
                     allowOutsideClick: false,
                     showConfirmButton: false,
                  })
                  relllenarTabla();

               } else {
                  Swal.fire({
                     icon: "error",
                     title: "Oops...!",
                     text: `${ajaxResponse.Texto_alerta}`,
                     showConfirmButton: true,
                     confirmButtonColor: '#494E53'
                  })
               }
            },
            error: (ajaxResponse) => {
               Swal.fire({
                  icon: "error",
                  title: "Oops...!",
                  text: `Hubo un error, verifica tus datos e intenta de nuevo.`,
                  showConfirmButton: true,
                  confirmButtonColor: '#494E53'
               })
            },
            complete: () => {
               //quitar pantalla cargando
               $.unblockUI();
            }
         });
      }
   });
}

function mostrarToast(icono, mensaje, posicion) {
   if (posicion == null) {posicion = 'top-end'}
   const Toast = Swal.mixin({
      toast: true,
      position: posicion,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer)
         toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
   })

   Toast.fire({icon: icono, title: mensaje})
}
function mostrarBlockOutCargando(title) {
   if (title == null) {title= 'Cargando...'}
   Swal.fire({
      title: title,
      // html: 'I will close in <b></b> milliseconds.',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
         Swal.showLoading()
      }
   })
}
function mostrarBlockOutListo() {
   Swal.fire({
      title: "LISTO!",
      timer: 500,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
         Swal.showLoading()
      }
   })
}
function validarInput(input, nombre_campo) {
   if (input.val() == "" || input.val() == -1 || input.val() == "-1") {
      mostrarToast('error', `Campo ${nombre_campo} vacio.`);
      // toastr.error(`Campo ${nombre_campo} vacio.`,'ERROR');
      input.focus();
      return false;
   }
   return true;
}
function formatearCantidadMX(cantidad) {
   let total = new Intl.NumberFormat("es-MX").format(cantidad);
   if (!total.includes(".")) {total+=".00"}
   let decimales = total.split(".").reverse();
   if (decimales[0].length == 1) {total+="0"}
   if (cantidad == 0) {total=="0.00"}

   return total;
}
function formatearCantidadDeRenglones(tds) {
   $.each(tds, function (i, elemento) {
      let td = $(elemento);
      let cantidad = td.text();
      let cantidad_formateada = formatearCantidadMX(cantidad);
      td.html(`$ ${cantidad_formateada}`);

   });
}
function formatearFechaHora(la_fecha) {
   let fecha = new Date(parseInt(la_fecha.substr(6)));
   let fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(fecha);

   return fecha_hora;
}
function formatearFechaHoraNormal(la_fecha) {
   let fecha = new Date(la_fecha);
   let fecha_hora;

   if (la_fecha.length <= 10) {
      fecha = new Date(fecha.setDate(fecha.getDate()+1));
      return fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric'}).format(fecha);
   }

   fecha = new Date(la_fecha);
   return fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(fecha);
}
/* --- FUNCIONES DE CAJON--- */


//VALIDAR RANGO DE FECHAS
function validarRangoFechas(accion) {
   let
      fecha_actual = new Date();
      ayer = new Date(fecha_actual.setDate(fecha_actual.getDate()-1));
      ayer = new Date(ayer.setHours(23,59,59))
      ayer = ayer.getTime();

      fecha1 = new Date(input_fecha_inicial.val());
      fecha1 = new Date(fecha1.setDate(fecha1.getDate()+1));
      fecha1 = new Date(fecha1.setHours(0,0,0));
      data_fecha1 = new Date(fecha1).getTime();

      fecha2 = new Date(input_fecha_final.val());
      fecha2 = new Date(fecha2.setDate(fecha2.getDate()+1));
      fecha2 = new Date(fecha2.setHours(11,59,59));
      data_fecha2 = new Date(fecha2).getTime();

   if(accion == "crear"){
      if (data_fecha1 <= ayer) {
         mostrarToast("warning", "No puedes publicar con fecha anterior a hoy.");
         input_fecha_inicial.focus();
         return false;
      }
   }
   if (data_fecha1 > data_fecha2) {
      mostrarToast("warning", "Rango de fechas inválido.");
      input_fecha_final.focus();
      return false;
   }
   return true;
}

//AGREGAR DATO AL ARRAY
function agregarDatoAlArray(nombre,valor,array) {
   //array obtenido de formulario_modal.serializeArray()
   // console.log(nombre,valor,array);
   let dato_nuevo = {
      name: nombre,
      value: valor
   }
   array.push(dato_nuevo)
}

//RESETEAR SELECT 2
function resetearSelect2(select2,url,datos) {
   select2.prop('selectedIndex', 0);
   select2.val("-1");
   $(`#select2-${select2[0].name}-container`).text('Selecciona una opción');
   $(`#select2-${select2[0].name}-container`).attr('title', 'Selecciona una opción');
   rellenarSelect2(url,datos,-1,select2[0].name);
}
/* ------ RELLENAR SELECTS 2 ------ */

// Select2 Padre
function rellenarSelect2(url,datos,id_activo,nombre_select) {
   $.ajax({
      type: "POST",
      url: url,
      data: datos,
      dataType: "json",
      success: function (ajaxResponse) {
         if (ajaxResponse.Resultado) {
            switch (nombre_select) {
               case "input_id_padre":
                  rellenarSelect2Padre(ajaxResponse,id_activo);
                  break;

               case "input_id_perfil":
                  rellenarSelect2Perfiles(ajaxResponse,id_activo);
                  break;

               default:
                  break;
            }

         } else {
            Swal.fire({
               icon: "error",
               title: "Oops...!",
               text: `${ajaxResponse.Texto_alerta}`,
               showConfirmButton: true,
               confirmButtonColor: '#494E53'
            })
         }
      }
   });
}

function rellenarSelect2Padre(ajaxResponse,id_activo) {
   let coleccion = ajaxResponse.Datos;

   input_id_padre.html("");

   let opciones = /*HTML*/ `
      <option value="-1">Selecciona una opción</option>
   `;

   if (id_activo == 0) {
      opciones += /*HTML*/ `
         <option value="0" selected>*** Módulo Padre ***</option>
      `;
      input_url.attr('readonly', true);
      input_url.val('#');
      input_descripcion.focus();
   } else {
      opciones += /*HTML*/ `
         <option value="0">*** Módulo Padre ***</option>
      `;
      input_url.attr('readonly', false);
   }


   input_id_padre.append(opciones);

   $.each(coleccion, function (i, objeto) {
      if (objeto.menu_id == id_activo)
         input_id_padre.append(`<option selected value='${objeto.menu_id}'>${objeto.menu_descripcion}</option>`);
      else
         input_id_padre.append(`<option value='${objeto.menu_id}'>${objeto.menu_descripcion}</option>`);
   });
}

// Select2 ---
function rellenarSelect2Perfiles(ajaxResponse,id_activo) {
   let coleccion = ajaxResponse.Datos;

   input_id_perfil.html("");

   let opciones = /*HTML*/ `
      <option value="-1">Selecciona una opción</option>
   `;

   input_id_perfil.append(opciones);

   $.each(coleccion, function (i, objeto) {
      if (objeto.perfil_id == id_activo)
         input_id_perfil.append(`<option selected value='${objeto.perfil_id}'>${objeto.perfil_perfil}</option>`);
      else
         input_id_perfil.append(`<option value='${objeto.perfil_id}'>${objeto.perfil_perfil}</option>`);
   });
}


/* ------ RELLENAR SELECTS 2 ------ */


/*function count(elemento,limite){ //tiene error en el kill()
   var counter = { var: 0 };
   TweenMax.to(counter, 2, {
     var: limite,
     onUpdate: function () {
       var number = Math.ceil(counter.var);
       let cantidadFormateada = formatearCantidadMX(number);
       elemento.html(`$ ${cantidadFormateada}`);
       if(number === counter.var){ count.kill(); }
     },
     onComplete: function(){
       count();
     },
     ease:Circ.easeOut
   });
 }
 */

/*function contadorAnimado(elemento,cantidad) {  //se limita a llegar hasta donde le perimte la duracion
   elemento.each(function() {
      var $this = $(this),
         countTo = cantidad;
      let cantidadFormateada
      const duracion= cantidad/10;

      $({ countNum: $this.text()}).animate({
      countNum: countTo
      },
      {
      duration: 2000,
      easing:'linear',
      step: function() {
         cantidadFormateada = formatearCantidadMX(this.countNum);
         $this.text(`$ ${cantidadFormateada}`);
         // $this.text(Math.floor(this.countNum));
      },
      complete: function() {
         $this.text(`$ ${cantidadFormateada}`);
         // $this.text(this.countNum);
         //alert('finished');
      }

      });

   });
}
*/



/* FUNCIONES LOGIN */
function keyInicia(){
   if (window.event.keyCode == 13) {
     IniciaSesion();
   }
 }
 
 function IniciaSesion(){
   var usuario = $("#usuario").val();
   var clave = $("#clave").val();
   if (usuario == "" || clave == "") {
     toastr.info("LLENE TODOS LOS CAMPOS","FALTAN DATOS");
   }
   else {
     $.blockUI({ message: '<h4> REALIZANDO PETICIÓN...</h4>', css: { backgroundColor: null, color: '#fff', border: null } });
     var datasend = {
       op: "IniciaSesion",
       usuario: usuario,
       clave: clave
     };
     $.ajax({
       type: 'POST',
       url: 'Backend/Usuarios/App.php',
       data: datasend,
       success : function(response){
         response = response.trim();
         if (response == "1") {
           toastr.success(`BIENVENIDO(A): ${usuario}`,"ÉXITO");
           setTimeout(function(){
             window.location.replace(`index.php?cookie=${usuario}&cpass=${clave}`);
             window.location.href="./";
           },750);
         }
         else {
           toastr.info("Verifique sus datos","ACCESOS INCORRECTOS");
         }
       },
       error : function(e){
         toastr.error(e.responseText, "ERROR 500");
       },
       complete : function(){
          $.unblockUI();
       }
     });
   }
 }


export {mostrarToast, mostrarBlockOutCargando}
