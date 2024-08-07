import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { ieee, fcc, ece, chbe, lfs, gage, UBCArtsNyah } from "../assets";
import { FaArrowRight } from "react-icons/fa6";

function SponsorTier({ title, emoji, price, bullets }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
	return (
		<div className="mb-4 lg:mb-0 w-[312px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-4 pb-6">
			<div className="w-[286px] h-[128px] lg:h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
				<p className="text-[64px] lg:text-[128px]">{emoji}</p>
			</div>
			<h3 className="font-medium text-[32px] text-[#78BE20] py-4">{price}</h3>
			<h3 className="font-medium text-[32px] text-white">{title}</h3>
			<ul className="text-white text-[24px] py-4 w-[70%] list-disc">
				{bullets.map((val, index) => (
					<li key={index}>{val}</li>
				))
				}
			</ul>
		</div>
	)
}

const Sponsorship = () => {

	const [leftOffset, setLeftOffset] = useState(0)

	const items = [
		{ image: ieee, alt: 'ieee' },
		{ image: fcc, alt: 'fcc' },
		{ image: ece, alt: 'ece' },
		{ image: chbe, alt: 'chbe' },
		{ image: lfs, alt: 'lfs' },
		{ image: gage, alt: 'gage' },
		{ image: UBCArtsNyah, alt: 'UBCArts'}
	];

	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		speed: 4000 * items.length,
		autoplaySpeed: 0,
		slidesToScroll: items.length,
		autoplay: true,
		cssEase: 'linear',
		rtl: true,
	};

	return (
		<>
			<div className="w-mobile-content mt-mobile-standard lg:mt-standard lg:w-content mx-auto">
				<div className="min-h-screen pb-24">
					<h1 className="text-mobile-header lg:text-header font-bold">Sponsor <br />UBC Agrobot</h1>
					<p className="text-mobile-body lg:text-body font-medium w-[100%] pt-5">Sponsors are the lifeblood of UBC Agrobot. If you would like to help us build the future of farming send us an email at <a href="mailto:ubcagrobot@gmail.com"><u>agrobot@gmail.com</u></a>. For  detailed information about sponsorship you can read our <u>sponsorship package</u>.</p>
					<h2 className="text-mobile-body lg:text-body font-bold pt-16">Sponsorship tiers</h2>
					<div className="flex-col lg:flex-row flex justify-between pt-12">
						<SponsorTier title="Seedling" emoji="🌱" price="$100+" bullets={["logo on website", "logo on marketing"]} />
						<SponsorTier title="Sapling" emoji="🪴" price="$500+" bullets={["logo on website", "logo on marketing"]} />
						<SponsorTier title="Bonsai" emoji="🌳" price="$1000+" bullets={["logo on website", "logo on marketing"]} />
					</div>
				</div>
			</div>
			<div className='bg-glass w-full md:w-full overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
				{[...Array(2)].map((arr, i) => (
					<div className='flex flex-nowrap animate-slide'>
						{items.map((item, i) => (
							<div key={item.alt} className='relative w-[175px] m-5 shrink-0 flex items-center'>
								<img src={item.image} alt={item.alt} className="object-contain max-w-none w-[100px] filter" />
							</div>
						))}
					</div>
				))}
			</div>
			<div className="mx-auto w-[280px] lg:w-[600px] bg-[#2E1B0F] rounded-[46px] flex flex-col justify-center items-center my-24 p-8">
				<p className=" text-white text-mobile-body lg:text-body font-medium text-center pb-2 lg:pb-6">We would love to have you!</p>
				<a href="mailto:ubcagrobot@gmail.com" className="text-center font-bold cursor-pointer text-mobile-header lg:text-header text-[#78be20]">Sponsor us <FaArrowRight className="inline" color="#78be20" /></a>
			</div>
		</>
	);
};

export default Sponsorship;
