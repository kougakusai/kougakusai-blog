import { relative } from 'path';
import SNSButtons from '../molecules/snsbuttons';

export default function SideBar() {
  return (
    <aside className="hidden md:flex md:h-full justify-center items-center md:ml-16 text-center md:w-16">
      <SNSButtons />
    </aside>
  );
}
