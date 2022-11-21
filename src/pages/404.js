import React from 'react';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

export default function NotFound() {
  return (
    <ContentWrapper>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
    </ContentWrapper>
  );
}
