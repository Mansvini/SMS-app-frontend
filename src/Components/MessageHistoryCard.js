import React from "react";

const MessageHistoryCard=({number, time, message})=>{
	return(
		<div className='w-100 bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2 className= 'f6 link dim black db pointer'>
					{number}
				</h2>
				<p className= 'f6 link dim black db pointer'>
					{time}
				</p>
				<p className= 'f6 link dim black db pointer'>  
					{message}
				</p>
		</div>
		);
	}

export default MessageHistoryCard;