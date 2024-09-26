import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div className="">
			<header className="bg-mirage text-white">
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
				<div>
					<img src={'/images/logo.svg'} alt={'logo'} />
					<h1>Exquisite dining since 1989</h1>
					<p>
						Experience our seasonal menu in beautiful country
						surroundings. Eat the freshest produce from the comfort of
						our farmhouse.
					</p>
					<Button>BOOK A TABLE</Button>
				</div>
			</header>
		</div>
	)
}
