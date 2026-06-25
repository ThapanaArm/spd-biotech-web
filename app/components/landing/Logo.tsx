type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 40, className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-spd.png"
      width={size}
      height={Math.round(size * 1.11)}
      className={className}
      alt="SPD Biotech Co., Ltd."
    />
  );
}
