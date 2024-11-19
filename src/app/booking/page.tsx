import { Button } from '@/components/ui/button'
import ReservationForm from '@/components/formData'

export default function Reservations() {
	return (
		<div>
			<div className="grid *:col-start-1 *:row-start-1 text-white">
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
				<div className="w-full flex items-start  p-6">
					<img src="/images/logo.svg" alt="logo" />
				</div>
				<div className="mx-auto my-auto p-6 gap-5">
					<h2 className="text-heading-m md:text-heading-l text-center">
						Reservations
					</h2>
					<p>
						We can’t wait to host you. If you have any special
						requirements please feel free to call on the phone number
						below. We’ll be happy to accommodate you.
					</p>
					<Button className="bg-transparent max-w-[15.3125rem] mt-8 block mx-auto">
						RESERVE PLACE
					</Button>
				</div>
			</div>
			<ReservationForm />
		</div>
	)
}
