import React from 'react';
import detail from '../WorkDetail/DetailData';

const AdminPanel = () => {
    
    const handleAddVolunteerWork = () => {
        fetch('https://stormy-beyond-13173.herokuapp.com/addVolunteerWork', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(detail)
        })

    }

    return (
        <div>
            <button onClick={handleAddVolunteerWork}>Add Volunteer work</button>
        </div>
    );
};

export default AdminPanel;