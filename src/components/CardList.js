import React from 'react';
import Cardtest2 from './Cardtest2';
import Grid from '@material-ui/core/Grid';
import './Card.css';
const CardList = ({ restaurants }) => {
  return (
    <div className="rearrange">
      {
        restaurants.map((user, i) => {
          return (
              <Cardtest2
                key={i}
                id={restaurants[i].id}
                name={restaurants[i].name}
                rating={restaurants[i].rating}
                site={restaurants[i].contact.site}
                email={restaurants[i].contact.email}
                phone={restaurants[i].contact.phone}
                street={restaurants[i].address.street}
                city={restaurants[i].address.city}
                state={restaurants[i].address.state}
                />
          );
        })
      }
    </div>
  );
}

export default CardList;