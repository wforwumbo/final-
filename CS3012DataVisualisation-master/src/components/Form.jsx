import React from 'react';
const Form = (props) => {
  return (
<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
        <input name="username"
        type="text"
        placeholder="GitHub username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      </label>
      
      <input
        type="submit"
        value="Search"
      />
    
    </form>
)};
export default Form;