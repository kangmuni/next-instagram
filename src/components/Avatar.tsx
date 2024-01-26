type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.1rem] mt-9">
      <img
        className="rounded-full"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 이 프로퍼티를 사용하면 외부링크 사용시 나타나는 엑박 이슈가 사라짐
      />
    </div>
  );
}
