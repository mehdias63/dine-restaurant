import { cn } from '@/lib/utils'

export default function ItemProduct({
	title,
	text,
	images,
	className = '',
	headClassName = '',
	parClassName = '',
	divClassName = '',
	isActive = false,
}) {
	return (
		<div
			className={cn(
				`flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 relative`,
				className,
			)}
		>
			{images}
			<div
				className={cn(
					`flex flex-col justify-center items-center lg:items-start`,
					divClassName,
				)}
			>
				{isActive && (
					<img
						src="/images/patterns/pattern-divide.svg"
						alt="icon"
						className="mt-6"
					/>
				)}
				<h2
					className={cn(
						`text-[2rem] leading-[2.5rem] tracking-[-0.025rem]
        md:text-[3rem] md:leading-[3rem] md:tracking-[-0.03125rem] font-bold`,
						headClassName,
					)}
				>
					{title}
				</h2>
				<p
					className={cn(
						`max-w-[28rem] text-body-s md:text-body-m text-center lg:text-left`,
						parClassName,
					)}
				>
					{text}
				</p>
			</div>
		</div>
	)
}
