import { Button } from '@/components/ui/button'
import ReservationForm from '@/components/formData'
import Footer from '@/components/footer'

export default function Reservations() {
	return (
		<div>
			<div className="grid *:col-start-1 *:row-start-1 text-white justify-center md:items-start">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/images/booking/hero-bg-desktop@2x.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/images/booking/hero-bg-tablet@2x.jpg"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/images/booking/hero-bg-mobile@2x.jpg"
					/>
					<img
						src="/images/booking/hero-bg-mobile@2x.jpg"
						alt="food"
						className="w-full object-cover"
					/>
				</picture>
				<div className=" p-6 w-full">
					<img src="/images/logo.svg" alt="logo" />
				</div>
				<div className="p-6 gap-5 flex flex-col items-center lg:items-start mt-32">
					<h2 className="text-[2rem] md:text-5xl lg:text-[5rem] font-light leading-10 md:leading-[4rem] lg:leading-[5rem] tracking-[-0.025rem]  md:tracking-[-0.0375rem] lg:tracking-[-0.0625rem] text-center">
						Reservations
					</h2>
					<p className="max-w-[30rem] lg:max-w-[25rem] text-center">
						We can’t wait to host you. If you have any special
						requirements please feel free to call on the phone number
						below. We’ll be happy to accommodate you.
					</p>
					<Button className="bg-transparent max-w-[15.3125rem] mt-8 block md:hidden mx-auto">
						RESERVE PLACE
					</Button>
				</div>
				<div className="absolute text-black ml-[15rem] mb-[5rem]">
					<ReservationForm />
				</div>
			</div>
			<div className="hidden lg:block relative">
				<img
					src="/images/patterns/pattern-curve-bottom-right.svg"
					alt="pattern"
				/>
				<img
					src="/images/patterns/pattern-lines.svg"
					alt="pattern"
					className="hidden lg:block absolute z-20 inset-0"
				/>
			</div>
			<Footer />
		</div>
	)
}
