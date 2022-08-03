import React from 'react';
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';

function Contact() {
	return (
		<div id="Contact" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl py-4 upper tracking-widest text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4 text-gray-600">Let's connect</h2>
				<div className="grid grid-cols-2">
					<div className=" max-w-[250px] py-20">
						<a
							href="https://www.linkedin.com/in/branyzp/"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className=" rounded-lg shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
								<p className="text-lg"> Get in touch on Linkedin </p>
								<AiOutlineLinkedin />
							</div>
						</a>

						<a
							href="https://github.com/branyzp"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className="rounded-lg shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
								<p className="text-lg">Check out my GitHub</p>
								<AiOutlineGithub />
							</div>
						</a>

						<a
							href="mailto:Branyzp@gmail.com"
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<div className="rounded-lg shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
								<p className="text-lg">Send me a mail</p>
								<AiOutlineMail />
							</div>
						</a>
					</div>

					<div>
						<img src="https://i.imgur.com/XChhRFZ.png" alt="contactpic" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
