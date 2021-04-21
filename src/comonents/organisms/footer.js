import FooterMenu from '../molecules/footermenu';
import CopyRight from '../atoms/copyright';

export default function Footer() {
  return (
    <footer className="bg-k-indigo flex flex-col justify-items-center justify-center py-4 space-y-4 text-center w-full">
      <FooterMenu className="justify-self-start" />
      <CopyRight />
    </footer>
  );
}
