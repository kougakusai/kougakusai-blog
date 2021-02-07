import { relative } from 'path';
import SNSButtons from '../molecules/snsbuttons';

function SideBar() {
  return (
    <aside className="bg-gray-600 flex lg:h-full h-1/16 content-center items-center justify-around text-center lg:w-16 w-full">
      <SNSButtons />
    </aside>
  );
}

export default SideBar;
