import React from 'react';
import Image from 'next/image';
import NavbarItem from './NavbarItem';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillMail,
	AiOutlineClose,
	AiOutlineMenu,
} from 'react-icons/ai';
import { useState } from 'react';

const navBarArr = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100] backdrop-blur-sm ">
			<div className="flex justify-between items-center w-full h-full px-2">
				<Image
					src="https://i.imgur.com/cUH500e.png"
					alt="itsme"
					width="50"
					height="50"
				/>
				<div>
					<ul className="hidden md:flex">
						{navBarArr.map((navitem, index) => {
							return <NavbarItem key={index} navitem={navitem} />;
						})}
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src="https://i.imgur.com/cUH500e.png"
								alt="Reactcat"
								width="100"
								height="100"
							/>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4 tracking-widest ">
								Let's build something amazing.
							</p>
						</div>
						<div className="py-4 flex flex-col">
							<ul>
								{navBarArr.map((navitem, index) => {
									return <NavbarItem key={index} navitem={navitem} />;
								})}
							</ul>
							<div className="flex pt-40">
								<p className="uppercase tracking-widest">Let's connect</p>
								<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
										<a
											href="https://www.linkedin.com/in/branyzp/"
											target={'_blank'}
											rel={'noopener noreferrer'}
										>
											<AiFillLinkedin />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
										<a
											href="https://github.com/branyzp"
											target={'_blank'}
											rel={'noopener noreferrer'}
										>
											<AiFillGithub />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
										<a
											href="mailto:Branyzp@gmail.com"
											target={'_blank'}
											rel={'noopener noreferrer'}
										>
											<AiFillMail />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
