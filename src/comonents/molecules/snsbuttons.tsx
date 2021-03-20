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

export default function SNSButtons() {
  return (
    <ul className="flex md:flex-col flex-row h-56 justify-around w-full">
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
}
