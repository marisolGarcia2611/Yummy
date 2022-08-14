import React,{Component} from "react";
import '../App.css';
import DiseñoProducto from "./DiseñoProducto";
import OrdenEspecificaciones from "./OrdenEspecificaciones";




function OrdenBebidas() {
     return (
      <section>
        {/* Dependiendo el tipo de bebida que sea si caliente o fria se cambiara el titulo según la BD */}
                <h3 className="letters__struct2">TIPO DE BEBIDA</h3>
                <h1 className="letters__struct">Nombre de bebida</h1>
                <br/>

                <div className="row">
                  <div className="col-md-8">
   {/* Este elemento trae todo lo que se le puede pones al cafe(sus especificaciones las cuales dependen según el tipo de bebida que sea, por que no todas llevan compplemtos por ejemplo) */}
                    <OrdenEspecificaciones/>
                  </div>

                  <div className="col-md-4">
  {/* Este solo muestra el diseño de como se va armando el cafe o más bien la imagen del cafe correspondiente a su selección */}
                    <DiseñoProducto/>
                  </div>

                </div>


    </section>
     
    );
  }
export default OrdenBebidas;