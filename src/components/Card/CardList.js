import React from 'react';
import Card from './Card';
import NoContent from './ContentLess';
import './CardList.css';

const CardList = props => {
	const results = props.data;
	// testing  what I get from props and console logging
	console.log(props.data);
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
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
		imgs = <NoContent />;
	}
	return (
		<ul className="grid">
			{imgs}
		</ul>
	);
};

export default CardList;
