import React, { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';

const FilterDropdown = ({ options, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const customOption = (props) => {
    return (
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{' '}
        <label>{props.label}</label>
      </components.Option>
    );
  };

  return (
    <div style={{ marginBottom: '20px', minWidth: '200px' }}>
      <label>{label}</label>
      <Select
        options={options}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option: customOption }}
        onChange={handleChange}
        allowSelectAll={true}
        value={selectedOptions}
      />
    </div>
  );
};

const Men = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const categoryOptions = [
    { value: 'bottomwear', label: 'Bottomwear' },
    { value: 'topwear', label: 'Topwear' },
    { value: 'footwear', label: 'Footwear' },
    { value: 't_shirts', label: 'T-shirts' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'jeans', label: 'Jeans' },
  ];

  const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const lengthOptions = [
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium' },
    { value: 'long', label: 'Long' },
  ];

  const fabricOptions = [
    { value: 'cotton', label: 'Cotton' },
    { value: 'polyester', label: 'Polyester' },
    { value: 'wool', label: 'Wool' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unisex', label: 'Unisex' },
  ];

  const patternOptions = [
    { value: 'solid', label: 'Solid' },
    { value: 'striped', label: 'Striped' },
    { value: 'checked', label: 'Checked' },
  ];

  const discountOptions = [
    { value: '10', label: '10%' },
    { value: '20', label: '20%' },
    { value: '30', label: '30%' },
  ];

  const productTypeOptions = [
    { value: 'new_arrival', label: 'New Arrival' },
    { value: 'bestseller', label: 'Bestseller' },
    { value: 'exclusive', label: 'Exclusive' },
  ];

  const saleOptions = [
    { value: 'on_sale', label: 'On Sale' },
    { value: 'not_on_sale', label: 'Not On Sale' },
  ];

  return (
    <div>
      <h1>
        MEN{' '}
        <br />
        <button onClick={toggleFilters} className='button'>
          {showFilters ? '↑' : '↓'}
        </button>
      </h1>
      {showFilters && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <FilterDropdown options={categoryOptions} label="Category" />
          <FilterDropdown options={colorOptions} label="Color" />
          <FilterDropdown options={sizeOptions} label="Size" />
          <FilterDropdown options={lengthOptions} label="Length" />
          <FilterDropdown options={fabricOptions} label="Fabric" />
          <FilterDropdown options={genderOptions} label="Gender" />
          <FilterDropdown options={patternOptions} label="Pattern" />
          <FilterDropdown options={discountOptions} label="Discount" />
          <FilterDropdown options={productTypeOptions} label="Product Type" />
          <FilterDropdown options={saleOptions} label="Sale" />
        </div>
      )}
    </div>
  );
};

export default Men;