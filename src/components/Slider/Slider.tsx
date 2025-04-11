import React, { useEffect, useRef, useState,  } from 'react';
import Frame1 from '../../assets/Frame1.png';
import Frame2 from '../../assets/Frame2.png';
import Frame3 from '../../assets/Frame3.png';
import Frame4 from '../../assets/Frame4.png';
import Frame5 from '../../assets/Frame5.png';
import Frame6 from '../../assets/Frame6.png';
import Frame7 from '../../assets/Frame7.png';
import './Slider.css'

type Item = {
  icon: string;
};

const initialItems: Item[] = [
  { icon: Frame1 },
  { icon: Frame2 },
  { icon: Frame3 },
  { icon: Frame4 },
  { icon: Frame5 },
  { icon: Frame6 },
{ icon: Frame7}
];

const Slider: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Item[]>(initialItems.slice(0, 5));
  const [translateX, setTranslateX] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slide = () => {
    setTranslateX(100);

    timeoutRef.current = setTimeout(() => {
      setVisibleItems((prevItems) => {
        const updated = [...prevItems];
        const first = updated.shift();
        if (first) {
          updated.push(first);
        }
        return updated;
      });
      setTranslateX(0);
    }, 500);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      slide();
    }, 2000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
          <div className="overflow-hidden w-full bg-[#05071e] mt-4 ">
      <div
        className="flex items-center justify-center  transition-transform duration-500 gapStyle ease-in-out py-2 bg-[#05071e] " 
     
      >
        {visibleItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center  bg-[#05071e] " style={{ borderRadius: '5px', padding:'4px'}}>
            <img src={item.icon} className='image' />
            {/* <span className="ml-2 text-lg font-bold">{item.text}</span> */}
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Slider;






