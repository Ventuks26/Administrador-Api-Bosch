import React, { Component } from "react";
class Delete extends Component {
 state = {
   projects: [],
   nameProject:"",
   date:"",
   committee:"",
   typeProject:"",
   benefited:"",
   content:"",
   tags:""
 };
 componentDidMount() {
   fetch(
     'https://api-rest-bosch.herokuapp.com/api/project'
   )
     .then(res => res.json())
     .then(projects => {
       this.setState({ projects: projects.projects }, () =>
         console.log('Products fetched', projects)
       );
     });
   }
   render() {
     const { projects } = this.state;
     console.log(projects)
         function deleteProject (id) {
           fetch(
             `https://api-rest-bosch.herokuapp.com/api/project/${id}`,
             {
               method: 'DELETE'
           }).then(res => res.json())
         }
   return(
     <div className= "projects">
       <section className="projectsTabs">
       <h1>Proyectos</h1>
       <button type="button" class="btn btn-success">Agregar Proyecto</button>
       {projects.map((item, index) =>{
         return(
           <ul class="list-group">
             <li class="list-group-item">{item.nameProject} <button type="button" class="btn btn-primary">Editar</button>
             <button onClick={() => deleteProject(item._id)} type="button" class="btn btn-danger">Eliminar</button>
             </li>
           </ul>
         )}
       )}
       </section>
     </div>
   );
}
}
export default Delete;