import React from 'react';

const Card = ({ name, rating, id, site, email, phone, street, city, state }) => {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h4>{name}</h4>
        <h2>{rating}</h2>
        <a href={site} target="blank">{site}</a>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>
      </div>
    </div>
  );
}

export default Card;