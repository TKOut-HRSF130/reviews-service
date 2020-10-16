/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import FullStar from './FullStar';
import PartialStar from './PartialStar';
import EmptyStar from './EmptyStar';

const StarsBar = styled.div`
  display: flex;
  height: 16px;

`;

const Stars = (props) => (
  <StarsBar>
    {props.full.map((star, index) => (
      <FullStar key={index} />
    ))}
    {props.partial.map((star, index) => (
      <PartialStar key={index} />
    ))}
    {props.empty.map((star, index) => (
      <EmptyStar key={index} />
    ))}
  </StarsBar>
);

export default Stars;
