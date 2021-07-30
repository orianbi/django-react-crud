import React from 'react';

class Update extends React.Component{
    constructor(){
        super();
        this.state={
            full_name:'',
            email:'',
            contact:'',
            address:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
     // Input Change Handler
     changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    // Submit Form
    submitForm(){
        var id = this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/employee/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }
    fatchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/employee/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                full_name:data.full_name,
                email:data.email,
                contact:data.contact,
                address:data.address
            });
        });
    }

    componentDidMount(){
        this.fatchData();
    }

   

    render(){    
    return(
        <div className="container mt-5">
        <div className="card o-hidden border-0 shadow-lg my-5 col-lg-7 mx-auto">
            <div className="card-body p-0">
            <div className="row">
      <div className="col-lg">
        <div className="p-5">
                
        <div className="text-center">

        <h1  className="h4 text-gray-900 mb-4">Update Employee</h1>
        </div>

        <div className="form-row">
        <div className="col form-group">
            <label>Full Name</label>
            <input type="text" value={this.state.full_name} name="full_name" onChange={this.changeHandler} className="form-control" />

        </div>
         </div>

         <div className="form-row">
        <div className="col form-group">
            <label>Email</label>
            <input type="email" value={this.state.email} name="email" onChange={this.changeHandler} className="form-control" />

        </div>
         </div>

         <div className="form-row">
        <div className="col form-group">
            <label>Contact</label>
            <input type="text" value={this.state.contact} name="contact" onChange={this.changeHandler} className="form-control" />

        </div>
         </div>
         <div className="form-row">
        <div className="col form-group">
            <label>Address</label>
            <input type="text" value={this.state.address} name="address" onChange={this.changeHandler} className="form-control" />

        </div>
         </div>
         <div className="form-row">
        <div className="col form-group">
            
            <input type="submit" onClick={this.submitForm}  className="btn btn-info" />

        </div>
         </div>


        </div> 
        </div>

    </div>

        </div> 
        </div>

    </div>
    );
}
}

export default Update;