import Image from 'next/image';
import React from 'react';

function About() {
	return (
		<div className=" w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className=" col-span-2">
					<p className="py-4 uppercase tracking-widest text-[#5651e5]">
						About Me
					</p>
					<h2 className=" py-2 text-gray-600">Who I am</h2>
					<p className=" py-2 text-[#8a88ce]">
						if (!knowMe) &#123; <br />
						&nbsp;return (
					</p>
					<p className=" py-2 text-gray-600">
						&nbsp; Hello! I'm Brandon. I have a bachelor's degree in Business
						(Finance & Economics) and have previously worked in the fields of
						hospitality, customer service and banking. During my time working in
						a bank, I was introduced to software engineering through working
						closely with teams of software developers to build in-house systems.
					</p>
					<p className=" py-2 text-gray-600">
						&nbsp; I started off with using HTML and CSS to build a personal
						site as an interest which developed into a passion for building
						projects from scratch. I then enrolled into General Assembly's
						Software Engineering Immersive course and have not looked back
						since.
					</p>
					<p className=" py-2 text-[#8a88ce]">)&#125;</p>
					<p className=" py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects
					</p>
				</div>
				<div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 ">
					{/* <Image
							src="https://i.imgur.com/p3FqVsz.png"
							alt="aboutpic"
							width="100px"
							height="100px"
						/> */}
					<img
						className="rounded-xl"
						src="https://i.imgur.com/p3FqVsz.png"
						alt="test"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
