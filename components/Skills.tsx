import React from 'react';

function Skills() {
	return (
		<div className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl uppercase tracking-widest text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-2 text-gray-600">What I can do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_wordmark_logo_icon_146478.png"
								alt="html"
							/>
							<h3>HTML</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_wordmark_logo_icon_146576.png"
								alt="html"
							/>
							<h3>CSS</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
								alt="html"
							/>
							<h3>JavaScript</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_python_icon_130221.png"
								alt="html"
							/>
							<h3>Python</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
								alt="html"
							/>
							<h3>React</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
								alt="html"
							/>
							<h3>TypeScript</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png"
								alt="html"
							/>
							<h3>Node</h3>
						</div>
					</div>

					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<img
								src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
								alt="html"
							/>
							<h3>mongoDB</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
