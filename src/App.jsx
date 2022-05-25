import React from 'react';
import { Wrapper } from './common/Wrapper';
import { AppWrapper } from './App.style';
import Hero from './layout/Hero/Hero';

const App = () => {
  return (
    <Wrapper>
      <AppWrapper>
        <Hero />
      </AppWrapper>
    </Wrapper>
  );
};

export default App;
