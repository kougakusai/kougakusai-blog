const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Title(props) {
  return (
    <div className="flex flex-row text-center items-center">
      <img src={prefix + '/img/titleDeco.svg'} height={50} width={50} className="inline-block" />
      <h2 className="ml-2 m-0 inline-block">{props.title}</h2>
    </div>
  );
}
