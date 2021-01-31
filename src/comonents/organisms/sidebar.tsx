import { relative } from 'path';
import SNSButtons from '../molecules/snsbuttons';

function SideBar() {
  return (
    <aside className="bg-gray-600 flex h-full items-center text-center w-16">
      <SNSButtons />
    </aside>
  );
}

export default SideBar;
