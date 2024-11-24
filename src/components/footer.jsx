export default function Footer() {
	return (
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
	)
}
