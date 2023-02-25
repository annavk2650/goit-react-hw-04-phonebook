import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormCont, LabelCont, InputCont, BtnCont } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);

    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;

    //   case 'number':
    //     setNumber(value);
    //     break;

    //   default:
    //     break;
    // }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormCont onSubmit={handleSubmit}>
      <LabelCont>
        Name
        <InputCont
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Ivan Ivanov"
          required
          onChange={handleChange}
        />
      </LabelCont>
      <LabelCont>
        Number
        <InputCont
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="11-11-11"
          required
          onChange={handleChange}
        />
      </LabelCont>

      <BtnCont type="submit">Add contact</BtnCont>
    </FormCont>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
