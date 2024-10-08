import ItemProduct from '@/components/itemProduct'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className="max-w-[90rem] flex flex-col justify-center items-center mx-auto">
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
			<section>
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
					className="gap-5 lg:gap-10"
					divClassName="lg:py-28 mb-20 gap-5 lg:gap-10"
					headClassName="max-w-[15rem] md:max-w-[25rem] lg:mt-6"
				/>
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
								className="w-full lg:max-h-[35rem]"
							/>
						</picture>
					}
					title="The most locally sourced food"
					text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
					className="lg:flex-row-reverse gap-5 lg:gap-10 mb-8"
					isActive={true}
					divClassName="lg:py-28 gap-5 lg:gap-10"
					headClassName="max-w-[15rem] md:max-w-[25rem] lg:mt-6"
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
		</div>
	)
}
