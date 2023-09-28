import Image from "next/image";

interface DuckProps {
  width: number;
  height: number;
  className?: string;
}
export const Duck: React.FC<DuckProps> = ({ width, height, className }) => {
  return (
    <>
      <Image
        src="/duck.png"
        className={className}
        alt="rubber ducky"
        width={width}
        height={height}
      />
    </>
  );
};
