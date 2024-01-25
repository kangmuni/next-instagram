import { MdLogin } from 'react-icons/md';

type Props = {
  onClick: () => void;
};

export default function LoginOrLogoutButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <MdLogin className="text-3xl" />
    </button>
  );
}
