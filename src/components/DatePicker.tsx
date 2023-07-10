import classNames from "classnames";
import { CSSProperties, ChangeEvent, ReactElement, createElement, useCallback } from "react";
import { DateFormatEnum } from "typings/BasicDatePickerProps";

interface DatePickerProps {
    id: string;
    tabIndex?: number;
    className: string;
    style?: CSSProperties;
    dateFormat: DateFormatEnum;
    date: Date | undefined;
    setDate: (newDate: Date | undefined) => void;
    readOnly: boolean;
    min?: string;
    max?: string;
}

const toDatetimeLocal = (date: Date): string => {
    const padding = function (i: number): string {
        return (i < 10 ? "0" : "") + i;
    };
    const YYYY = date.getFullYear();
    const MM = padding(date.getMonth() + 1);
    const DD = padding(date.getDate());
    const HH = padding(date.getHours());
    const II = padding(date.getMinutes());
    const SS = padding(date.getSeconds());
    return YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + II + ":" + SS;
};

const DatePicker = ({
    id,
    tabIndex,
    className,
    style,
    date,
    setDate,
    dateFormat,
    readOnly,
    min,
    max
}: DatePickerProps): ReactElement => {
    const formatDateValue = useCallback(
        (date: Date | undefined): string => {
            if (date) {
                const currentValue =
                    dateFormat === "DATE"
                        ? date?.toISOString().substring(0, 10)
                        : dateFormat === "DATETIME"
                        ? toDatetimeLocal(date)
                        : date?.toTimeString().substring(0, 5);
                return currentValue;
            } else {
                return "";
            }
        },
        [dateFormat]
    );

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const newDate: string = event.target.value;
        if (newDate.trim().length > 0) {
            if (dateFormat === "DATE") {
                // Date -> YYYY-MM-dd
                const year = Number(newDate.substring(0, 4));
                const month = Number(newDate.substring(5, 7)) - 1;
                const day = Number(newDate.substring(8, 10));
                setDate(new Date(year, month, day));
            } else if (dateFormat === "DATETIME") {
                // Date Time -> YYYY-MM-ddTHH:mm
                const year = Number(newDate.substring(0, 4));
                const month = Number(newDate.substring(5, 7)) - 1;
                const day = Number(newDate.substring(8, 10));
                const hour = Number(newDate.substring(11, 13));
                const minute = Number(newDate.substring(14, 16));
                setDate(new Date(year, month, day, hour, minute));
            } else {
                // Time -> HH:mm
                const year = date ? date.getFullYear() : new Date().getFullYear();
                const month = date ? date.getMonth() : new Date().getMonth();
                const day = date ? date.getDate() : new Date().getDate();
                const hour = Number(newDate.substring(0, 2));
                const minute = Number(newDate.substring(3, 5));
                setDate(new Date(year, month, day, hour, minute));
            }
        } else {
            setDate(undefined);
        }
    };

    return (
        <input
            id={id}
            aria-describedby={id}
            className={classNames("basic-date-picker", "form-control", className)}
            style={style}
            tabIndex={tabIndex || 0}
            type={dateFormat === "DATE" ? "date" : dateFormat === "DATETIME" ? "datetime-local" : "time"}
            value={formatDateValue(date)}
            onChange={onChangeHandler}
            readOnly={readOnly}
            min={min}
            max={max}
        />
    );
};

export default DatePicker;
