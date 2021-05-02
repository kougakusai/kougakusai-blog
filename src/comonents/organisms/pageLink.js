import Link from 'next/link';

export default function pageLink(props) {
  return (
    <div>
      <Link href={props.url}><a>{props.title}</a></Link>
    </div>
  );
}
