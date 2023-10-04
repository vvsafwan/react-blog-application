import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { options } from '../categories';

export default function Sidebar({ onChange }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    onChange(value.map((selectedOption) => selectedOption.id));
  }, [value, onChange]);

  return (
    <div className='w-[25%] p-10'>
      <Select
        className='w-[25%]'
        name='select'
        options={options}
        labelField='id'
        valueField='name'
        multi
        onChange={(selectedValues) => setValue(selectedValues)}
      >
      </Select>
    </div>
  );
}
