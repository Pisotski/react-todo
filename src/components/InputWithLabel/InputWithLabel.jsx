import { useRef, useEffect } from "react";

const InputWithLabel = ({ children, handleTitleChange, value }) => {
	const inputRef = useRef(null);
	const handleChange = (e) => {
		handleTitleChange(e);
	};
	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<>
			<label htmlFor={id}>{children}</label>
			<input
				id={id}
				type={type}
				name={label}
				onChange={handleChange}
				ref={inputRef}
				value={value}
			/>
		</>
	);
};

export { InputWithLabel };
