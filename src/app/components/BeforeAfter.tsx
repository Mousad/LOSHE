import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfter(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center py-7">
      
      <h2 className="text-2xl font-bold mb-6">
         Before & After
      </h2>

      <div className="w-full max-w-md h-[380px] rounded-2xl overflow-hidden shadow-lg">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://i.pinimg.com/736x/31/7e/d3/317ed305e58307e7ecf880021bbc81e4.jpg"
              alt="before"
              
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://i.pinimg.com/736x/c9/71/b7/c971b783aec0d434e596974a11031c3d.jpg"
              alt="after"
            />
          }
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        اسحب الخط للمقارنة بين النتيجة قبل وبعد 
      </p>
    </div>
  );
}