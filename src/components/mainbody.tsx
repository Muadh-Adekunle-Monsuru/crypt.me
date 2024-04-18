import LeftBody from './leftbody';
import RightBody from './rightbody';
export default function MainBody() {
	return (
		<div className='w-full grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-2 gap-10 mt-4 flex-grow '>
			<LeftBody />
			<RightBody />
		</div>
	);
}
