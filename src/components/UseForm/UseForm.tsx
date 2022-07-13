import React from "react";

export interface UseFormProps {
    initialValues: Object,
    children: React.JSXElementConstructor<any>,
    callback?: Function,
    resetOnSubmit?: Boolean,
    validationSchema?: Object,
};

const UseForm = (props: UseFormProps) => {
    return React.createElement(props.children);
};

export default UseForm;
