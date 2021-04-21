import Link from 'next/link';

const AboutPageLink = './about',
  InquiryPageLink = './contact',
  PolicyPageLink = './policy';

export default function FooterMenu() {
  return (
    <div className="flex flex-col lg:flex-row divide-solid divide-white divide-x-0 lg:divide-x-2 divide-y-0 space-y-1 lg:space-y-0 lg:mb-8 justify-start lg:justify-center text-left lg:text-center text-sm h-full w-full">
      <div className="flex flex-initial px-4">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="Aboutページへ"
          href={AboutPageLink}
        >
          <p className="text-white m-0">このブログについて</p>
        </a>
      </div>
      <div className="flex flex-initial px-4">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="問い合わせページへ"
          href={InquiryPageLink}
        >
          <p className="text-white m-0">お問い合わせ</p>
        </a>
      </div>
      <div className="flex flex-initial px-4">
        <a
          className="flex justify-center text-center no-underline hover:no-underline"
          title="サイトポリシーページへ"
          href={PolicyPageLink}
        >
          <p className="text-white m-0">サイトポリシー</p>
        </a>
      </div>
    </div>
  );
}
