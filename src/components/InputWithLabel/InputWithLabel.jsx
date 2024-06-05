import { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

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
			<label className={styles.inputLabel} htmlFor={id}>
				{children}
			</label>
			<input
				className={styles.mainInput}
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

InputWithLabel.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.element,
	handleTitleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export { InputWithLabel };
