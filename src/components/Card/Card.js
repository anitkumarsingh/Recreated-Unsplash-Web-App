import React from 'react';
import './Card.css';
import likes from '../../Images/thumbsUp.png';

const Card = (props) =>{
	return(
        <div  className="grid__item card">
					<div className="card__body">
							<a href={props.link}>
								<img src={props.url} alt="photos from unsplash" />
						</a>
					</div>
					<div className="card__footer media">
						<img src={likes} alt="like-icon" width="50px" height="20px"/><span>{props.likes_count}</span>
						<div className="media__body">
						<p>{props.descriptions}</p>
					</div>
					</div>
    </div>
	);
}
export default Card;