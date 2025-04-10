import React, { useEffect, useRef, useState,  } from 'react';
import Frame1 from '../../assets/Frame1.png';
import Frame2 from '../../assets/Frame2.png';
import Frame3 from '../../assets/Frame3.png';
import Frame4 from '../../assets/Frame4.png';
import Frame5 from '../../assets/Frame5.png';
import Frame6 from '../../assets/Frame6.png';
import Frame7 from '../../assets/Frame7.png';

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
  const [visibleItems, setVisibleItems] = useState<Item[]>([...initialItems]);
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
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full bg-[#05071e]">
      <div
        className="flex items-center justify-around transition-transform duration-500 ease-in-out py-2" style={{gap: 100}}
     
      >
        {visibleItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-2" style={{ borderRadius: '5px', padding:'4px'}}>
            <img src={item.icon} />
            {/* <span className="ml-2 text-lg font-bold">{item.text}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
