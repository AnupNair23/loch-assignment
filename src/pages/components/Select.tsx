import { OptionProps, SelectProps } from "config/types";
import * as React from "react";

const Select: React.FC<SelectProps> = (props: SelectProps) => {
    return (
        <div className="select-div">
            <select className={`select-text select_${props.size}`} >
                {
                    props?.options && (
                        props.options.map((option: OptionProps) => {
                            return (
                                <option key={option.key}>{option.value}</option>
                            )
                        })
                    )
                }
            </select>
        </div>
    );
};

export default Select;
