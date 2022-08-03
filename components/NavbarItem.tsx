import React from 'react';
import Link from 'next/link';

interface Props {
	navitem: String;
}

function NavbarItem({ navitem }: Props) {
	return (
		<Link href={`/#${navitem}`}>
			<li className="ml-10 py-4 text-sm uppercase hover:border-b">
				<p className="text-sm tracking-widest">{navitem}</p>
			</li>
		</Link>
	);
}

export default NavbarItem;
