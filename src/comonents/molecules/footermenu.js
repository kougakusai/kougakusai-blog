import Link from 'next/link';

const AboutPageLink = './about',
  InquiryPageLink = './contact',
  PolicyPageLink = './policy';

export default function FooterMenu() {
  return (
    <div className="flex flex-col lg:flex-row divide-solid divide-white divide-x-0 lg:divide-x-2 divide-y-0 space-y-1 lg:space-y-0 lg:mb-8 justify-start lg:justify-center text-left lg:text-center text-sm h-full w-full">
      <div className="flex flex-initial px-4">
        <Link href="/about">
          <a
            className="flex justify-center text-center no-underline hover:no-underline"
            title="Aboutページへ"
          >
            <p className="text-white m-0">このブログについて</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-initial px-4">
        <Link href="/contact">
          <a
            className="flex justify-center text-center no-underline hover:no-underline"
            title="問い合わせページへ"
          >
            <p className="text-white m-0">お問い合わせ</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-initial px-4">
        <Link href="/policy">
          <a
            className="flex justify-center text-center no-underline hover:no-underline"
            title="サイトポリシーページへ"
          >
            <p className="text-white m-0">サイトポリシー</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-initial px-4">
        <Link href="/privacy">
          <a
            className="flex justify-center text-center no-underline hover:no-underline"
            title="プライバシーポリシhーページへ"
          >
            <p className="text-white m-0">プライバシーポリシー</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
