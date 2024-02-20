type AvatarSize = 'small' | 'normal' | 'large';

type Props = {
  image?: string | null;
  size?: AvatarSize;
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
        className={`bg-white object-cover rounded-full ${
          getImageSizeStyle(size).image
        }`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // 이 프로퍼티를 사용하면 외부링크 사용시 나타나는 엑박 이슈가 사라짐
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = 'rounded-full flex items-center jutify-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
    : '';

  const { container } = getImageSizeStyle(size);

  return `${baseStyle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};
function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  switch (size) {
    case 'small':
      return {
        container: 'w-9 h-9 p-[0.1rem]',
        image: 'w-[34px] h-[34px]',
      };
    case 'normal':
      return {
        container: 'w-[60px] h-[60px] p-[0.15rem]',
        image: 'w-[55px] h-[55px] p-[0.1rem]',
      };
    case 'large':
      return {
        container: 'w-[80px] h-[80px] p-[0.15rem]',
        image: 'w-[75px] h-[75px] p-[0.1rem]',
      };

    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
