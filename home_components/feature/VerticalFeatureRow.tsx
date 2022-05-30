import className from 'classnames';
import { useRouter } from 'next/router';
import { Button } from '../Button';
import Link from 'next/link';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  link?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div className="mt-4">
            <Link href={props.link}>
            <a className='bg-orange-600 p-3 rounded-lg'>Bekijk</a>
            </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <img className="rounded-xl shadow-lg" src={`${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };