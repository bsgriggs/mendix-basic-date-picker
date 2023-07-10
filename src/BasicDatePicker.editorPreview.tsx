import { ReactElement, createElement } from "react";
import { BasicDatePickerPreviewProps } from "../typings/BasicDatePickerProps";
import DatePicker from "./components/DatePicker";

export function preview({ class: className, dateFormat }: BasicDatePickerPreviewProps): ReactElement {
    return (
        <DatePicker
            id={"0"}
            className={className}
            dateFormat={dateFormat}
            date={new Date()}
            readOnly={false}
            min={undefined}
            max={undefined}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setDate={() => {}}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onBlur={() => {}}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/BasicDatePicker.css");
}
