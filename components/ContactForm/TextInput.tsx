import { useField } from "formik";
import React from "react";

const TextInputLiveFeedback = ({ label, helpText, ...props }: any) => {
    const [field, meta] = useField(props);

    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback = !!didFocus || meta.touched;

    return (
        <div
            className={`form-control ${
                showFeedback ? (meta.error ? "invalid" : "valid") : ""
            }`}
        >
            <div className="flex items-center gap-2 ">
                <label
                    className={`${
                        showFeedback ? (meta.error ? "text-red-600" : "") : ""
                    }`}
                    htmlFor={props.id}
                >
                    {label}
                </label>
            </div>
            <input
                {...props}
                {...field}
                aria-describedby={`${props.id}-feedback ${props.id}-help`}
                onFocus={handleFocus}
            />
            <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
                {helpText}
            </div>
        </div>
    );
};

export default TextInputLiveFeedback;
