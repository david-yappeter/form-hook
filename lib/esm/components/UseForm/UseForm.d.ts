import React from "react";
import * as Yup from "yup";
export interface UseFormProps {
    initialValues: Object;
    children: React.JSXElementConstructor<any>;
    callback?: Function;
    resetOnSubmit?: Boolean;
    validationSchema?: Yup.ObjectSchema<any, any> | ((arg0: Object) => Yup.ObjectSchema<any, any>);
}
declare const UseForm: React.FC<UseFormProps>;
export default UseForm;
