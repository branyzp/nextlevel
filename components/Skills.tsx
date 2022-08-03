import React from 'react';

function Skills() {
	return (
		<div id="Skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl uppercase tracking-widest text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-2 text-gray-600">What I can do</h2>
				<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/H4RmTcC.png" alt="html" />
							<h3>HTML</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/TFy4JuG.png" alt="css" />
							<h3>CSS</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/dOEwTGJ.png" alt="javascript" />
							<h3>JavaScript</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/D4UkydR.png" alt="python" />
							<h3>Python</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/lfdzAIO.png" alt="react" />
							<h3>React</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/LAfAdBG.png" alt="typescript" />
							<h3>TypeScript</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/4PwdUpP.png" alt="node" />
							<h3>Node</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/q2fj2AI.png" alt="mongodb" />
							<h3>mongoDB</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/HyL3whS.png" alt="github" />
							<h3>GitHub</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/XTk0vGA.png" alt="tailwind" />
							<h3>Tailwind</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/FmLnvyJ.png" alt="materialui" />
							<h3>Material UI</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img src="https://i.imgur.com/0uNFHDC.png" alt="nextjs" />
							<h3>Next.Js</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
