import LeftBody from './leftbody';
import RightBody from './rightbody';
export default function MainBody() {
	return (
		<div className='w-full grid grid-cols-2 gap-10  h-full mt-4 flex-grow '>
			<LeftBody />
			<RightBody />
		</div>
	);
}
