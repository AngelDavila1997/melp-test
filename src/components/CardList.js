import React from 'react';
import Cardtest2 from './Cardtest2';
import Grid from '@material-ui/core/Grid';
import './Card.css';
const CardList = ({ robots }) => {
  return (
    <div className="rearrange">
      {
        robots.map((user, i) => {
          return (
              <Cardtest2
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                rating={robots[i].rating}
                site={robots[i].contact.site}
                email={robots[i].contact.email}
                phone={robots[i].contact.phone}
                street={robots[i].address.street}
                city={robots[i].address.city}
                state={robots[i].address.state}
                />
          );
        })
      }
    </div>
  );
}

export default CardList;