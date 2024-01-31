import { User } from '@/model/user';
import Avatar from './Avatar';
import Link from 'next/link';

type Props = {
  user: User;
};

export default function MiniProfile({
  user: { name, username, image },
}: Props) {
  //  const { data: session } = useSession();
  //  const user = session?.user;
  // clent component 사용방법 .. 이걸로 해도 되는건 아닌가?

  return (
    <section>
      <div className="ml-3 mb-9 flex items-center">
        {image && (
          <Link href={`/user/${username}`}>
            <Avatar image={image} size="normal" highlight={true} />
          </Link>
        )}
        <div className="ml-2">
          <div className="font-bold">{username}</div>
          <div className="text-slate-500 font-semibold text-sm">{name}</div>
        </div>
      </div>

      <div className="text-sm text-slate-400 m-3">
        <p>About·Help·Press·API·Jobs·Privacy·Terms·Location·Language</p>
      </div>

      <div className="text-sm text-slate-400 m-3">
        <p>© Copyright INSTAGRAM from META</p>
      </div>
    </section>
  );
}
