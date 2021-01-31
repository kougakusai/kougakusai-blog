import Image from 'next/image';
import Icon from '../atoms/icon';

const SNSButtons = () => {
  return (
    <aside className="bg-gray-600 flex h-full items-center text-center w-16">
      <ul className="flex flex-col h-1/3 justify-around">
        <li>
          <Icon
            text="こうがく祭公式Twitterアカウント"
            src="./img/twitter.svg"
            url="https://twitter.com/2020kougakusai"
          />
        </li>
        <li>
          <Icon
            text="こうがく祭公式Youtube Channel"
            src="./img/youtube.svg"
            url="https://www.youtube.com/channel/UC8yEgipIcHHSkRlTLcm4tBw/"
          />
        </li>
        <li>
          <Icon
            text="こうがく祭公式Instagramアカウント"
            src="./img/instagram.svg"
            url="https://www.instagram.com/kougakusai2020/"
          />
        </li>
      </ul>
    </aside>
  );
};

export default SNSButtons;
