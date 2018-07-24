import React from 'react';
import styled from 'styled-components';
import GtcBadge from 'components/GtcBadge';
import Login from 'components/Login';
import PrBoard from 'containers/PrBoard';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Login />
      <GtcBadge />
      <PrBoard />
    </AppWrapper>
  );
}
