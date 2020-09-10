import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const DateTime = () => {
    const [selectedDate, setSelectedDate]= useState(null)
    return (
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown/>

    );
};
export default DateTime;


