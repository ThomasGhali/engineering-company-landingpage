import Image from 'next/image';

export default function QualtecLogo({
  width = 105,
  height = 28,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src="/latest-logo2.png"
        alt="logo"
        width={width}
        height={height}
        className={className + ' bg-charcoal-700'}
        priority
      />
    </>
  );
}
