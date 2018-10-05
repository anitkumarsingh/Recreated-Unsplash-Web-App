import React from 'react';
// Importing components
import Card from './Card';
import NoContent from './ContentLess';
// Importing css file
import './CardList.css';

const CardList = props => {
	const results = props.data;
	// testing  what I get from props and console logging
	// console.log(props.data);
	let pic;
	if (results.length > 0) {
		pic = results.map(img =>
			<Card
				url={img.urls.thumb}
				user={img.user.links.html}
				likes_count={img.likes}
				descriptions={img.description}
				user_profile={img.user.profile_image.small}
				name={img.user.name}
				link={img.links.html}
				key={img.id}
			/>
		   );
	} else {
		pic = <NoContent />;
	}
	return (
		<ul className="grid">
			{pic}
		</ul>
	);
};

export default CardList;
