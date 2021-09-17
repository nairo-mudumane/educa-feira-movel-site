import React from 'react';
import styled from 'styled-components';
import Main from '../../layout/wrappers/Main';
import Body from '../../layout/wrappers/Body';

const StyledConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;

  .welcome-bar {
    width: 100%;
  }
  .wc-text {
    color: var(--color-yellow-1);
  }
`;

export default function Home() {
  return (
    <Main>
      <Body>
        <StyledConatiner>
          <div className={`welcome-bar`}>
            <h3 className={`wc-text wc-text-tiny  no-margin`}>Bem vindo ao</h3>
            <h1 className={`wc-text wc-text-huge animeTop no-margin`}>
              Educa Móvel 2021!
            </h1>
            <h5 className={`wc-text wc-text-medium animeBottom no-margin`}>
              Primeira edicao
            </h5>
          </div>
        </StyledConatiner>
      </Body>
    </Main>
  );
}
