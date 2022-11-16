import {useState} from "react";


function Form({onAddSuggestion}) {

  const initialState = {
    reef: "",
    country: "",
    image: "",
    url: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData}),
    };

    fetch("http://localhost:3000/suggestions", configObj)
    .then( r => r.json())
    .then((suggestion) => {
      onAddSuggestion(suggestion)
      setFormData(initialState)
  });

  
  }

    return (
      <section>
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
          <h3>Request Diving Information Based On Location</h3>

          <label htmlFor="reef">Reef (if known)</label>
          <input
            type="text"
            id="reef"
            name="reef"
            onChange={handleChange}
            value={formData.reef}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={handleChange}
            value={formData.country}
          />

          <label htmlFor="image">Image</label>
          <input 
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />

          <label htmlFor="url">Known Links</label>
          <input
            type="text"
            id="url"
            name="url"
            onChange={handleChange}
            value={formData.url}
          />
          <button type="submit">Submit Request</button>
        </form>
      </section>
    );
  }
  
  export default Form;