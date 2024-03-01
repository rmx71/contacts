import React from 'react'
import apiClient from "../api";

class ContactComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            search:'',
            contact: ''
        }
    }
    searchBox = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    };

    searchContact=()=> {
        if (!this.state.search) {
            alert('Contact ID is required.');
            return;
        }
        apiClient.get(`retrieveContactDetails/${this.state.search}`)
            .then(response => response.data)
            .then((data) =>{
                this.setState(
                {contact:data});
        }).catch((error) => {
            if (error.response && error.response.status != 200) {
                alert('No record found.');
                console.error('Server Error:', error.response.status);
            }
        })
    };

    resetContact = (contact)=>{
        this.setState({"search":''});
        this.setState({"contact":''})
    };

    handleKeyPress = e => {
        if(e.keyCode === 13){
            {
                {this.searchContact()}
            }
        }
    }

    render(){
        const {contact, search} = this.state;
        return(
            <div>

                <h3 className="text-center mt-5 ">Contact Information</h3>
                <div className="container mt-2">
                    <div style={{float: 'center'}} align="center">
                        <div class="form-group mb-2">
                            <input type="text" class="form-control" name="search" placeholder="Input Contact ID" value={search}  onChange={this.searchBox} onKeyDown={this.handleKeyPress}/>
                            <button type="button" name="search" class="btn btn-info my-2 text-center mr-2" onClick={this.searchContact} >Search Contact</button>
                            <button type="reset" class="btn btn-secondary text-center ml-5" style={{marginLeft:'10px'}} onClick={this.resetContact}>Clear Contact</button>
                        </div>
                    </div>

                </div>
                <table className="table table-bordered border-info shadow">
                    <thead>
                    <tr>
                        <th>Contact ID</th>
                        <th>Contact Name</th>
                        <th>Contact Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.contactNumber}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ContactComponent