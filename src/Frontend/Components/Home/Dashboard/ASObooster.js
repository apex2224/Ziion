import React, { useState } from 'react';
import styles from './ASObooster.module.css';

// Component for the Laptop and Phone SVG illustration (Exposure)
const LaptopAndPhoneSVG1 = ({ laptop, phone }) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 999.1 577.5" style={{ enableBackground: 'new 0 0 999.1 577.5' }} className={styles.svgIllustration}>
        <style type="text/css">
            {`.laptop-and-iphone-0{fill:#FFFFFF;stroke:#E7EAF3;}
            .laptop-and-iphone-1{fill:#F7F7F7;}
            .laptop-and-iphone-2{fill:#FFFFFF;}
            .laptop-and-iphone-3{fill:#E7EAF3;}
            .laptop-and-iphone-4{fill:#F7F7F7;}`}
        </style>
        <path className="laptop-and-iphone-0 fill-white stroke-gray-300" strokeMiterlimit="10" d="M881.3,577H117.5c-14.4,0-26.2-11.8-26.2-26.2V26.7c0-14.4,11.8-26.2,26.2-26.2h763.9 c14.4,0,26.2,11.8,26.2,26.2v524.2C907.5,565.2,895.7,577,881.3,577z"></path>
        <circle className="laptop-and-iphone-1 fill-gray-200" cx="498" cy="23.8" r="3"></circle>
        <path className="laptop-and-iphone-2 fill-white" d="M996.3,561.2H2.9c-1.5,0-2.8-1.3-2.8-2.8l0,0c0-1.5,1.3-2.8,2.8-2.8h993.4c1.5,0,2.8,1.3,2.8,2.8l0,0 C999.1,559.9,997.9,561.2,996.3,561.2z"></path>
        <path className="laptop-and-iphone-3 fill-gray-300" d="M499.6,563L0,561.2c0,0,24.1,11.3,117.8,15.8H498h3.1h380.2c93.7-4.5,117.8-15.8,117.8-15.8L499.6,563z"></path>
        <linearGradient id="laptopAndiPhoneID1" gradientUnits="userSpaceOnUse" x1="403.8206" y1="559.1469" x2="594.97" y2="559.1469">
            <stop offset="5.908129e-07" style={{ stopColor: '#F0F1F2' }}></stop>
            <stop offset="5.235744e-02" style={{ stopColor: '#F6F7F8' }}></stop>
            <stop offset="0.1708" style={{ stopColor: '#FDFDFD' }}></stop>
            <stop offset="0.5" style={{ stopColor: '#FFFFFF' }}></stop>
            <stop offset="0.8292" style={{ stopColor: '#FDFDFD' }}></stop>
            <stop offset="0.9476" style={{ stopColor: '#F6F7F8' }}></stop>
            <stop offset="1" style={{ stopColor: '#F0F1F2' }}></stop>
        </linearGradient>
        <path fill="url(#laptopAndiPhoneID1)" d="M591.4,562.7H407.4c-1.9,0-3.5-1.6-3.5-3.5v-3.5H595v3.5C595,561.1,593.4,562.7,591.4,562.7z"></path>
        <g>
            <defs>
                <rect id="SVGID_2_" x="121.7" y="38" width="752.5" height="469.7"></rect>
            </defs>
            <clipPath id="SVGID_3_">
                <use xlinkHref="#SVGID_2_" style={{ overflow: 'visible' }}></use>
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_3_)' }}>
                <image id="SVGlaptopAndIphoneImg1" style={{ overflow: 'visible' }} width="1618" height="1010" xlinkHref={laptop} transform="matrix(0.4651 0 0 0.4651 121.7472 37.9679)"></image>
            </g>
            <use xlinkHref="#SVGID_2_" style={{ overflow: 'visible', fill: 'none', stroke: '#E7EAF3', strokeMiterlimit: '10' }}></use>
        </g>
        <path className="laptop-and-iphone-0 fill-white stroke-gray-300" strokeMiterlimit="10" d="M944,577H823.1c-29.7,0-54-24.3-54-54V150.9c0-29.7,24.3-54,54-54H944c29.7,0,54,24.3,54,54V523 C998,552.7,973.7,577,944,577z"></path>
        <circle className="laptop-and-iphone-1 fill-gray-200" cx="884.3" cy="543.4" r="18.4"></circle>
        <path className="laptop-and-iphone-4 fill-gray-200" fillRule="evenodd" clipRule="evenodd" d="M899.1,133.7h-30.3c-1.6,0-2.9-1.3-2.9-2.9l0,0c0-1.6,1.3-2.9,2.9-2.9h30.3c1.6,0,2.9,1.3,2.9,2.9l0,0 C902,132.4,900.7,133.7,899.1,133.7z"></path>
        <g>
            <defs>
                <rect id="SVGID_4_" x="783.1" y="154.8" width="202.2" height="361"></rect>
            </defs>
            <clipPath id="SVGID_5_">
                <use xlinkHref="#SVGID_4_" style={{ overflow: 'visible' }}></use>
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_5_)' }}>
                <image id="SVGlaptopAndIphoneImg2" style={{ overflow: 'visible' }} width="282" height="500" xlinkHref={phone} transform="matrix(0.722 0 0 0.722 782.1237 155.3553)"></image>
            </g>
            <use xlinkHref="#SVGID_4_" style={{ overflow: 'visible', fill: 'none', stroke: '#E7EAF3', strokeMiterlimit: '10' }}></use>
        </g>
    </svg>
);

