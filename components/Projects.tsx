import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className=" text-xl py-4 uppercase tracking-widest text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4 text-gray-600">What I've built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						projectImg="https://i.imgur.com/FUz44Za.png"
						projectName="Maze Runner"
						projectUrl="https://mazerunner.vercel.app/"
						projectStack="JavaScript + HTML Canvas"
					/>

					<ProjectItem
						projectImg="https://i.imgur.com/KF2K5H2.png"
						projectName="Calorition"
						projectUrl="https://calorition.vercel.app/"
						projectStack="React"
					/>

					<ProjectItem
						projectImg="https://i.imgur.com/uF9ILHb.jpg"
						projectName="Producthief"
						projectUrl="https://producthief.vercel.app/"
						projectStack="React + Python/Django"
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
