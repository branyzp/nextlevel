import React from 'react';

interface Props {
	projectImg: string;
	projectName: string;
	projectUrl: string;
	projectStack: string;
}

function ProjectItem({
	projectImg,
	projectName,
	projectUrl,
	projectStack,
}: Props) {
	return (
		<div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#c57cc9]">
			<img
				className="rounded-xl group-hover:opacity-10"
				src={projectImg}
				alt="calorition"
			/>
			<div className="opacity-0 group-hover:opacity-100 ease-in duration-200 absolute left-[50%] translate-x-[-50%]">
				<h3 className="text-2xl text-white tracking-widest text-center">
					{projectName}
				</h3>
				<p className="text-lg text-white trackingwidest text-center ">
					{projectStack}
				</p>
				<a href={projectUrl} target={'_blank'} rel={'noopener noreferrer'}>
					<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer ">
						Portal to site
					</p>
				</a>
			</div>
		</div>
	);
}

export default ProjectItem;
