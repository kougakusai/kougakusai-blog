import Link from 'next/link';
export default function FooterMenu() {
  return (
    <div className="flex flex-row md:flex-row items-center justify-center text-center justify-items-stretch text-sm h-full w-full">
      <div className="md:border-white md:border-r-2 flex px-8">
        <Link href="./about">
          <a className="flex justify-center text-center" title="Aboutページへ">
            <p className="text-white">このブログについて</p>
          </a>
        </Link>
      </div>
      <div className="md:border-white md:border-r-2 flex px-8">
        <Link href="/contact">
          <a className="flex justify-center text-center" title="問い合わせページへ">
            <p className="text-white">お問い合わせ</p>
          </a>
        </Link>
      </div>
      <div className="flex px-8">
        <Link href="/policy">
          <a
            className="flex justify-center text-center"
            title="プライバシーポリシーページへ"
            href="./privacy"
          >
            <p className="text-white">プライバシーポリシー</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
