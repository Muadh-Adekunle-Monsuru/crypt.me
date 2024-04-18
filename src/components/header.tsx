import { BeakerIcon } from '@heroicons/react/24/solid';
export default function Header() {
	return (
		<div className='grid grid-cols-4 w-full gap-5'>
			<div className=' col-span-3 border-white py-3 rounded-full bg-gradient-to-b from-zinc-900 to-zinc-800 p-1 border-b border-b-zinc-500 border-x border-x-zinc-500 border-t border-t-zinc-700 flex flex-row items-center hover:animate-pulse'>
				<div className='pr-10'>
					<p className='text-sm items-center pl-5 cursor-pointer select-none'>
						Crypt.Me®
					</p>
				</div>
				<div className='flex flex-row gap-6 items-center text-sm'>
					<p className='cursor-pointer hover:drop-shadow-sm transition duration-300  ease-in-out hover:scale-105 '>
						Personal
					</p>
					<p className='cursor-pointer hover:drop-shadow-sm transition duration-300  ease-in-out hover:scale-105 '>
						Business
					</p>
					<p className='cursor-pointer hover:drop-shadow-sm transition duration-300  ease-in-out hover:scale-105 '>
						Features
					</p>
					<p className='cursor-pointer hover:drop-shadow-sm transition duration-300  ease-in-out hover:scale-105 '>
						Trading
					</p>
				</div>
			</div>
			<div className='flex flex-row gap-3 pl-5 items-center justify-between border-white py-1 rounded-full bg-gradient-to-b from-zinc-900 to-zinc-800 p-1 border-b border-b-zinc-500 border-x border-x-zinc-500 border-t border-t-zinc-700 '>
				<div className='w-4 text-white cursor-pointer'>
					<BeakerIcon className='h-4 w-4 text-white' />
				</div>
				<div className='w-4 cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-4 h-4'
					>
						<path
							fillRule='evenodd'
							d='M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div className='w-4 cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-4 h-4'
					>
						<path d='M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z' />
						<path
							fillRule='evenodd'
							d='M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z'
							clipRule='evenodd'
						/>
						<path d='M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z' />
					</svg>
				</div>
				<div className='w-4 cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-4 h-4'
					>
						<path
							fillRule='evenodd'
							d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div className=' cursor-pointer select-none px-5 border bg-zinc-300 rounded-full py-2 shadow-md shadow-zinc-200/50 text-black text-xs'>
					Get the app
				</div>
			</div>
		</div>
	);
}
