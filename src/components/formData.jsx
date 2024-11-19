'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const generateTimeOptions = () => {
	const times = []
	let hour = 9
	let period = 'AM'

	while (hour <= 12 || period === 'PM') {
		times.push(`${hour < 10 ? `0${hour}` : hour}:00 ${period}`)
		if (hour === 12) {
			period = period === 'AM' ? 'PM' : null
			hour = 1
		} else {
			hour++
		}
		if (!period) break
	}
	return times
}

const ReservationForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		date: '',
		time: '09:00 AM',
		people: 4,
	})
	const [errors, setErrors] = useState({})
	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		setErrors({ ...errors, [name]: '' })
	}
	const handlePeopleChange = change => {
		setFormData(prev => ({
			...prev,
			people: Math.max(1, prev.people + change),
		}))
	}
	const handleSubmit = e => {
		e.preventDefault()
		const validationErrors = {}
		if (!formData.name)
			validationErrors.name = 'This field is required'
		if (!formData.email)
			validationErrors.email = 'This field is required'
		if (!formData.date)
			validationErrors.date = 'This field is incomplete'
		if (!formData.time)
			validationErrors.time = 'This field is incomplete'

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors)
			return
		}
		alert('Reservation made successfully!')
	}

	const timeOptions = generateTimeOptions()

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md"
		>
			<div className="flex flex-col gap-1">
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					className={`p-3 border-b-[1px] border-light-gray ${
						errors.name ? 'border-red-500' : 'border-gray-300'
					}`}
				/>
				{errors.name && (
					<small className="text-red-500 text-sm">
						{errors.name}
					</small>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					className={`p-3 border-b-[1px] border-light-gray ${
						errors.email ? 'border-red-500' : 'border-gray-300'
					}`}
				/>
				{errors.email && (
					<small className="text-red-500 text-sm">
						{errors.email}
					</small>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label className="px-3 text-body-m">Pick a date</label>
				<input
					type="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					className={`p-3 border-b-[1px] border-light-gray ${
						errors.date ? 'border-red-500' : 'border-gray-300'
					}`}
				/>
				{errors.date && (
					<small className="text-red-500 text-sm">
						{errors.date}
					</small>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label className="px-3 text-body-m">Pick a time</label>
				<select
					name="time"
					value={formData.time}
					onChange={handleChange}
					className={`p-3 border-b-[1px] border-light-gray ${
						errors.time ? 'border-red-500' : 'border-gray-300'
					}`}
				>
					{timeOptions.map((time, index) => (
						<option key={index} value={time}>
							{time}
						</option>
					))}
				</select>
				{errors.time && (
					<small className="text-red-500 text-sm">
						{errors.time}
					</small>
				)}
			</div>
			<div className="flex items-center justify-between border-b-[1px] border-light-gray py-3">
				<button
					type="button"
					onClick={() => handlePeopleChange(-1)}
					className="text-beaver text-body-m font-bold"
				>
					-
				</button>
				<span className="text-lg">{formData.people} people</span>
				<button
					type="button"
					onClick={() => handlePeopleChange(1)}
					className="text-beaver text-body-m font-bold"
				>
					+
				</button>
			</div>
			<Button>MAKE RESERVATION</Button>
		</form>
	)
}

export default ReservationForm
