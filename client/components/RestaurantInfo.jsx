/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import FullStar from './FullStar';

const BigWrapper = styled.div`
  padding-bottom: 0;
  margin-bottom: 1rem;
  border-bottom: solid 1px #d8d9db;
  display: block;
  font-family: Helvetica, sans-serif;
  background-color: #fff;
  width: 640px;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 0;
  margin: 0 0 1rem;
`;

const SmallWrapper = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  line-height: 1.15;
  padding-bottom: 1rem;
`;

const Header2 = styled.h2`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Header3 = styled.h3`
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding: 0;


`;

const StarRating = styled.div`
padding-top: 0.5rem;
padding-bottom: 1rem;
position: relative;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 0.875rem;
color: #2d333f;
font-weight: 500;
line-height: 1.43;
flex-wrap: nowrap;
`;

const StarsBar = styled.div`
  display: flex;
  height: 16px;
`;

const Header4 = styled.h4`
  margin: 0 0.25rem;
  font-size: 0.875rem;
  line-height: 1.43;
  font-weight: 500;
`;

const MidSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 1rem;
`;

const Left = styled.div`
  display: grid;
  grid-template-rows: 33% 33% 33%;
`;

const Right = styled.div`
`;

const RatingCol = styled.div`
margin: 0;
padding: 0;
display: flex;
`;

const RatingRow1 = styled.div`
display: flex;
flex-direction: column;
list-style: none;
padding: 0 0.5rem;
position: relative;
text-align: center;
justify-content: space-evenly;
border-right: solid 1px #d8d9db;
&:hover {
  color: #DA3743;
  background-color: #F8F8F8;
}
`;

const RatingRow2 = styled.div`
display: flex;
flex-direction: column;
list-style: none;
padding: 0 0.5rem;
position: relative;
text-align: center;
justify-content: space-evenly;
&:hover {
  color: #DA3743;
  background-color: #F8F8F8;
}
`;

const RateText = styled.div`
margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 600;
    line-height: 1.33;
`;

const RateCategory = styled.div`
margin: 0;
    padding: 0;
    font-size: 0.875rem;
    font-weight: normal;
    text-transform: capitalize;
    white-space: nowrap;
`;

const NoiseBigWrapper = styled.div`
padding-top: 1rem;
max-width: 100%;
`;

const NoiseSmallWrapper = styled.div`
display: flex;
align-items: center;
line-height: 1.15;
color: #6f737b;
&:hover {
  color: #DA3743;
}
`;

const NoiseImgWrapper = styled.div`
display: inherit;
margin: 0;
    padding: 0;
`;

const NoiseImg = styled.div`
height: 1.125rem;
    width: 1.125rem;
    background: #fff;
    background-repeat: no-repeat;
    background-position: 50%;
    margin-right: 0.5rem;
`;

const NoiseLevelTextWrapper = styled.div`
margin: 0 0 0 0.25rem;
font-weight: 600;
line-height: 1.43;
font-size: 0.875rem;
padding: 0;
display: block;
`;

const NoiseLevelText = styled.span`
line-height: 1.43;
    font-size: 0.875rem;
    font-weight: normal;
`;

const RestaurantInfo = (props) => (
  <div>
    <BigWrapper>
      {props.length === 1 ? <Header>What {props.length} person is saying</Header> : <Header>What {props.length} people are saying</Header>}
      <SmallWrapper>
        <Header2>Overall ratings and reviews</Header2>
        <Header3>Reviews can only be made by diners who have eaten at this restaurant</Header3>

        <StarRating>
          <StarsBar>
            {props.stars.map((star, index) => (
              <FullStar key={index} />
            ))}
          </StarsBar>
          <Header4> {Math.ceil(props.restaurant.rating_overall)} based on recent ratings</Header4>
        </StarRating>

        <MidSection>
          <Left>
            <RatingCol>
              <RatingRow1>
                <RateText>{props.restaurant.rating_food}</RateText>
                <RateCategory>Food</RateCategory>
              </RatingRow1>
              <RatingRow1>
                <RateText>{props.restaurant.rating_service}</RateText>
                <RateCategory>Service</RateCategory>
              </RatingRow1>
              <RatingRow1>
                <RateText>{props.restaurant.rating_ambience}</RateText>
                <RateCategory>Ambience</RateCategory>
              </RatingRow1>
              <RatingRow2>
                <RateText>{props.restaurant.rating_overall}</RateText>
                <RateCategory>Value</RateCategory>
              </RatingRow2>
            </RatingCol>

            <NoiseBigWrapper>
              <NoiseSmallWrapper>
                <NoiseImg>
                  <svg width='1.125rem' height='1.125rem' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <title>icon/ic_noise_level</title>
                    <g fill='none' fillRule='evenodd'>
                      <path d='M0 0h24v24H0z'/>
                      <rect fill='#333' x='15' y='4' width='3' height='16' rx='.5'/>
                      <rect fill='#333' x='10' y='9' width='3' height='11' rx='.5'/>
                      <rect fill='#333' x='5' y='14' width='3' height='6' rx='.5'/>
                    </g>
                  </svg>
                </NoiseImg>
                <NoiseLevelTextWrapper>
                  {'Noise · '}
                  <NoiseLevelText>
                    {props.restaurant.noise_level}
                  </NoiseLevelText>
                </NoiseLevelTextWrapper>
              </NoiseSmallWrapper>
            </NoiseBigWrapper>

            <NoiseBigWrapper>
              <NoiseSmallWrapper>
                <NoiseImg>
                  <svg xmlns='http://www.w3.org/2000/svg' width='1.125rem' height='1.125rem' viewBox='0 0 24 24'>
                    <g fill='none' fillRule='evenodd'>
                      <path d='M0 0h24v24H0z'/>
                      <path stroke='#333' strokeWidth='2' d='M19.997 10.918A1 1 0 0 0 19 10h-4.503l.58-1.386c.568-1.355.568-2.344.09-3.06-.344-.517-.958-.934-1.878-1.234a1 1 0 0 0-1.17.44L8.419 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12.36a1 1 0 0 0 .981-.804l1.656-8.278z'/>
                      <path fill='#333' d='M7 11h2v9H7z'/>
                    </g>
                  </svg>
                </NoiseImg>
                <NoiseLevelTextWrapper>
                {`${props.restaurant.would_recommend * 100}% of people `}
                  <NoiseLevelText>
                   {' would recommend it to a friend'}
                  </NoiseLevelText>
                </NoiseLevelTextWrapper>
              </NoiseSmallWrapper>
            </NoiseBigWrapper>

            <img></img>
            <h6></h6>
          </Left>

          <Right>
            <div className="barChart"></div>
          </Right>
        </MidSection>
      </SmallWrapper>
    </BigWrapper>
  </div>
);

export default RestaurantInfo;
