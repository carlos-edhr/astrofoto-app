import React from "react";
import MarQuee from "react-fast-marquee";
type Props = {};
import Image from "next/image";
const rowOneImages = [
  {
    url: "https://i2.wp.com/www.caneckleyva.com/wp-content/uploads/2023/07/CLL8194_2560px.jpg?resize=1025%2C1536&ssl=1",
  },
  {
    url: "https://i1.wp.com/www.caneckleyva.com/wp-content/uploads/2016/07/Proyecto-Final-5.jpg?fit=1700%2C705",
  },
  {
    url: "https://i0.wp.com/www.caneckleyva.com/wp-content/uploads/2020/08/IMG_2699.jpg?resize=1024%2C682&ssl=1",
  },
  {
    url: "https://i2.wp.com/www.caneckleyva.com/wp-content/uploads/2023/10/CLL9998-Pano-scaled.jpg?resize=878%2C1024&ssl=1",
  },
  {
    url: "https://i0.wp.com/www.caneckleyva.com/wp-content/uploads/2023/01/Yucatan-4-1.jpg?w=790&ssl=1",
  },
];

const rowTwoImages = [
  {
    url: "https://i0.wp.com/www.caneckleyva.com/wp-content/uploads/2020/08/IMG_2693.jpg?resize=1024%2C812&ssl=1",
  },
  {
    url: "https://i1.wp.com/www.caneckleyva.com/wp-content/uploads/2023/07/CLL8183-Pano_2560px.jpg?resize=1024%2C477&ssl=1",
  },
  {
    url: "https://i1.wp.com/www.caneckleyva.com/wp-content/uploads/2016/09/MG_7123.jpg?resize=683%2C1024&ssl=1",
  },
  {
    url: "https://i1.wp.com/www.caneckleyva.com/wp-content/uploads/2020/08/LEY1761.jpg?resize=1024%2C1024&ssl=1",
  },
  {
    url: "https://i1.wp.com/www.caneckleyva.com/wp-content/uploads/2020/08/LEY2504-HDR.jpg?resize=1024%2C683&ssl=1",
  },
];
function MarqueeGaleria({}: Props) {
  return (
    <div className="w-[100vw] mb-5:mb-20 relative">
      <div className="mt-10 md:mt-[6.5rem]">
        <MarQuee>
          {rowOneImages.map((i, index) => (
            <Image
              src={i.url}
              key={index}
              alt=""
              className="h-[100px] w-[100px] md:m-4  m-2 md:w-[200px] rounded-[20px]"
              width={500}
              height={300}
            />
          ))}
        </MarQuee>
        <MarQuee>
          {rowTwoImages.map((i, index) => (
            <Image
              src={i.url}
              key={index}
              alt=""
              className=" h-[100px] w-[100px]  md:m-4 m-2 md:w-[200px] rounded-[20px]"
              width={500}
              height={300}
            />
          ))}
        </MarQuee>
      </div>
    </div>
  );
}

export default MarqueeGaleria;
