import Link from 'next/link';
export default function FooterMenu() {
  return (
    <div className="flex flex-col lg:flex-row divide-solid divide-white divide-x-0 lg:divide-x-2 divide-y-0 space-y-1 lg:space-y-0 lg:mb-8 items-center justify-center text-center justify-items-stretch text-sm h-full w-full">
      <div className="flex px-8">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="Aboutページへ"
          href="./about"
        >
          <p className="text-white m-0">このブログについて</p>
        </a>
      </div>
      <div className="flex px-8">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="問い合わせページへ"
          href="./inquiry"
        >
          <p className="text-white m-0">お問い合わせ</p>
        </a>
      </div>
      <div className="flex px-8">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="プライバシーポリシーページへ"
          href="./privacy"
        >
          <p className="text-white m-0">プライバシーポリシー</p>
        </a>
      </div>
    </div>
  );
}
