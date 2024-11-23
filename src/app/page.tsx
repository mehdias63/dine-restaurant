import ItemProduct from '@/components/itemProduct'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className="max-w-[90rem] flex flex-col justify-center items-center mx-auto overflow-hidden">
			<header className="text-white grid *:col-start-1 *:row-start-1">
				<div>
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/images/homepage/hero-bg-desktop@2x.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/images/homepage/hero-bg-tablet@2x.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/images/homepage/hero-bg-mobile@2x.jpg"
						/>
						<img
							src="/images/homepage/hero-bg-mobile@2x.jpg"
							alt="food"
							className="w-full object-cover"
						/>
					</picture>
				</div>
				<div
					className="flex flex-col justify-center items-center lg:items-start gap-8
				p-6 lg:px-[10rem]"
				>
					<img src={'/images/logo.svg'} alt={'logo'} />
					<h1 className="text-[2rem] leading-[2.5rem] tracking-[-0.025rem] font-light md:text-heading-l lg:text-heading-xl text-center lg:text-left">
						Exquisite dining <br />
						since 1989
					</h1>
					<p className="text-center lg:text-left lg:max-w-[27.8125rem]">
						Experience our seasonal menu in beautiful country
						surroundings. Eat the freshest produce from the comfort of
						our farmhouse.
					</p>
					<Button className="mt-8">BOOK A TABLE</Button>
				</div>
			</header>
			<section className="relative ">
				<div className="hidden md:block absolute left-[-35rem] top-[4rem] lg:left-[-15rem] lg:top-[10rem]">
					<img
						src="/images/patterns/pattern-curve-top-right.svg"
						alt="pattern"
					/>
				</div>
				<ItemProduct
					images={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/images/homepage/enjoyable-place-desktop.jpg"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/images/homepage/enjoyable-place-tablet.jpg"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/images/homepage/enjoyable-place-mobile.jpg"
							/>
							<img
								src="/images/homepage/enjoyable-place-mobile.jpg"
								alt="summer"
								className="w-full mt-[-5rem] lg:mt-[-3rem] lg:max-h-[35rem]"
							/>
						</picture>
					}
					title="Enjoyable place for all the family"
					text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
					isActive={true}
					className="gap-5 lg:gap-36"
					divClassName="lg:py-28 mb-20 gap-5 lg:gap-10"
					headClassName="max-w-[15rem] md:max-w-[25rem] mt-6"
				/>
				<div className="hidden md:block absolute right-[-43rem] bottom-[-5rem] lg:right-[-16rem] lg:bottom-0">
					<img
						src="/images/patterns/pattern-curve-top-left.svg"
						alt="pattern"
					/>
				</div>
				<div className="hidden md:block absolute right-0 bottom-[25rem] lg:bottom-[16rem] lg:right-[-5rem] z-20">
					<img
						src="/images/patterns/pattern-lines.svg"
						alt="pattern"
					/>
				</div>
				<ItemProduct
					images={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/images/homepage/locally-sourced-desktop.jpg"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/images/homepage/locally-sourced-tablet.jpg"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/images/homepage/locally-sourced-mobile.jpg"
							/>
							<img
								src="/images/homepage/locally-sourced-mobile.jpg"
								alt="summer"
								className="w-full lg:max-h-[35rem] lg:mb-[-5rem] z-10"
							/>
						</picture>
					}
					title="The most locally sourced food"
					text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
					className="lg:flex-row-reverse gap-5 lg:gap-36 mb-8 lg:mb-0"
					isActive={true}
					divClassName="lg:py-28 gap-5 lg:gap-10"
					headClassName="max-w-[15rem] md:max-w-[25rem] mt-6"
				/>
			</section>
			<section className="w-full bg-black text-white flex flex-col lg:flex-row p-6 lg:p-10 gap-6 lg:pt-60">
				<div className="flex flex-col items-center lg:items-start gap-6">
					<img src="/images/patterns/pattern-divide.svg" alt="icon" />
					<h2
						className="text-heading-m
            md:text-[3rem] md:leading-[3rem] md:tracking-[-0.03125rem] font-bold lg:mt-6 text-center lg:text-left"
					>
						A few highlights from our menu
					</h2>
					<p className="text-body-s mx-6 md:max-w-[28rem] lg:mx-0">
						We cater for all dietary requirements, but here’s a
						glimpse at some of our diner’s favourites. Our menu is
						revamped every season.
					</p>
				</div>
				<div className="w-full lg:mt-12">
					<ItemProduct
						images={
							<picture>
								<source
									media="(min-width: 1024px)"
									srcSet="/images/homepage/salmon-desktop-tablet.jpg"
								/>
								<source
									media="(min-width: 768px)"
									srcSet="/images/homepage/salmon-desktop-tablet@2x.jpg"
								/>
								<source
									media="(max-width: 767px)"
									srcSet="/images/homepage/salmon-mobile@2x.jpg"
								/>
								<img
									src="/images/homepage/salmon-mobile@2x.jpg"
									alt="summer"
									className="w-full object-cover"
								/>
							</picture>
						}
						title="Seared Salmon Fillet"
						text="Our locally sourced salmon served with a refreshing buckwheat summer salad."
						className="gap-4 mb-4 lg:justify-center lg:items-center"
						headClassName="text-body-m md:text-body-m"
						parClassName="md:text-body-s"
					/>
					<ItemProduct
						images={
							<picture>
								<source
									media="(min-width: 1024px)"
									srcSet="/images/homepage/beef-desktop-tablet.jpg"
								/>
								<source
									media="(min-width: 768px)"
									srcSet="/images/homepage/beef-desktop-tablet@2x.jpg"
								/>
								<source
									media="(max-width: 767px)"
									srcSet="/images/homepage/beef-mobile@2x.jpg"
								/>
								<img
									src="/images/homepage/beef-mobile@2x.jpg"
									alt="summer"
									className="w-full lg:max-h-[35rem]"
								/>
							</picture>
						}
						title="Rosemary Filet Mignon"
						text="Our prime beef served to your taste with a delicious choice of seasonal sides."
						className="gap-4 mb-4 lg:justify-center lg:items-center"
						headClassName="text-body-m md:text-body-m"
						parClassName="md:text-body-s"
					/>
					<ItemProduct
						images={
							<picture>
								<source
									media="(min-width: 1024px)"
									srcSet="/images/homepage/chocolate-desktop-tablet.jpg"
								/>
								<source
									media="(min-width: 768px)"
									srcSet="/images/homepage/chocolate-desktop-tablet@2x.jpg"
								/>
								<source
									media="(max-width: 767px)"
									srcSet="/images/homepage/chocolate-mobile@2x.jpg"
								/>
								<img
									src="/images/homepage/chocolate-mobile@2x.jpg"
									alt="summer"
									className="w-full lg:max-h-[35rem]"
								/>
							</picture>
						}
						title="Summer Fruit Chocolate Mousse"
						text="Creamy mousse combined with summer fruits and dark chocolate shavings."
						className="gap-4 mb-4 lg:justify-center lg:items-center"
						headClassName="text-body-m md:text-body-m"
						parClassName="md:text-body-s"
					/>
				</div>
			</section>
			<section className="flex flex-col lg:flex-row p-6 relative">
				<div className="hidden md:block absolute top-0 left-[-25rem] lg:left-[-31rem]">
					<img
						src="/images/patterns/pattern-curve-top-right.svg"
						alt="pattern"
					/>
				</div>
				<div className="hidden md:block absolute z-20">
					<img
						src="/images/patterns/pattern-lines.svg"
						alt="pattern"
					/>
				</div>
				<div className="p-6 md:p-10 lg:p-30 lg:max-w-[34rem]">
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/images/homepage/family-gathering-desktop@2x.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/images/homepage/family-gathering-tablet@2x.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/images/homepage/family-gathering-mobile@2x.jpg"
						/>
						<img
							src="/images/homepage/family-gathering-mobile@2x.jpg"
							alt="food"
							className="w-full object-cover"
						/>
					</picture>
				</div>
				<div className="flex flex-col items-center lg:items-start gap-4 lg:p-20 lg:gap-10">
					<div className="lg:order-1 flex flex-col md:flex-row lg:flex-col gap-3 md:gap-10 lg:gap-5">
						<h3 className="text-heading-s text-dark-gray cursor-pointer">
							FAMILY GATHERING
						</h3>
						<h3 className="text-heading-s text-dark-gray opacity-50 hover:opacity-100 cursor-pointer">
							SPECIAL EVENTS
						</h3>
						<h3 className="text-heading-s text-dark-gray opacity-50 hover:opacity-100 cursor-pointer">
							SOCIAL EVENTS
						</h3>
					</div>
					<h2 className="text-heading-m md:text-heading-l text-dark">
						Family Gathering
					</h2>
					<p className="max-w-[28rem] text-body-m text-dark text-center lg:text-left">
						We love catering for entire families. So please bring
						everyone along for a special meal with your loved ones.
						We’ll provide a memorable experience for all.
					</p>
					<Button className="">BOOK A TABLE</Button>
				</div>
			</section>
			<div className="grid *:col-start-1 *:row-start-1 items-center text-white">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/images/homepage/ready-bg-desktop@2x.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/images/homepage/ready-bg-tablet@2x.jpg"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/images/homepage/ready-bg-mobile@2x.jpg"
					/>
					<img
						src="/images/homepage/ready-bg-mobile@2x.jpg"
						alt="food"
						className="w-full object-cover"
					/>
				</picture>
				<div className="p-6 flex flex-col lg:flex-row items-center lg:justify-between lg:px-16 xl:px-40">
					<h2 className="text-heading-m md:text-heading-l text-center">
						Ready to make a reservation?
					</h2>
					<Button className="bg-transparent block  mt-12 lg:mt-0">
						BOOK A TABLE
					</Button>
				</div>
			</div>
			<footer className="bg-black text-white flex justify-around items-center w-full flex-col md:flex-row py-20 px-6">
				<img src={'/images/logo.svg'} alt={'logo'} />
				<div className="lg:w-2/3 lg:flex justify-around">
					<p className="text-center md:text-left my-6 text-body-s uppercase">
						Marthwaite, Sedbergh
						<br /> Cumbria
						<br />
						+00 44 123 4567
					</p>
					<p className="text-center md:text-left lg:my-6 text-body-s uppercase">
						OPEN TIMES
						<br /> MON - FRI: 09:00 AM - 10:00 PM
						<br /> SAT - SUN: 09:00 AM - 11:30 PM
					</p>
				</div>
			</footer>
		</div>
	)
}
