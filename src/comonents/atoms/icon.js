export default function Icon(props) {
  return (
    <a
      className="flex justify-around h-full w-full"
      title={props.name.text}
      href={props.name.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.name.img} alt={props.name.text} height={56} width={56} />
    </a>
  );
}
