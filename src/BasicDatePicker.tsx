import { Fragment, ReactElement, createElement } from "react";
import { BasicDatePickerContainerProps } from "../typings/BasicDatePickerProps";
import "./ui/BasicDatePicker.css";
import DatePicker from "./components/DatePicker";
import { Alert } from "./components/Alert";

export function BasicDatePicker({
    id,
    class: className,
    style,
    tabIndex,
    dateFormat,
    date,
    min,
    max,
    onLeave
}: BasicDatePickerContainerProps): ReactElement {
    return (
        <Fragment>
            <DatePicker
                id={id}
                className={className}
                style={style}
                tabIndex={tabIndex}
                dateFormat={dateFormat}
                date={date.value as Date}
                setDate={(newDate: Date | undefined) => date.setValue(newDate)}
                readOnly={date.readOnly}
                min={min ? (min.value as string) : undefined}
                max={max ? (max.value as string) : undefined}
                onBlur={() => {
                    if (onLeave !== undefined && onLeave.canExecute && !onLeave.isExecuting) {
                        onLeave.execute();
                    }
                }}
            />
            {date.validation && <Alert>{date.validation}</Alert>}
        </Fragment>
    );
}
