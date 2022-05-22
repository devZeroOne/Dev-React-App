import React from 'react';

const Card = (props) => {
    console.log(props.item)

    const {id,title,description,price,image} =props.item

    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="google.com" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
};

export default Card;