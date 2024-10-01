import ItemAbout from '@/components/itemAbout'
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
				<ItemAbout
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
					title="Enjoyable place "
					title2="for all the family"
					text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
				/>
				<ItemAbout
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
					title="The most locally"
					title2="sourced food"
					text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
					className="lg:flex-row-reverse"
				/>
			</section>
		</div>
	)
}
