import className from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type ISponsorProps = {
  link?: string;
  image?: string;
};

const Sponsors = (props: ISponsorProps) => {

  return (
    <div>
      <div className="mb-6 text-center sm:px-6">
        <div className="mt-6 mb-6 text-xl">Mede mogelijk gemaakt door : </div>
       <Image className="rounded-xl shadow-lg mb-6" width={118} height={110} quality={100} src={`${props.image}`} />
      </div>
    </div>
  );
};

export { Sponsors };