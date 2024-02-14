type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = 'normal',
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        className={`bg-white object-cover rounded-full ${getImgSizeStyle(
          size
        )}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 이 프로퍼티를 사용하면 외부링크 사용시 나타나는 엑박 이슈가 사라짐
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full flex items-center jutify-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
    : '';
  const sizeStyle =
    size === 'small' ? 'w-9 h-9 p-[0.1rem]' : 'w-[60px] h-[60px] p-[0.15rem]';
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImgSizeStyle(size: string): string {
  return size === 'small'
    ? 'w-[34px] h-[34px]'
    : 'w-[55px] h-[55px] p-[0.1rem]';
}
