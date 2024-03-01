type Props = {
  disabled?: boolean;
  text: string;
  onClick: () => void;
};
export default function Button({ disabled, text, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-2 px-8 border-none rounded-lg text-white font-bold leading-4 text-sm ${
        text === '팔로잉' ? 'bg-emerald-400' : 'bg-sky-400 '
      }`}
    >
      {text}
    </button>
  );
}
