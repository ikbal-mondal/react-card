import React from 'react';

const Card = (props) => {
  console.log(props.photo);
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={props?.photo?.thumbnailUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>Hello how are you</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       
    );
};

export default Card;