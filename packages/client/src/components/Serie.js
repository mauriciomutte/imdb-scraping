import React from 'react';
import { Serie, Ranking, Image, Name, Rating } from './style';

export default (props) => 
  <Serie>
    <Ranking>{`${props.ranking}º`}</Ranking>
    <Image>
      <img src={props.image} alt={`${props.name} cover`} />
    </Image>
    <Name>{props.name}</Name>
    <Rating>{(props.rating).toFixed(1)}</Rating>
  </Serie>