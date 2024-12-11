// this is for for png
import Image from "next/image";
import img1 from "./resources/img1.png";
import backgroundImg from "./resources/background.png"; // Import the PNG file

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col gap-5 justify-center items-center min-h-screen font-title bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }} // Use the imported image as the background
    >
      <Image src={img1} alt="BMI Calculator" width={400} height={300} />
      <h1 className="text-3xl font-semibold lg:text-5xl">
        Welcome to the BMI Calculator!
      </h1>
      <h3 className="text-2xl w-3/5 text-center lg:text-3xl">
        Quickly calculate your Body Mass Index and learn more about your weight
      </h3>
      <Link href="/input">
        <button className="bg-[#608BC1] hover:bg-[#133E87] delay-100 ease-in-out py-4 px-10 rounded-2xl text-2xl text-white font-light">
          Get Started
        </button>
      </Link>
    </div>
  );
}
// this is for svg
import Image from "next/image";
import img1 from "./resources/img1.png";
import Link from "next/link";

export default function Home() {
  // Inline the SVG as a data URL
  const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1073%26quot%3B)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='rgba(198, 212, 227, 1)'%3E%3C/rect%3E%3Cpath d='M0,441.266C80.804,451.741,148.412,380.841,212.055,329.963C270.355,283.356,323.477,229.694,351.295,160.431C378.366,93.027,368.012,20.021,365.695,-52.579C363.079,-134.546,382.261,-223.596,336.861,-291.892C290.055,-362.304,205.667,-401.512,122.75,-418.049C43.479,-433.859,-35.039,-406.147,-111.993,-381.412C-187.127,-357.262,-274.872,-341.786,-318.7,-276.155C-361.893,-211.475,-325.883,-125.394,-334.576,-48.105C-342.91,25.99,-400.632,101.002,-368.698,168.379C-336.74,235.808,-239.418,234.822,-179.44,279.214C-113.32,328.152,-81.578,430.691,0,441.266' fill='%2393adca'%3E%3C/path%3E%3Cpath d='M1440 1184.063C1555.458 1188.976 1644.844 1092.233 1745.031 1034.638 1851.096 973.663 1985.021 942.9300000000001 2044.9679999999998 836.28 2106.004 727.693 2096.161 590.374 2062.1 470.556 2030.364 358.919 1931.809 287.008 1862.384 194.002 1786.304 92.08100000000002 1754.696-60.81200000000001 1634.473-102.31500000000005 1514.384-143.77200000000005 1386.191-66.774 1272.766-9.547000000000025 1174.326 40.120000000000005 1108.268 127.315 1028.492 203.42700000000002 939.0640000000001 288.747 802.269 343.76300000000003 775.882 464.514 749.425 585.588 826.012 706.232 896.317 808.292 958.977 899.255 1060.344 946.566 1151.209 1009.3679999999999 1245.674 1074.658 1325.272 1179.181 1440 1184.063' fill='%23f9fbfc'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1073'%3E%3Crect width='1440' height='560' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E")`;

  return (
    <div
      className="flex flex-col gap-5 justify-center items-center min-h-screen font-title bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: svgBackground }}
    >
      <Image src={img1} alt="BMI Calculator" width={400} height={300} />
      <h1 className="text-3xl font-semibold lg:text-5xl">
        Welcome to the BMI Calculator!
      </h1>
      <h3 className="text-2xl w-3/5 text-center lg:text-3xl">
        Quickly calculate your Body Mass Index and learn more about your weight
      </h3>
      <Link href="/input">
        <button className="bg-[#608BC1] hover:bg-[#133E87] delay-100 ease-in-out py-4 px-10 rounded-2xl text-2xl text-white font-light">
          Get Started
        </button>
      </Link>
    </div>
  );
}
