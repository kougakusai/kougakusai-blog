import Image from 'next/image';

function SNSButton() {
  return (
    <aside className="bg-gray-600 flex h-full items-center text-center w-16">
      <ul className="flex flex-col h-1/3 justify-around">
        <li>
          <a href="https://twitter.com/2020kougakusai" target="_blank" rel="noopener noreferrer">
            <img
              src="./img/twitter.png"
              alt="こうがく祭公式Twitterアカウント"
              className="border-4 border-transparent"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC8yEgipIcHHSkRlTLcm4tBw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/youtube.png"
              alt="こうがく祭公式Youtube Channel"
              className="border-4 border-transparent"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kougakusai2020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./img/instagram.png"
              alt="こうがく祭公式Instagramアカウント"
              className="border-4 border-transparent"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SNSButton;
