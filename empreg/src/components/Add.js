import React from 'react';

class Add extends React.Component{
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
        fetch('http://127.0.0.1:8000/api/employee/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            full_name:'',
            email:'',
            contact:'',
            address:'',
        });
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

            <h1  className="h4 text-gray-900 mb-4">Add Employee</h1>
            </div>

            <div className="form-row">
		    <div className="col form-group">
                <label>Full Name</label>
                <input type="text" name="full_name" onChange={this.changeHandler} value={this.state.full_name} className="form-control" />

            </div>
             </div>

             <div className="form-row">
		    <div className="col form-group">
                <label>Email</label>
                <input type="email" name="email" onChange={this.changeHandler} value={this.state.email} className="form-control" />

            </div>
             </div>

             <div className="form-row">
		    <div className="col form-group">
                <label>Contact</label>
                <input type="text" name="contact" onChange={this.changeHandler} value={this.state.contact} className="form-control" />

            </div>
             </div>
             <div className="form-row">
		    <div className="col form-group">
                <label>Address</label>
                <input type="text" name="address" onChange={this.changeHandler} value={this.state.address} className="form-control" />

            </div>
             </div>
             <div className="form-row">
		    <div className="col form-group">
                
                <input type="submit" onClick={this.submitForm} className="btn btn-info" />

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

export default Add;