import React, { useState } from "react";
import _ from "lodash";
import * as Yup from "yup";

export interface UseFormProps {
    initialValues: Object,
    children: React.JSXElementConstructor<any>,
    callback?: Function,
    resetOnSubmit?: Boolean,
    validationSchema? : Yup.ObjectSchema<any, any> | ((arg0: Object) => Yup.ObjectSchema<any, any>) ,
};

const UseForm: React.FC<UseFormProps> = (props: UseFormProps) => {
    const [formError, _setFormError] = useState({});
    const [state, setState] = useState(props.initialValues);
    
    const onChange = (e: any) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault();
        if(cloneValidationSchema) {
            cloneValidationSchema.validate(state, {abortEarly: false}).then(() => {
                if(props.callback) {
                    props.callback(state);
                }
                setFormError({});
            }).catch((err) => {
                setFormError(err);
                throw new Error("error");
            }).then(() => {
                if(props.resetOnSubmit) {
                    setState(props.initialValues);
                }
            }).catch(() => {});
        }
    };

    const cloneValidationSchema = (() => {
        return typeof props.validationSchema === "function" ? props.validationSchema(state) : props.validationSchema;
    })();

    const setFormError = (val: Object) => {
        if(!_.isEqual(val, formError)) {
            _setFormError(val);
        }
    }

    return React.createElement(props.children, {onChange, onSubmit, values: state});
};

UseForm.defaultProps = {
    initialValues: {},
    callback: () => {},
    resetOnSubmit: true,
}

export default UseForm;
