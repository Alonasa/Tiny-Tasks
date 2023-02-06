import React, {useState} from 'react';
import {CircleRating} from './items/CircleRating';

type ratingType = {
  value: any
  cb: (value: number) => void
  rating: 1 | 2 | 3 | 4 | 5
}

export const Rating = () => {
  let [rating, setRating] = useState<number>(0);
  
  const Empty = () => {
	return (
	  <>
		🤍
	  </>
	)
  }
  
  const Filled = () => {
	return (
	  <>
		💜
	  </>
	)
  }
  
  const Heart = (props: ratingType) => {
	return <span onClick={() => props.cb(props.rating)}> {props.value ?
	  <Filled/> : <Empty/>}</span>
  }
  
  return (
	<div style={{margin: '20px'}}>
	  <div style={{display: 'flex'}}>
		<Heart cb={setRating} value={rating > 0} rating={1}/>
		<Heart cb={setRating} value={rating > 1} rating={2}/>
		<Heart cb={setRating} value={rating > 2} rating={3}/>
		<Heart cb={setRating} value={rating > 3} rating={4}/>
		<Heart cb={setRating} value={rating > 4} rating={5}/>
	  </div>
	  <div>
		<CircleRating/>
	  
	  </div>
	</div>
  );
};

