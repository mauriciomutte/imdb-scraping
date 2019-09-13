import React, { useState } from 'react';
import Title from './components/Title';
import Serie from './components/Serie';
import GlobalStyle from './styles/global';

export default () => {
  const [seriesList, setSeriesList] = useState([]);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Title />
      <ul>
        {
          seriesList.map((element) => 
            <Serie 
              key={element.ranking}
              ranking={element.ranking}
              image={element.image}
              name={element.name}
              rating={element.rating}
            />
          )
        }
      </ul>
    </div>
  );
}