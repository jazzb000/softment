import { PlusIcon } from "./Home12";

interface MerchantCardProps {
  title: string;
  images: string[];
  layout?: 'grid' | 'wrap';
}

export default function MerchantCard({ title, images, layout = 'grid' }: MerchantCardProps) {
  const renderImages = () => {
    if (layout === 'wrap') {
      return (
        <div className="content-start flex flex-wrap gap-[10px] items-start justify-start relative shrink-0 w-[138px]">
          {images.map((img, index) => (
            <div key={index} className="bg-center bg-cover bg-no-repeat rounded-[80px] shrink-0 size-[64px]" style={{ backgroundImage: `url('${img}')` }} />
          ))}
        </div>
      );
    }

    const firstRow = images.slice(0, Math.ceil(images.length / 2));
    const secondRow = images.slice(Math.ceil(images.length / 2));

    return (
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
          {firstRow.map((img, index) => (
            <div key={index} className="bg-center bg-cover bg-no-repeat rounded-[999px] shrink-0 size-[64px]" style={{ backgroundImage: `url('${img}')` }} />
          ))}
        </div>
        {secondRow.length > 0 && (
          <div className="content-stretch flex gap-[10px] items-center justify-start relative shrink-0">
            {secondRow.map((img, index) => (
              <div key={index} className="bg-center bg-cover bg-no-repeat rounded-[999px] shrink-0 size-[64px]" style={{ backgroundImage: `url('${img}')` }} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="basis-0 bg-white grow h-[300px] min-h-px min-w-px relative rounded-[20px] shrink-0">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[300px] items-center justify-start p-[24px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#333d4b] text-[24px] text-nowrap">
              <p className="leading-[1.6] whitespace-pre">{title}</p>
            </div>
            <PlusIcon />
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
            {renderImages()}
          </div>
        </div>
      </div>
    </div>
  );
}