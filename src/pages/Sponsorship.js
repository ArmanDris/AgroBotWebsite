import React, { useState } from "react";
import Slider from "react-slick";

import { ieee, fcc, ece, chbe, lfs, gage } from "../assets";
import { FaArrowRight } from "react-icons/fa6";

const Sponsorship = () => {

    const [leftOffset, setLeftOffset] = useState(0)

    const items = [
        { image: ieee, alt: 'ieee' },
        { image: fcc, alt: 'fcc' },
        { image: ece, alt: 'ece' },
        { image: chbe, alt: 'chbe' },
        { image: lfs, alt: 'lfs' },
        { image: gage, alt: 'gage' },
    ];

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        speed: 4000 * items.length,
        autoplaySpeed: 0,
        slidesToScroll: items.length,
        autoplay: true,
        cssEase: 'linear',
        rtl: true,
    };

    return (
        <div className="pt-64 pb-32">
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className="min-h-screen px-48 pb-24">
                <h1 className="text-[96px] font-bold">Sponsor <br />UBC Agrobot</h1>
                <p className="text-[48px] font-medium w-[100%] pt-5">Sponsors are the lifeblood of UBC Agrobot. If you would like to help us build the future of farming send us an email at <u>agrobot@gmail.com</u>. For  detailed information about sponsorship you can read our <u>sponsorship package</u>.</p>
                <h2 className="text-[64px] font-bold pt-16">Sponsorship tiers</h2>
                <div className="flex justify-between pt-12">
                    <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                        <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                            <p className="text-[128px]">🌱</p>
                        </div>
                        <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$100+</h3>
                        <h3 className="font-medium text-[48px] text-white pt-12">Seedling</h3>
                        <ul className="text-white text-[24px] pt-8">
                            <li>&bull; logo on our website</li>
                            <li>&bull; logo on Agrobot marketing</li>
                        </ul>
                    </div>
                    <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                        <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                            <p className="text-[128px]">🪴</p>
                        </div>
                        <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$500+</h3>
                        <h3 className="font-medium text-[48px] text-white pt-12">Sapling</h3>
                        <ul className="text-white text-[24px] pt-8">
                            <li>&bull; logo on our website</li>
                            <li>&bull; logo on Agrobot marketing</li>
                        </ul>
                    </div>
                    <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                        <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                            <p className="text-[128px]">🌳</p>
                        </div>
                        <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$1000+</h3>
                        <h3 className="font-medium text-[48px] text-white pt-12">Pine</h3>
                        <ul className="text-white text-[24px] pt-8">
                            <li>&bull; logo on our website</li>
                            <li>&bull; logo on Agrobot marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="h-[300px] py-[50px] bg-[#FFFFFF80] w-screen flex justify-center overflow-hidden">
                {items.map((item, index) => (
                    <div className="h-[200px] px-8" key={index}>
                        <img className="h-full" src={item.image} alt={item.alt} />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-col justify-center items-center pt-32">
                <p className="text-[48px] font-semibold text-center leading-[80px] bg-glass p-8 text-[#2E1B0F] rounded-[46px]">We would love for you to join the team!<br />
                    <a className="font-bold cursor-pointer text-[56px] decoration-[#68beed] text-[#68beed]">Sponsor us <FaArrowRight className="inline" color="#68beed" /></a></p>
            </div>
        </div>
    );
};

export default Sponsorship;