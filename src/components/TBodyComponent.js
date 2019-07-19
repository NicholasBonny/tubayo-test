import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function TBodyComponent({ experience, rowNumber }) {

    const onDelete = async (expId) => {
        try {
            const res = await axios.delete(
                "http://127.0.0.1:4000/api/v1/experience/" + expId
            );
            console.log("Experience Deleted Successfully!", res)
            if (res.data.message) {
                window.location.reload()
            }
        } catch (error) {
            // console.log("error", error);

        }
    }

    return (
        <>
            <tr>
                <th scope="row">{rowNumber}</th>
                <td>{experience.experienceTitle}</td>
                <td>{experience.brifeDescription}</td>
                <td>{experience.price}</td>
                <td>{experience.experienceDescription}</td>
                <td>{experience.language}</td>
                <td>{experience.experienceCategory}</td>
                <td>{experience.whatYouProvide}</td>
                <td>{experience.location}</td>
                <td>{experience.createdDate}</td>
                <td>The host has a well-developed sense of humor</td>
                <td>4.5</td>
                <td>
                    <Link to={`/editExperience/${experience._id}`}
                        className="btn btn-warning" >Edit</Link>
                    <button className="btn btn-danger my-3" type="submit"
                        onClick={() => {
                            if (window.confirm('Are you sure you wish to delete this item?'))
                                onDelete(experience._id)
                        }}>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default TBodyComponent
