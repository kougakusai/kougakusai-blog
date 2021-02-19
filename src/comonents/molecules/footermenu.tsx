export default function FooterMenu() {
  return (
    <div className="flex flex-row md:flex-row items-center justify-center text-center justify-items-stretch text-sm h-full w-full">
      <div className="md:border-white md:border-r-2 flex px-8">
        <a className="flex justify-center text-center" title="Aboutページへ" href="./about">
          <p className="text-white">このブログについて</p>
        </a>
      </div>
      <div className="md:border-white md:border-r-2 flex px-8">
        <a className="flex justify-center text-center" title="問い合わせページへ" href="./inquiry">
          <p className="text-white">お問い合わせ</p>
        </a>
      </div>
      <div className="flex px-8">
        <a
          className="flex justify-center text-center"
          title="プライバシーポリシーページへ"
          href="./privacy"
        >
          <p className="text-white">プライバシーポリシー</p>
        </a>
      </div>
    </div>
  );
}
