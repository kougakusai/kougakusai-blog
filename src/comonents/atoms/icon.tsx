import Image from 'next/image';

const Icon = (props) => {
  return (
    <a
      title={props.text}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full"
    >
      <img src={props.src} alt={props.text} className="rounded-full" />
    </a>
  );
};

export default Icon;
