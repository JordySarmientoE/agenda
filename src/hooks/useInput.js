import { useState } from "react";

const useInput = (initialValue, isCheckbox) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        if (isCheckbox) {
            setValue(event.target.checked)
        }
        else {
            setValue(event.target.value)
        }
    }

    return {
        value,
        onChange
    }
}

export default useInput;