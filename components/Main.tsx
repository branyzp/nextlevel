import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

function Main() {
	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let's build something amazing.
					</p>
					<h1 className="py-4 text-gray-700 ">
						Hi, I'm <span className="text-[#5651e5]  ">Brandon</span>.
					</h1>
					<h1 className="py-4 text-gray-600">
						a <span className="text-[#5651e5]">full-stack dev</span>eloper.{' '}
					</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I'm enjoying the process of learning new technologies and how they
						work together to make development more efficient and fast. I am
						currently learning Nextjs by building this site.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto">
						<a
							href="https://www.linkedin.com/in/branyzp/"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
								<AiFillLinkedin />
							</div>
						</a>

						<a
							href="https://github.com/branyzp"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
								<AiFillGithub />
							</div>
						</a>

						<a
							href="mailto:Branyzp@gmail.com"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
								<AiFillMail />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
