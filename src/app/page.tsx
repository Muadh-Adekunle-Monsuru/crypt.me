'use client';
import Header from '@/components/header';
import MainBody from '@/components/mainbody';
import MouseFollower from '../components/MouseFollower';
export default function Home() {
	return (
		<main className='flex flex-col  min-h-screen p-4 px-28 '>
			<Header />
			<MainBody />
			<MouseFollower />
		</main>
	);
}
