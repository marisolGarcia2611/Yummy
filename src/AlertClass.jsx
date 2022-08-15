// import { Swal, Toast } from "sweetalert2";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export class AlertClass {
   Success(title, message, btn = true) {
      Swal.fire({
         icon: "success",
         title: `${title}`,
         text: `${message}`,
         showConfirmButton: btn,
         confirmButtonColor: "#494E53",
      });
   }

   Error(title, message) {
      Swal.fire({
         icon: "error",
         title: `${title}`,
         text: `${message}`,
         showConfirmButton: true,
         confirmButtonColor: "#494E53",
      });
   }

   Question(title, message, confirm_btn_text, confirm_title, confirm_text) {
      Swal.fire({
         title: `${title}`,
         text: `${message}`,
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: `${confirm_btn_text}`,
         cancelButtonText: `Cancelar`,
      }).then((result) => {
         if (result.isConfirmed) {
         Swal.fire(confirm_title, confirm_text, "success");
         }
      });
   }

  Toast(icon, title, position='top-end') {
      const Toast = Swal.mixin({
         toast: true,
         position: position,
         showConfirmButton: false,
         timerProgressBar: true,
         timer: 3000,
         didOpen: (toast) => {
         toast.addEventListener("mouseenter", Swal.stopTimer);
         toast.addEventListener("mouseleave", Swal.resumeTimer);
         },
      });

      Toast.fire({
         icon: icon,
         title: title,
      });
   }

   Otra() {
      MySwal.fire({
         title: <p>Hello World</p>,
         didOpen: () => {
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            MySwal.showLoading()
         },
         }).then(() => { return MySwal.fire(<p>Shorthand works too</p>)
      })
   }
}