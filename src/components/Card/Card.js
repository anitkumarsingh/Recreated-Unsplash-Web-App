import React from 'react';
import './Card.css';
import likes from '../../Images/thumbsUp.png';

//const Card = (props) =>
//   <ul className="grid__item card">
// 	<li>
// 		<a href={props.link}>
// 			<img src={props.url} alt="photos from unsplash" />
// 		</a>
// 		<p>Likes{props.likes_count}</p>
// 		<p>{props.descriptions}</p>
// 		<p>
// 			Photo by
// 			<img src={props.user_profile} alt="user_profile" style={{borderRadius:'100%'}}/>
// 			<a href={props.user}>{props.name}</a>
// 			<a href={props.link}> See on Unsplash</a>
// 		</p>
// 	</li>
// 	</ul>;

    
 // );
//}


const Card = (props) =>{
	return(
        <div  className="grid__item card">
      <div className="card__body">
	  <a href={props.link}>
			<img src={props.url} alt="photos from unsplash" />
	</a>
      </div>
      <div className="card__footer media">
	  {/* <img src={props.user_profile} alt="user_profile" style={{borderRadius:'100%'}}/> */}
	  <img src={likes} alt="like-icon" width="50px" height="20px"/><span>{props.likes_count}</span>
        <div className="media__body">
          {/* <a href={props.user.portfolio_url} target="_blank">{ props.user.name }</a>
		  <a href={props.user}>{props.name}</a> */}
		  
			<p>{props.descriptions}</p>
		  {/* <div>
			<img src={likes} alt="like-icon"/><span>{props.likes_count}</span>
			<p>{props.descriptions}</p>
		  </div> */}
        </div>
      </div>
    </div>
	);
}
export default Card;