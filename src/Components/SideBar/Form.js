import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        projectname: '',
        role: '',
    });

 const [receivedData, setReceivedData] = useState(null); // State to store received data


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           let  response = await axios.post('http://localhost:8080/api/user/save', formData);
           alert(response.data); 
           setReceivedData(response.data);
            // If the response is successful, you can do something here
            
        } catch (error) {
            // Handle errors, e.g., show an error message
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='projectname'
                value={formData.projectname}
                onChange={handleChange}
                placeholder="Project Name"
            />
            <input
                type="text"
                name='role'
                value={formData.role}
                onChange={handleChange}
                placeholder="Role"
            />
            <button type="submit"
                    // onClick={alert('Data saved successfully')}

            >Submit</button>
        </form>
        {receivedData && (
                <div>
                    <h2>Received Data:</h2>
                    <pre>{JSON.stringify(receivedData, null, 2)}</pre>
                </div>
            )}

        </div>
        
    );
};

export default Form;