"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSliderMenu } from "@/hooks/slider-menu-store";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";

interface LogoMProps {
  black?: boolean;
  fill?: string;
  className?: string;
}
const Logo: React.FC<LogoMProps> = ({
  className = "w-28 sm:w-80 lg:w-[46rem]",
  fill = "fill-neutral-950",
  black,
}) => {
  const path = usePathname();
  const { onClose } = useSliderMenu();

  return (
    <Link
      href={path === "/" ? "/promo" : "/"}
      onClick={() => onClose()}
      className='flex gap-2 justify-start items-center'
    >
      <svg
        width='150'
        viewBox='0 0 747 190'
        fill='none'
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M83.4348 29.3698V143.605L84.8298 145H57.0848L58.4798 143.605V115.55L59.2548 87.8048L42.6698 106.25L25.9298 87.8048L26.8598 116.17V143.605L28.2548 145H0.509766L1.90477 143.605V29.2148H3.45477L42.6698 73.2348L81.7298 29.3698H83.4348Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M146.512 126.245H123.418L119.077 143.605L120.473 145H91.6425L93.3475 143.605L121.558 32.1598L120.162 30.7648H149.613L148.062 32.1598L176.738 143.605L178.133 145H149.458L151.008 143.605L146.512 126.245ZM134.732 66.5698L128.688 102.84H141.088L135.042 66.5698H134.732Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M181.912 30.6098H250.422V54.6348H228.877V143.605L230.272 145H202.527L203.922 143.605V54.6348H181.912V30.6098Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M260.894 32.0048L259.499 30.6098H298.404C302.537 30.6098 306.412 31.2298 310.029 32.4698C313.646 33.6064 316.797 35.3631 319.484 37.7398C322.171 40.1164 324.289 43.1131 325.839 46.7298C327.492 50.2431 328.319 54.4281 328.319 59.2848V81.9148C328.319 86.2548 327.492 90.4398 325.839 94.4698C324.186 98.3964 321.086 101.6 316.539 104.08L331.729 143.605L333.124 145H303.829L305.379 143.605L294.684 109.97H285.849V143.605L287.399 145H259.499L260.894 143.605V32.0048ZM285.849 87.1848H298.404C299.851 87.1848 301.039 86.7198 301.969 85.7898C302.899 84.8598 303.364 83.7231 303.364 82.3798V59.2848C303.364 57.9414 302.899 56.8048 301.969 55.8748C301.039 54.9448 299.851 54.4798 298.404 54.4798H285.849V87.1848Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M349.46 11.2348C349.46 7.61809 350.596 4.93143 352.87 3.17477C355.246 1.31477 357.83 0.384766 360.62 0.384766C363.41 0.384766 365.941 1.31477 368.215 3.17477C370.591 4.93143 371.78 7.61809 371.78 11.2348C371.78 14.9548 370.591 17.7448 368.215 19.6048C365.941 21.3614 363.41 22.2398 360.62 22.2398C357.83 22.2398 355.246 21.3098 352.87 19.4498C350.596 17.5898 349.46 14.8514 349.46 11.2348ZM379.995 11.2348C379.995 7.61809 381.131 4.93143 383.405 3.17477C385.781 1.31477 388.365 0.384766 391.155 0.384766C393.945 0.384766 396.476 1.31477 398.75 3.17477C401.126 4.93143 402.315 7.61809 402.315 11.2348C402.315 14.9548 401.126 17.7448 398.75 19.6048C396.476 21.3614 393.945 22.2398 391.155 22.2398C388.365 22.2398 385.781 21.3098 383.405 19.4498C381.131 17.5898 379.995 14.8514 379.995 11.2348ZM400.145 30.6098L401.385 29.2148V56.9598L399.99 55.5648H373.795V75.2498H397.82L399.215 73.8548V101.755L397.82 100.205H373.795V120.045H402.315L403.71 118.65V146.395L402.315 145H347.445L348.84 143.605V30.6098H400.145Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M449.611 75.2498C453.228 76.4898 456.896 78.0398 460.616 79.8998C464.336 81.7598 467.643 84.0848 470.536 86.8748C473.533 89.6648 475.91 92.9714 477.666 96.7948C479.526 100.618 480.353 105.165 480.146 110.435C479.94 114.465 479.371 118.03 478.441 121.13C477.615 124.23 476.53 126.968 475.186 129.345C473.843 131.618 472.345 133.581 470.691 135.235C469.141 136.785 467.643 138.076 466.196 139.11C462.476 141.796 458.343 143.605 453.796 144.535C449.353 145.465 444.858 145.723 440.311 145.31C435.765 145 431.27 144.121 426.826 142.675C422.486 141.228 418.56 139.471 415.046 137.405L422.641 113.07C425.121 114.206 428.066 115.446 431.476 116.79C434.886 118.03 438.193 118.856 441.396 119.27C444.703 119.683 447.596 119.425 450.076 118.495C452.556 117.461 454.21 115.136 455.036 111.52C455.553 109.246 454.881 107.335 453.021 105.785C451.265 104.131 448.888 102.53 445.891 100.98C442.895 99.4298 439.536 97.7248 435.816 95.8648C432.2 93.9014 428.841 91.5248 425.741 88.7348C422.641 85.9448 420.058 82.4831 417.991 78.3498C416.028 74.2164 415.15 69.1531 415.356 63.1598C415.666 55.4098 417.681 49.0548 421.401 44.0948C425.121 39.0314 429.823 35.3631 435.506 33.0898C441.293 30.8164 447.648 29.8864 454.571 30.2998C461.598 30.6098 468.521 32.2631 475.341 35.2598L467.281 57.5798C465.525 56.8564 463.2 56.1848 460.306 55.5648C457.413 54.8414 454.571 54.5831 451.781 54.7898C448.991 54.8931 446.511 55.6164 444.341 56.9598C442.171 58.1998 440.88 60.4214 440.466 63.6248C440.053 66.4148 440.828 68.7914 442.791 70.7548C444.755 72.6148 447.028 74.1131 449.611 75.2498Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M559.77 32.0048H559.615V143.605L561.01 145H533.265L534.66 143.605V96.4848H516.835V143.605L518.23 145H490.485L491.88 143.605V31.8498L490.485 30.6098H518.23L516.835 32.0048V71.5298H534.66V31.8498L533.42 30.6098H561.165L559.77 32.0048Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M662.7 142.985C660.323 144.121 657.843 144.948 655.26 145.465C652.78 146.085 650.3 146.395 647.82 146.395C645.133 146.395 642.447 146.188 639.76 145.775C637.177 145.361 634.645 144.535 632.165 143.295C629.685 142.055 627.308 140.35 625.035 138.18C622.865 135.906 620.798 132.91 618.835 129.19L606.9 102.995H600.545V143.605L601.94 145H574.04L575.59 143.605V32.0048L574.04 30.6098H601.94L600.545 32.0048V76.0248H605.66L624.88 32.0048H624.725L623.33 30.6098H653.245L651.85 32.0048L625.035 87.6498L640.38 117.875C642.033 121.078 644.152 122.938 646.735 123.455C649.422 123.868 652.108 123.196 654.795 121.44L662.7 142.985Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M715.199 126.245H692.104L687.764 143.605L689.159 145H660.329L662.034 143.605L690.244 32.1598L688.849 30.7648H718.299L716.749 32.1598L745.424 143.605L746.819 145H718.144L719.694 143.605L715.199 126.245ZM703.419 66.5698L697.374 102.84H709.774L703.729 66.5698H703.419Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M0.999765 151H747V190H0.999765V151Z'
          fill={black ? "#171717" : "white"}
        />
        <path
          d='M28.9468 182.002C31.9068 182.002 34.6448 180.892 36.7168 178.82L38.1228 180.226C35.6808 182.668 32.4248 184 28.9468 184C25.5058 184 22.2498 182.668 19.8078 180.226C17.3658 177.784 16.0338 174.528 16.0338 171.05C16.0338 167.609 17.3658 164.353 19.8078 161.911C22.2498 159.469 25.5058 158.1 28.9468 158.1C32.4248 158.1 35.6808 159.469 38.1228 161.911L36.7168 163.317C34.6448 161.245 31.9068 160.135 28.9468 160.135C26.0238 160.135 23.2858 161.245 21.2138 163.317C19.1418 165.389 18.0318 168.127 18.0318 171.05C18.0318 173.973 19.1418 176.748 21.2138 178.82C23.2858 180.892 26.0238 182.002 28.9468 182.002Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M49.0592 158.1H71.4442V160.135H61.2322V184H59.2342V160.135H49.0592V158.1Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M108.498 158.1H110.866L98.8412 177.673L94.9932 184H92.6252L97.6942 175.786L86.8902 158.1H89.2212L98.8412 173.862L106.463 161.43L108.498 158.1Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M137.483 182.002H139.111V185.369H137.113V184H116.06V185.332H114.062V182.002H115.764L125.939 158.1H127.271L137.483 182.002ZM117.947 182.002H135.3L126.605 161.689L117.947 182.002Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M174.894 158.1H176.374V184H174.376V161.837L155.432 184H153.989V158.1H155.987V180.3L174.894 158.1Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M199.96 158.1H215.389V184H213.354V172.086H204.622L194.447 184H191.82L201.995 172.086H199.96C196.112 172.086 192.967 168.941 192.967 165.093C192.967 161.245 196.112 158.1 199.96 158.1ZM213.354 170.051V160.135H199.96C197.222 160.135 194.965 162.355 194.965 165.093C194.965 167.831 197.222 170.051 199.96 170.051H213.354Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M272.047 171.05C274.045 172.308 275.414 174.528 275.414 177.044C275.414 180.892 272.269 184 268.421 184H253.029V158.1H268.421C272.269 158.1 275.414 161.245 275.414 165.093C275.414 167.609 274.045 169.829 272.047 171.05ZM255.027 160.135V170.051H268.421C271.159 170.051 273.416 167.831 273.416 165.093C273.416 162.355 271.159 160.135 268.421 160.135H255.027ZM268.421 182.002C271.159 182.002 273.416 179.782 273.416 177.044C273.416 174.306 271.159 172.086 268.421 172.086H255.027V182.002H268.421Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M312.703 160.135H292.316V170.051H305.488V172.086H292.316V182.002H312.703V184H290.318V158.1H312.703V160.135Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M350.534 160.135H330.147V170.051H343.541C347.389 170.051 350.534 173.196 350.534 177.044C350.534 180.892 347.389 184 343.541 184H328.149V158.1H350.534V160.135ZM343.541 172.086H330.147V182.002H343.541C346.279 182.002 348.536 179.782 348.536 177.044C348.536 174.306 346.279 172.086 343.541 172.086Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M403.63 158.1C407.478 158.1 410.623 161.245 410.623 165.093C410.623 168.941 407.478 172.086 403.63 172.086H390.236V184H388.238V158.1H403.63ZM403.63 170.051C406.368 170.051 408.625 167.831 408.625 165.093C408.625 162.355 406.368 160.135 403.63 160.135H390.236V170.051H403.63Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M431.02 158.1L442.083 184H439.9L437.569 178.598H423.139L420.845 184H418.662L429.688 158.1H431.02ZM423.99 176.6H436.718L430.354 161.689L423.99 176.6Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M474.318 171.05C476.316 172.308 477.685 174.528 477.685 177.044C477.685 180.892 474.54 184 470.692 184H462.256C458.408 184 455.3 180.892 455.3 177.044H457.298C457.298 179.782 459.518 182.002 462.256 182.002H470.692C473.43 182.002 475.687 179.782 475.687 177.044C475.687 174.306 473.43 172.086 470.692 172.086H466.474V170.051H470.692C473.43 170.051 475.687 167.831 475.687 165.093C475.687 162.355 473.43 160.135 470.692 160.135H462.256C459.518 160.135 457.298 162.355 457.298 165.093H455.3C455.3 161.245 458.408 158.1 462.256 158.1H470.692C474.54 158.1 477.685 161.245 477.685 165.093C477.685 167.609 476.316 169.829 474.318 171.05Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M507.981 158.1C511.829 158.1 514.974 161.245 514.974 165.093C514.974 168.941 511.829 172.086 507.981 172.086H494.587V184H492.589V158.1H507.981ZM507.981 170.051C510.719 170.051 512.976 167.831 512.976 165.093C512.976 162.355 510.719 160.135 507.981 160.135H494.587V170.051H507.981Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M535.371 158.1L546.434 184H544.251L541.92 178.598H527.49L525.196 184H523.013L534.039 158.1H535.371ZM528.341 176.6H541.069L534.705 161.689L528.341 176.6Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M584.241 160.135H563.854V170.051H577.248C581.096 170.051 584.241 173.196 584.241 177.044C584.241 180.892 581.096 184 577.248 184H561.856V158.1H584.241V160.135ZM577.248 172.086H563.854V182.002H577.248C579.986 182.002 582.243 179.782 582.243 177.044C582.243 174.306 579.986 172.086 577.248 172.086Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M611.299 158.1C618.44 158.1 624.249 163.909 624.249 171.05C624.249 178.191 618.44 184 611.299 184C604.195 184 598.386 178.191 598.386 171.05C598.386 163.909 604.195 158.1 611.299 158.1ZM611.299 182.002C617.367 182.002 622.251 177.118 622.251 171.05C622.251 165.019 617.367 160.135 611.299 160.135C605.268 160.135 600.384 165.019 600.384 171.05C600.384 177.118 605.268 182.002 611.299 182.002Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M632.243 158.1H654.628V160.135H644.416V184H642.418V160.135H632.243V158.1Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M693.643 158.1L682.58 171.05L693.643 184H690.979L681.248 172.604L671.517 184H670.074V158.1H672.072V180.3L690.979 158.1H693.643Z'
          fill={black ? "white" : "#171717"}
        />
        <path
          d='M729.93 158.1H731.41V184H729.412V161.837L710.468 184H709.025V158.1H711.023V180.3L729.93 158.1Z'
          fill={black ? "white" : "#171717"}
        />
      </svg>
    </Link>
  );
};
export default Logo;