import React, { Component } from 'react';

const ImgList = props => {
	let imgs;
	if (props.data.length > 0) {
		imgs = props.data.map(img =>
	<div key={img.id}>
		<img src={img.urls.small} alt="Image" />
	</div>
		);
	} else {
		imgs = <h3>No Images Matches Your Result</h3>;
	}
	return (
		<div className="img-list">
			{imgs}
		</div>
	);
};

export default ImgList;