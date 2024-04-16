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
			{children}
			<input
				id="todoTitle"
				name="title"
				onChange={handleChange}
				ref={inputRef}
				value={value}
			/>
		</>
	);
};

export { InputWithLabel };
