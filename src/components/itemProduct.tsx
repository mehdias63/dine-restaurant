import { cn } from '@/lib/utils'

export default function ItemProduct({
	title,
	text,
	images,
	className = '',
	headClassName = '',
	isActive = false,
}) {
	return (
		<div
			className={cn(
				`flex flex-col lg:flex-row items-center lg:items-start px-6 gap-5 lg:gap-20`,
				className,
			)}
		>
			<div className="flex justify-center items-center">{images}</div>
			<div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-10 lg:py-28 mb-20">
				{isActive && (
					<img src="/images/patterns/pattern-divide.svg" alt="icon" />
				)}
				<h2
					className={cn(
						`text-[2rem] leading-[2.5rem] tracking-[-0.025rem]
        md:text-[3rem] md:leading-[3rem] md:tracking-[-0.03125rem] font-bold lg:mt-6 max-w-[15rem] md:max-w-[25rem]`,
						headClassName,
					)}
				>
					{title}
				</h2>
				<p className="max-w-[28rem] text-body-s md:text-body-m text-center lg:text-left">
					{text}
				</p>
			</div>
		</div>
	)
}
