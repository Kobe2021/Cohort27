import { useState } from "react";

const Form = (props) => {
    const {movieSearch} = props;

    // state to hold the form data
    const [formData, setFormData] = useState({searchTerm: ''})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault() // stop the form from refreshing the page
        movieSearch(formData.searchTerm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={formData.searchTerm} onChange={handleChange} name='searchTerm' required /> <br />

                <input type='submit' value='search' />
            </form>
        </div>
    )
}

export default Form;