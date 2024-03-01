import React, {useState} from 'react'
import apiClient from "../api";

function AddContactComponent() {

    const [contact, setContact] = useState({
        name: '',
        contactNumber: ''
    });

    const onInputChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const { name, contactNumber } = contact;

    const FormHandle = e => {
        e.preventDefault();
        if (!contact.name || !contact.contactNumber) {
            alert('All fields are required to add a contact.');
            return;
        }
        if (!contact.contactNumber.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)) {
            alert('Please enter a valid phone number. Some valid format are as follows:\n' +
                ' 18001231234\n' +
                '1 800 123 1234\n' +
                '+1 800 123-1234\n' +
                '+96 800 123 1234');
            return;
        }
        addDataToServer(contact);
        setContact({
            name: '',
            contactNumber: ''
        });
    }

    const addDataToServer = (data) => {
        apiClient.post("http://localhost:8080/api/recordContactDetails", data).then(
            (response) => {
                console.log(response);
                alert("Successfully Added Contact with ID: " + response.data);
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }


    return (
        <div className="main">
            <div className="container">
                <div className="container mt-2">
                    <div className="jumbotron">
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                                <div className="form-group">
                                    <label htmlFor="contactName">Name</label>
                                    <input type="text" class="form-control" name="name" value={name} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <input type="text" class="form-control" name="contactNumber"  value={contactNumber} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="container text-center">
                                    <button type="submit" class="btn btn-info my-2 text-center mr-2">Add Contact</button>
                                    <button type="reset" class="btn btn-secondary text-center ml-5" style={{marginLeft:'10px'}}>Clear Contact</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddContactComponent