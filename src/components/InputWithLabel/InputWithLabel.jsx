import { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({ id, children, handleTitleChange, value }) => {
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
				type="text"
				name={value}
				onChange={handleChange}
				ref={inputRef}
				value={value}
			/>
		</>
	);
};

export { InputWithLabel };
