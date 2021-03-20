import Image from 'next/image';

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>;

export default function Icon(props) {
  return (
    <a
      className="flex justify-around h-full w-full"
      class={props.name.class}
      title={props.name.text}
      href={props.name.url}
      target="_blank"
      rel="noopener noreferrer"
      data-show-count={props.name.data_show_count}
    >
      <Image src={props.name.img} alt={props.name.text} height={56} width={56} />
    </a>
  );
}
