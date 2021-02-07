import Image from 'next/image';
import Icon from '../atoms/icon';

const Twitter = {
    text: 'こうがく祭公式Twitterアカウント',
    img: './img/twitter.svg',
    url: 'https://twitter.com/2020kougakusai',
  },
  Youtube = {
    text: 'こうがく祭公式Youtube Channel',
    img: './img/youtube.svg',
    url: 'https://www.youtube.com/channel/UC8yEgipIcHHSkRlTLcm4tBw/',
  },
  Instagram = {
    text: 'こうがく祭公式Instagramアカウント',
    img: './img/instagram.svg',
    url: 'https://www.instagram.com/kougakusai2020/',
  };

const SNSButtons = () => {
  return (
    <ul className="flex lg:flex-col flex-row lg:h-1/3 h-9/10 content-center justify-center text-center lg:w-full w-1/3">
      <li>
        <Icon name={Twitter} />
      </li>
      <li>
        <Icon name={Youtube} />
      </li>
      <li>
        <Icon name={Instagram} />
      </li>
    </ul>
  );
};

export default SNSButtons;
