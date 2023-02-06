import React, {useState} from 'react';

export const CircleRating = () => {
  let [rating, setRating] = useState(0);
  
  type circleType = {
	item: string
	rating: boolean
	value: 1 | 2 | 3 | 4 | 5
	cb: (value: number) => void
  }
  
  const retingator = (value: number) => {
	setRating(value)
  }
  
  const Circle = (props: circleType) => {
	return <span onClick={() => retingator(props.value)}>
	 {props.rating ? <>{props.item}</> : <>⚪</>}
   </span>
  }
  
  return (
	<div>
	  <Circle item={'🔴'} rating={rating > 0} value={1} cb={setRating}/>
	  <Circle item={'🔴'} rating={rating > 1} value={2} cb={setRating}/>
	  <Circle item={'🟠'} rating={rating > 2} value={3} cb={setRating}/>
	  <Circle item={'🟡'} rating={rating > 3} value={4} cb={setRating}/>
	  <Circle item={'🟢'} rating={rating > 4} value={5} cb={setRating}/>
	</div>
  );
};