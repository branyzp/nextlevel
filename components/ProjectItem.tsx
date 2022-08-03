import Image from 'next/image';
import React from 'react';

function ProjectItem() {
	return (
		<div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<img
				className="rounded-xl group-hover:opacity 10"
				src={'https://i.imgur.com/KF2K5H2.png'}
				alt="calorition"
			/>
		</div>
	);
}

export default ProjectItem;
