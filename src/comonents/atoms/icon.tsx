import Image from 'next/image';

function Icon(props) {
  return (
    <a title={props.text} href={props.url} target="_blank" rel="noopener noreferrer">
      <img src={props.src} alt={props.text} className="border-0 border-transparent" />
    </a>
  );
}

export default Icon;
