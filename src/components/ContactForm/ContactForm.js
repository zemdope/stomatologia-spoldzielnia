import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { StyledButton } from 'assets/styles/pages/indexPage.styles';
import { CheckboxWrapper, ContactFormWrapper } from './ContactForm.styles';
import { HighlightedHeading } from '../HighlightedHeading/HighlightedHeading';
import { Link } from 'gatsby';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('xpznbjog');

  const handleCheckboxChange = () => {};

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <HighlightedHeading width='65'>Napisz do nas</HighlightedHeading>
      <label htmlFor='email'>Adres e-mail</label>
      <input type='email' name='email' id='email' placeholder='Adres e-mail' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>Treść</label>
      <textarea name='message' id='message' placeholder='Wiadomość' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      {state.errors.length
        ? state.errors.map((e) => (
            <p key={e.message}>
              {e.code === 'EMPTY' &&
                'Uzupełnij pola przed wysłaniem wiadomości'}
            </p>
          ))
        : null}
      <CheckboxWrapper>
        <input
          type='checkbox'
          onChange={handleCheckboxChange}
          name='checkbox'
          id='checkbox'
        />
        <label htmlFor='checkbox'>
          Oświadczam, że przeczytałem i akceptuję{' '}
          <Link to='/polityka-prywatnosci'>Politykę Prywatności</Link>
        </label>
      </CheckboxWrapper>
      <ValidationError
        prefix='Checkbox'
        field='checkbox'
        errors={state.errors}
      />
      {state.errors.length
        ? state.errors.map((e) => (
            <p key={e.checkbox}>{e.code === 'EMPTY' && 'Zaznacz zgodę'}</p>
          ))
        : null}

      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}

      <StyledButton type='submit' disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  );
};
