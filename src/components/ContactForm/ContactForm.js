import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { StyledButton } from 'assets/styles/pages/indexPage.styles'
import { ContactFormWrapper } from './ContactForm.styles'
import { HighlightedHeading } from '../HighlightedHeading/HighlightedHeading'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkjyddj')

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <HighlightedHeading width="65">Naszpisz do nas</HighlightedHeading>
      <label htmlFor="email">Adres e-mail</label>
      <input type="email" name="email" id="email" placeholder="Adres e-mail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Treść</label>
      <textarea name="message" id="message" placeholder="Wiadomość" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {state.errors.length
        ? state.errors.map((e) => (
            <p key={e.message}>
              {e.code === 'EMPTY' &&
                'Uzupełnij pola przed wysłaniem wiadomości'}
            </p>
          ))
        : null}
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}
      <StyledButton type="submit" disabled={state.submitting}>
        Wyślij
      </StyledButton>
    </ContactFormWrapper>
  )
}
