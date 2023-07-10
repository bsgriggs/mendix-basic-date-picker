## Basic Date Picker
Date, DateTime, and Time picker that uses the vanilla HTML date input. This can be used to meet accessibility requirements.

| Date | Date & Time | Time |   
| ------------- | ------------- | ------------- |  
| ![date](https://github.com/bsgriggs/mendix-basic-date-picker/blob/media/date.png) | ![dateTime](https://github.com/bsgriggs/mendix-basic-date-picker/blob/media/dateTime.png) | ![time](https://github.com/bsgriggs/mendix-basic-date-picker/blob/media/time.png)   |  

## Features
- Meets accessibility standard keyboard navigation
- Supports Date, DateTime, and Time selection
- On-change and on-leave actions
- Min and Max dates

## Limitations
- The format of the display cannot be customized. The user's browser determines it and cannot be changed ([documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#handling_browser_support)).
- Time does not support Min and Max 

## Usage
![general](https://github.com/bsgriggs/mendix-basic-date-picker/blob/media/general.png)  
**Label** - The text shown next to the textbox. This is required if you need to support screen readers.  
**Date format** - What will the user be selecting?  
**Date** - The attribute that is updated when the user selects a value.  
**On change** - MxAction ran when the user selects a value.  
**On Leave** - MxAction ran when the input loses focus (tab or click away).  
**Min** - The lowest selectable value (inclusive). For Dates, it must be in format YYYY-MM-dd, and for date times it must be in format YYYY-MM-ddTHH:mm. Time inputs do not support min.  
**Max** - The highest selectable value (inclusive). For Dates, it must be in format YYYY-MM-dd, and for date times it must be in format YYYY-MM-ddTHH:mm. Time inputs do not support max.  

![system](https://github.com/bsgriggs/mendix-basic-date-picker/blob/media/system.png)  

For more information, see the official docs:  
- **Date:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
- **Date & Time:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local  
- **Time:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time

## Demo project
https://widgettesting105-sandbox.mxapps.io/p/basic-date-picker  

## Issues, suggestions and feature requests
https://github.com/bsgriggs/mendix-basic-date-picker/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v8.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Benjamin Griggs
Ashley Ramsay