// Component for the Laptop and Phone SVG illustration (Feedback)
const LaptopAndPhoneSVG2 = ({ laptop, phone }) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 999.1 577.5" style={{ enableBackground: 'new 0 0 999.1 577.5' }} className={styles.svgIllustration}>
        <style type="text/css">
            {`.laptop-and-iphone-0{fill:#FFFFFF;stroke:#E7EAF3;}
            .laptop-and-iphone-1{fill:#F7F7F7;}
            .laptop-and-iphone-2{fill:#FFFFFF;}
            .laptop-and-iphone-3{fill:#E7EAF3;}
            .laptop-and-iphone-4{fill:#F7F7F7;}`}
        </style>
        <path className="laptop-and-iphone-0 fill-white stroke-gray-300" strokeMiterlimit="10" d="M881.3,577H117.5c-14.4,0-26.2-11.8-26.2-26.2V26.7c0-14.4,11.8-26.2,26.2-26.2h763.9 c14.4,0,26.2,11.8,26.2,26.2v524.2C907.5,565.2,895.7,577,881.3,577z"></path>
        <circle className="laptop-and-iphone-1 fill-gray-200" cx="498" cy="23.8" r="3"></circle>
        <path className="laptop-and-iphone-2 fill-white" d="M996.3,561.2H2.9c-1.5,0-2.8-1.3-2.8-2.8l0,0c0-1.5,1.3-2.8,2.8-2.8h993.4c1.5,0,2.8,1.3,2.8,2.8l0,0 C999.1,559.9,997.9,561.2,996.3,561.2z"></path>
        <path className="laptop-and-iphone-3 fill-gray-300" d="M499.6,563L0,561.2c0,0,24.1,11.3,117.8,15.8H498h3.1h380.2c93.7-4.5,117.8-15.8,117.8-15.8L499.6,563z"></path>
        <linearGradient id="laptopAndiPhoneID2" gradientUnits="userSpaceOnUse" x1="403.8206" y1="559.1469" x2="594.97" y2="559.1469">
            <stop offset="5.908129e-07" style={{ stopColor: '#F0F1F2' }}></stop>
            <stop offset="5.235744e-02" style={{ stopColor: '#F6F7F8' }}></stop>
            <stop offset="0.1708" style={{ stopColor: '#FDFDFD' }}></stop>
            <stop offset="0.5" style={{ stopColor: '#FFFFFF' }}></stop>
            <stop offset="0.8292" style={{ stopColor: '#FDFDFD' }}></stop>
            <stop offset="0.9476" style={{ stopColor: '#F6F7F8' }}></stop>
            <stop offset="1" style={{ stopColor: '#F0F1F2' }}></stop>
        </linearGradient>
        <path fill="url(#laptopAndiPhoneID2)" d="M591.4,562.7H407.4c-1.9,0-3.5-1.6-3.5-3.5v-3.5H595v3.5C595,561.1,593.4,562.7,591.4,562.7z"></path>
        <g>
            <defs>
                <rect id="SVGID_2_" x="121.7" y="38" width="752.5" height="469.7"></rect>
            </defs>
            <clipPath id="SVGID_3_">
                <use xlinkHref="#SVGID_2_" style={{ overflow: 'visible' }}></use>
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_3_)' }}>
                <image id="SVGlaptopAndIphoneImg1" style={{ overflow: 'visible' }} width="1618" height="1010" xlinkHref={laptop} transform="matrix(0.4651 0 0 0.4651 121.7472 37.9679)"></image>
            </g>
            <use xlinkHref="#SVGID_2_" style={{ overflow: 'visible', fill: 'none', stroke: '#E7EAF3', strokeMiterlimit: '10' }}></use>
        </g>
        <path className="laptop-and-iphone-0 fill-white stroke-gray-300" strokeMiterlimit="10" d="M944,577H823.1c-29.7,0-54-24.3-54-54V150.9c0-29.7,24.3-54,54-54H944c29.7,0,54,24.3,54,54V523 C998,552.7,973.7,577,944,577z"></path>
        <circle className="laptop-and-iphone-1 fill-gray-200" cx="884.3" cy="543.4" r="18.4"></circle>
        <path className="laptop-and-iphone-4 fill-gray-200" fillRule="evenodd" clipRule="evenodd" d="M899.1,133.7h-30.3c-1.6,0-2.9-1.3-2.9-2.9l0,0c0-1.6,1.3-2.9,2.9-2.9h30.3c1.6,0,2.9,1.3,2.9,2.9l0,0 C902,132.4,900.7,133.7,899.1,133.7z"></path>
        <g>
            <defs>
                <rect id="SVGID_4_" x="783.1" y="154.8" width="202.2" height="361"></rect>
            </defs>
            <clipPath id="SVGID_5_">
                <use xlinkHref="#SVGID_4_" style={{ overflow: 'visible' }}></use>
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_5_)' }}>
                <image id="SVGlaptopAndIphoneImg2" style={{ overflow: 'visible' }} width="282" height="500" xlinkHref={phone} transform="matrix(0.722 0 0 0.722 782.1237 155.3553)"></image>
            </g>
            <use xlinkHref="#SVGID_4_" style={{ overflow: 'visible', fill: 'none', stroke: '#E7EAF3', strokeMiterlimit: '10' }}></use>
        </g>
    </svg>
);


