import React, {Component} from "react";
import axios from "axios";




class Add extends Component {
state = {
    nameProject:"",
    date:"",
    committee:"",
    typeProject:"",
    benefited:"",
    content:"",
    tags:"",
    isSubmited: false

}

changeHandler = (e) => {
    console.log(e.target.name)
    
    switch (e.target.name) {
        case 'NameProject':
        
            return this.setState({
                        nameProject: e.target.value
            })
        case 'date':
            
            return this.setState({
                date: e.target.value
            })
        case 'typeProject':
            return this.setState({
                typeProject: e.target.value
            })
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        case 'committee':
            return this.setState({
                    committee: e.target.value
                })
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        case 'content':
            return this.setState({
                    content: e.target.value
                })
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        case 'tags':
            return this.setState({
                    tags: e.target.value
                })
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor
        case 'benefited':
            return this.setState({
                    benefited: e.target.value
                })
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
            default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          return 'No input found.'
      }
}

sumitHandler= (e) =>{
 e.preventDefault()
 axios.post("https://api-rest-bosch.herokuapp.com/api/project/", {
    nameProject: this.state.nameProject,
    date: this.state.date,
    committee:this.state.committee,
    typeProject: this.state.typeProject,
    benefited:this.state.benefited,
    content:this.state.content,
    tags:this.state.tags
 }) 
 .then(res =>{
    this.setState({
        isSubmited: true,
       error: false
        
    })
    console.log(res)
 } )
 .catch( res=>
    this.setState({
        isSubmited: true,
       error: false
        
    }))
}

render(){
    return(
        <form onSubmit={this.sumitHandler}>
            <input
            type="text"
            className="form--control"
            name="NameProject"
            value={this.state.nameProject}
            placeholder="Nombre de proyecto"
            onChange={this.changeHandler}
            />

<input
            type="text"
            className="form--control"
            name="date"
            value={this.state.date}
            placeholder="Fecha"
            onChange={this.changeHandler}
            />

<input
type="text"
className="form--control"
name="committee"
value={this.state.committee}
placeholder="Comité"
onChange={this.changeHandler}
/>

<input
type="text"
className="form--control"
name="typeProject"
value={this.state.typeProject}
placeholder="Comité"
onChange={this.changeHandler}
/>

<input
type="text"
className="form--control"
name="benefited"
value={this.state.benefited}
placeholder="Beneficiarios"
onChange={this.changeHandler}
/>

<textarea
type="text"
className="form--control"
name="content"
value={this.state.content}
placeholder="Contenido"
onChange={this.changeHandler}
/>
<input
type="text"
className="form--control"
name="tags"
value={this.state.tags}
placeholder="Etiquetas"
onChange={this.changeHandler}
/>
<button type="submit"  className="btn btn-success">Agregar proyecto</button>
{this.state.isSubmited && <p>From</p>}

        </form>


    )
}
}

export default Add;