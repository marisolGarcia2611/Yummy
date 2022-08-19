import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";
// import '../../App.css';
import logo from '../../images/yummy.svg';
import perfil from '../../images/usuario.png';

function Scripts() {
   return (
      <section>
         {/* <!-- SCRIPTS --> */}
         {/* <!-- JQuery 6 --> */}
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="></script>

         {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"></script>

         {/* <!--AdminLTE-3--> */}
         <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js" integrity="sha512-KBeR1NhClUySj9xBB0+KRqYLPkM6VvXiiWaSz/8LCQNdRpUm38SWUrj0ccNDNSkwCD9qPA4KobLliG26yPppJA=="></script>
         {/* <!-- <script src="<?php echo($DIST_PATH) ?>/admin-lte-3/js/adminlte.min.js"></script> --> */}

         {/* <!-- DataTables --> */}
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
         <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/dt-1.11.3/af-2.3.7/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/r-2.2.9/sc-2.0.5/datatables.min.js"></script>
         <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
         <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
         {/* <!-- Moment JS --> */}
         <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="></script>

         {/* <!-- SweetAlert2 --> */}
         <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.9/dist/sweetalert2.all.min.js"></script>

         {/* <!-- Select2 --> */}
         <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

         {/* <!-- <script src="<?php echo($VENDORS_PATH) ?>/BlockUI/jquery.blockui.min.js"></script> --> */}
         {/* <!-- ya esta instaldo en el proyecto yummy --> */}


         {/* <!--MisScripts--> */}
         {/* <!-- ESTE ES EL SCRIPT QUE USO DE MANERA PRINCIPAL/GENERAL/GENERICA, es decir, */}
         {/* aqui pongo los metodos que son muy usuados, que se repiten mucho y en muchas paginas --> */}
         <script src="<?php echo($SCRIPTS_PATH) ?>/admin.js"></script>


         {/* <!---------------------------- OPCIONES EXTRAS ----------------------------> */}
         {/* <!-- DATETIMEPICKER --> */}
         {/* <!--<script type="text/javascript" src="<?php echo ($PLUGINS_PATH) ?>/datetimepicker/bootstrap-datetimepicker.min.js"></script>--> */}

         {/* <!-- CHART JS --> */}
         {/* <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js" integrity="sha512-TW5s0IT/IppJtu76UbysrBH9Hy/5X41OTAbQuffZFU6lQ1rdcLHzpU5BzVvr/YFykoiMYZVWlr/PX1mDcfM9Qg=="></script>--> */}

         {/* <!-- IMask JS --> */}
         {/* <!-- <script src="https://unpkg.com/imask"></script> --> */}

         {/* <!-- ESTE ES EL SCRIPT EXCLUSIVO PARA CADA PAGINA --> */}
         <script src="<?php echo($SCRIPTS_PATH) ?>/users.js"></script>
      </section>
   );
}
export default Scripts;