const HikerManSVG = () => (
    <div className={styles.hikerManSVGWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1036.9 778.8" style={{ enableBackground: 'new 0 0 1036.9 778.8' }} className="injected-svg js-svg-injector" data-parent="#SVGHero">
            <style type="text/css">
                {`.hiker-man-0{fill:#E7EAF3;}
                .hiker-man-1{fill:#F8FAFD;}
                .hiker-man-2{fill:none;stroke:#1E2022;}
                .hiker-man-3{fill:#377DFF;}
                .hiker-man-4{fill:none;stroke:#FFFFFF;}`}
            </style>
            <g id="shadows">
                <path className="hiker-man-0 fill-gray-300" d="M547.7,205.7c0.6,10,2,100-30.5,112.3c36.5,2.1,48.8-2.9,48.8-2.9l2.1-8.4l2.6-8.3l2.5-16.9l1.7-27.8 l-1.3-26.8l-5.2,2.1l-5-2.4l-11.4-12.2L547.7,205.7z"></path>
                <path className="hiker-man-0 fill-gray-300" d="M455.9,99.4c-4,2.3-30.7,33.4-30.1,55.6c7.1,5.8,22.1,14.4,22.1,14.4l6.3-11.8l8.5-12.7l11.6-10l-2.9-10 l-5.9-16L455.9,99.4z"></path>
                <polygon className="hiker-man-0 fill-gray-300" points="477.8,127.6 477.8,132.3 486.3,127.5 507.9,119.9 508.5,113.9 487.8,114.6 479.1,119.4 "></polygon>
                <polygon className="hiker-man-0 fill-gray-300" points="538.2,114.8 587.9,114.4 594.1,117.9 597.9,125.7 597.5,165.8 583.9,153.7 567.3,146.1 553.8,144.9 549.5,137.7 540.5,127 535.9,125.6 "></polygon>
                <polygon className="hiker-man-0 fill-gray-300" points="597.5,247.9 597.9,287.2 597.6,326.3 594.2,334.4 584.9,337.7 573.8,336.8 566.9,308.4 570.9,300 574.9,262.5 574.4,227.1 577.6,225.7 "></polygon>
            </g>
            <path className="hiker-man-1 fill-gray-200" d="M742.6,97.8c-54.7-31.1-116.3-44.2-180.1-49.4l3.8,8.7l-0.8,9.6l-3.1,7.1l-8.6,5.5l-6,2l-5.5,13.8l-4.1,19.7 l27.1-0.3l26,0.7l5.7,6l0.9,11.2l-1.2,32.2l7.1,8.2l6.9,9.9l1.8,6.4l-3.1,7.7l7.8,9.6l21.8,30.3l24.5,34.8l16.9,26.3l5.1,6.7l12.4,7 l4.3,8.8l-0.8,9.8l-4.6,7.1l-8.2,4l-10-1l-7.4-5.7l-4.9-13.6l-27.5-27.5l-41.1-45.4l0.4,25v38.6l-0.4,17l-4.9,6.3l-4.5,2.1 l-15.7,0.3L444,316.8l-3.8-1.5c-1.5-0.3-2.9-0.8-4.2-1.6l0,0l0,0c-0.2-0.1-0.4-0.3-0.5-0.5c-0.6-0.7-1.2-2.5-1.8-5.4l0,0 c-1.4-6.3-2.7-17.4-3.2-31.1l-0.2-2l0-3.9c-0.1-6,0-12.5,0.2-19.2l0.1-7l0.7-5.9c0.6-7.2,1.5-14.5,2.7-21.9v-0.1v-0.1 c1.1-6.4,2.4-12.9,4-19.3v-0.1l0,0c2.4-9.6,5.7-19,9.9-28l0,0c-4.6-2-8.9-4.4-13-7.3l0,0l-0.2-0.1c-0.9-0.6-1.8-1.3-2.7-2l-7.7-5.6 l-5.6-6.5c-1.1-1.2-2.1-2.3-3-3.4l0,0l0,0c-1.4-1.7-2.7-3.4-3.8-5.3l-1.6-2.4l0.2-0.8c-0.1-0.2-0.1-0.4-0.1-0.6 c0-1.8,0.4-3.6,1.4-5.2l0,0l-18-21.7L381.9,88l-1.4-10.1l2.6-7.4l11.8-12.5L410,46.5c-71.9,3.6-137.4,16.3-174.1,56.4 c-47.1,51.3-46.4,148.1-53.6,236.3s-22.3,168.1,0.7,242.9c18.8,61.5,63.4,119.9,117.8,144.9c86.2-59.6,250.5-147.2,407.7-207.7 c2.8-2.5,5.6-5,8.5-7.5c64.5-57,150.5-128,160.8-205.7C888.1,228.2,822.7,143.5,742.6,97.8z"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M491,58.7c-1.2,4.2-1.8,8.5-1.8,12.9c0,16.3,8.2,30.1,19.7,35.3l-1.5,14.1"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M518.4,134.6c7.1,1.6,14.8,2,15.5-0.3c1-3.6,6.6-30.2,8.5-39.5c2.5-4,4.2-8.4,5.2-12.9"></path>
            <path className="hiker-man-3 fill-primary" d="M823.4,479.3c-8.3-2.9-35.7-39-35.7-81.9c0-49.8,52.8-144.2,57.8-177.8C848.7,198.3,863.1,10,972.4,10 c59.6,0,64.6,116.5,64.6,168.6c0,121.7-177,225.4-177,288.6C848.1,472.2,835.9,476.2,823.4,479.3z"></path>
            <path className="hiker-man-4 fill-none stroke-white" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M836.9,474.8c0-97.6,72.8-275.5,136.9-338.1"></path>
            <path d="M323.7,710.6c-5.6-1.7-20.8-21-20.8-45.9c0-24,6.7-59,6.7-91.5c0-18.1-6.7-24.5-6.7-46c0-34.2,32.5-44.7,43.8-44.7 c16.8,0,25.7,14.3,25.7,21.9c0,10.6-3,18.6-3,30.3c0,22.9,8,25.8,7.2,45.5c-2.5,57.7-26.5,114.1-47.5,126.9L323.7,710.6z"></path>
            <path className="hiker-man-3 fill-primary" d="M323.7,710.6c6.8-5.9-31.5-192.5-64.7-225.5c-36.1-35.9-65.9-54.9-75.7-66.7c-17.4-20.9-28.5-99.7-105.1-99.7 c-20.3,0-68,16.8-76.6,87.6c-2.8,23.3-7.9,58.9,40.5,110.5c32.6,34.8,73.4,22.8,113.3,60.4c28.7,27.1,24.7,68,51.5,102.5 C228.4,707.4,284.1,744.7,323.7,710.6z"></path>
            <path className="hiker-man-4 fill-none stroke-white" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M314.3,715.1c0-46.8-147.7-258.2-206.8-288.4"></path>
            <path className="hiker-man-4 fill-none stroke-white" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M323.7,710.6c-1.5-11.1-7.7-105.4,9.9-139.8"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="7" strokeLinecap="round" strokeMiterlimit="10" d="M243.9,775.3C288.1,712.2,683,496.8,920.3,457"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M477.6,132.5v-6.3c0-6.6,5.4-12,12-12h18.6"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M597.5,247.9v77.3c0,6.6-5.4,12-12,12h-17.1"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M538.4,114.2h47.1c6.6,0,12,5.4,12,12v39.1"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M487.9,701.7v26h-70.6v-11l43.7-20.1L487.9,701.7z"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M641,676.8c3.6,8,12,28.7,12,28.7l-35.2,22.2h-31.9l-3.7-12.2l40.1-30.7L641,676.8z"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M498.5,11c0.5-2.2,0-4.5-1.2-6.4c-3.9-5.4-14.9-4.1-24.6,2.8c-3.7,2.6-6.8,5.9-9.2,9.7c-0.3-0.1-0.7-0.2-1-0.2 c-4.7,0-82.8,41.8-82.1,61.1c0.6,16.6,20,41.7,31.3,52.2"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M447.7,99c-8-8-19.5-17.6-22.3-20.3c4.9-2.6,44.1-41.4,48.5-45.8c4.7-1,9.1-3,12.9-5.9 c6.6-4.7,10.8-10.9,11.7-16"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M474.3,134.9c-4.4-17.6-12.7-35.6-21.3-36.4c-16-1.5-43.8,28.6-42.7,37.1c0.7,5.7,18.9,26,37.6,33.8"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M536.1,124.9c7.2,4.3,13.3,11.4,18.2,20.5"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M573.6,226.9c2.8,40.4-1.5,78-7.7,82.8c-14,11-123.5,11.5-130.5,3.5c-6.7-7.7-22.2-178.9,72-192.2"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M532,60c2.3,3.8,4.8,7.4,7.3,8.2c0.2,0,0.3,0.1,0.5,0.2"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M473.2,33.6c-0.9,1.1-1.3,2.4-1.4,3.8c0,9.1,0.2,21.4,19.2,21.4c1.3-4.4,6-14,11.4-18.3c1,0.4,3.5,1.5,6.5,2.7"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M549.8,80.5c4.3-0.5,16.5-2.3,16.5-21.6c0-7.6-7.3-13.1-7.3-17.3s2.5-11.8-3.1-17.2c-6.8-6.6-17.6-3.8-27.2-3.8 c-9.1,0-14.1-10.5-26.5-10.5c-1.3,0-2.6,0.3-3.8,1"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M538.8,69.3c2.9-3.2,7.9-3.5,11.1-0.6s3.5,7.9,0.6,11.1c-0.8,0.8-1.7,1.5-2.8,2"></path>
            <line className="hiker-man-2 fill-none stroke-dark" strokeWidth="7" strokeLinecap="round" strokeMiterlimit="10" x1="677.6" y1="338.6" x2="606.6" y2="690.3"></line>
            <line className="hiker-man-2 fill-none stroke-dark" strokeWidth="7" strokeLinecap="round" strokeMiterlimit="10" x1="714" y1="157.7" x2="684.9" y2="302.4"></line>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M577.6,225c14,16.2,61.9,72.1,88.5,95.3c0,5.4,2.1,10.6,6,14.4c7.4,7.4,18.8,8.1,25.4,1.5s6-18-1.4-25.4 c-3-3-6.8-5-11-5.8c-12.7-20.5-54.4-81.6-75.6-108.2"></path>
            <path className="hiker-man-2 fill-none stroke-dark" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" d="M544.8,149.5c25.9-19.2,68.5,27.3,67.8,39.5s-33.5,39.4-44.7,39.4C554.2,228.4,522.7,165.9,544.8,149.5z"></path>
            <path d="M568,306.7c-0.5,1.2-1.2,2.2-2.1,3c-8.7,6.9-54.7,9.6-89.7,8.8c16.8,83.5,133,355.4,142.2,369.8c7.2,1.5,23.6-5.6,26.2-10.3 C647.1,673.7,578.2,341.8,568,306.7z"></path>
            <path d="M439.2,315.1c0.3,28.8,5.3,355.1,14,384.2c8,4,29,5,36,2c6.3-2.7,43.5-313.4,50.5-385.1C506.7,320,454.1,319.5,439.2,315.1z "></path>
        </svg>
    </div>
);

const ASObooster = () => {
    // Define an object to hold the different content for the features section
    const featuresContent = {
        getExposure: <LaptopAndPhoneSVG1 laptop="//tswcdn.xyz/theme/front/assets/img/1618x1010/img2.jpg" phone="//tswcdn.xyz/theme/front/assets/img/282x500/img8.jpg" />,
        earnBacklinks: <LaptopAndPhoneSVG2 laptop="//tswcdn.xyz/theme/front/assets/img/1618x1010/img3.jpg" phone="//tswcdn.xyz/theme/front/assets/img/282x500/img9.jpg" />,
        getFeedback: <LaptopAndPhoneSVG1 laptop="//tswcdn.xyz/theme/front/assets/img/1618x1010/img1.jpg" phone="//tswcdn.xyz/theme/front/assets/img/282x500/img7.jpg" />,
    };

    const [currentFeature, setCurrentFeature] = useState('getExposure');

    const handleFeatureClick = (featureKey) => {
        setCurrentFeature(featureKey);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <h1 className={styles.title}>
                        Launch your app on 100+ <br /> Application Directories.
                    </h1>
                    <p className={styles.description}>
                        ASO Booster manually submits your app to 100+ <br />
                        active application directories with high approval rate. <br />
                        Save your valuable time. Starts at just $20.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.viewListButton}>View List</button>
                        <button className={styles.letsChatButton}>Let's Chat</button>
                    </div>
                    <p className={styles.note}>
                        Get full list for free. * No credit card required.
                    </p>
                </div>
                <div className={styles.contentRight}>
                    {/* Render the static HikerMan SVG */}
                    <HikerManSVG />
                </div>
            </div>

            

            <div className={styles.featuresSection}>
                <div className={styles.featuresContainer}>
                    <div className={styles.featuresSVG}>
                        {/* Render the Laptop and Phone SVG based on current feature */}
                        {featuresContent[currentFeature]}
                    </div>
                    <div className={styles.featuresBoxes}>
                        <div className={`${styles.featureBox} ${currentFeature === 'getExposure' ? styles.activeFeature : ''}`} onClick={() => handleFeatureClick('getExposure')}>
                            <div className={styles.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 10-10 10-10-10z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <div className={styles.featureText}>
                                <h3>Get exposure</h3>
                                <p>Get in front of plenty of users which are seeking to try new apps and games.</p>
                            </div>
                        </div>

                        {/* Earn Backlinks Feature Box */}
                        <div className={`${styles.featureBox} ${currentFeature === 'earnBacklinks' ? styles.activeFeature : ''}`} onClick={() => handleFeatureClick('earnBacklinks')}>
                            <div className={styles.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 10H16l-4 4-4-4h2.5V4h3v6z"></path><path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path></svg>
                            </div>
                            <div className={styles.featureText}>
                                <h3>Earn Backlinks</h3>
                                <p>Get linked from important directories which will improve your SEO, means more visitors.</p>
                            </div>
                        </div>

                        {/* Get Feedback Feature Box */}
                        <div className={`${styles.featureBox} ${currentFeature === 'getFeedback' ? styles.activeFeature : ''}`} onClick={() => handleFeatureClick('getFeedback')}>
                            <div className={styles.featureIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <div className={styles.featureText}>
                                <h3>Get Feedback</h3>
                                <p>Some of these directories will allow users to comment about your apps & games.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ASObooster;