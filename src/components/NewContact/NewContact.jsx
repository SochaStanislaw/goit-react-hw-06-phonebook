// import React, { Component, useState } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

export const NewContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = change => {
    const { name, value } = change.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default:
            return;
    }
  };

  const handleSubmit = submit => {
    submit.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (

    <form 
    onSubmit={handleSubmit}>
      <label>
        Type name:  
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Add number:  
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button
        type="submit"
      >
        make new contact
      </button>
    </form>
  );
};

// export class NewContact extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   handleChange = change => {
//     const { name, value } = change.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = submit => {
//     submit.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     return (
//       <form 
//       onSubmit={this.handleSubmit}>
//         <label>
//           Type name:  
//           <input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={this.state.name}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <label>
//           Add number:  
//           <input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <button
//           type="submit"
//         >
//           make new contact
//         </button>
//       </form>
//     );
//   }
// };

NewContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
