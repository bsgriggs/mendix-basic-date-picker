/**
 * This file was generated from BasicDatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type DateFormatEnum = "DATE" | "TIME" | "DATETIME";

export interface BasicDatePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    dateFormat: DateFormatEnum;
    date: EditableValue<Date>;
    onChange?: ActionValue;
    onLeave?: ActionValue;
    min?: DynamicValue<string>;
    max?: DynamicValue<string>;
}

export interface BasicDatePickerPreviewProps {
    class: string;
    style: string;
    dateFormat: DateFormatEnum;
    date: string;
    onChange: {} | null;
    onLeave: {} | null;
    min: string;
    max: string;
}
