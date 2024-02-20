type Props = {
  text: string;
  onClick: () => void;
};
export default function Button({ text, onClick }: Props) {
  return (
    <button
      className={`w-24 h-8 order-none rounded-lg text-white font-bold leading-4 text-sm ${
        text === '팔로잉' ? 'bg-emerald-400' : 'bg-sky-400 '
      }`}
    >
      {text}
    </button>
  );
}
