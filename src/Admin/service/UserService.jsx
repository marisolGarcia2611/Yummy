export class UserService {
   MapToTable(data) {
      const columns = [
         {
            name: "id",
            selector: "id"
         },
         {
            name: "Nombre",
            selector: "name"
         },
         {
            name: "Appelido",
            selector: "last_name"
         },
         {
            name: "Correo",
            selector: "email"
         },
         {
            name: "Usuario",
            selector: "username"
         },
         {
            name: "Teléfono",
            selector: "phone"
         },
         ,
         {
            name: "Rol_id",
            selector: "role_id"
         },
         ,
         {
            name: "Rol",
            selector: "rol_name"
         }
      ]
      let dataset = []
      // filtrar datos a mostrar...
      dataset = data
      //retornar un 
      return {columns, dataset}
   }
}

