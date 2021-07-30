import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }; 
        // this.deleteData=this.deleteData.bind(this);
    }

    fatchData(){
        fetch('http://127.0.0.1:8000/api/employee/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fatchData();
    }
    // Delete Data
    deleteData(id){
        console.log(id);
        fetch('http://127.0.0.1:8000/api/employee/'+id+'/', {
            method:'DELETE',
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fatchData();
            }
        });
    }

    render(){
        const empData=this.state.data;
        const rows=empData.map((emp)=>
            <tr key={emp.id}>
                <td>{emp.full_name}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
                <td>{emp.address}</td>
                <td>
                <Link to={'update/'+emp.id} className="btn btn-success btn-sm mr-1">Update</Link>|
                <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger btn-sm ml-1">Delete</button>
        
                </td>
            </tr>
        
        );

        return(
            <div className="jumbotron mt-3">
               <Link to="/add" className="btn btn-primary">Add</Link>
            <table className="table table-hover mt-2">
                
                    <thead>
                        <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                <tbody>                
                {rows}
                </tbody>
                </table>
                </div>
            
        );
    }
}

export default List;