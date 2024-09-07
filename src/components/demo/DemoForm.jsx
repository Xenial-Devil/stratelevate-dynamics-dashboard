import React, { useState } from 'react';
import Select from 'react-select';
// import { useTranslation } from "react-i18next";
import './DemoForm.css';

const DemoForm = () => {
  // const { t, i18n } = useTranslation();
  // const [language, setLanguage] = useState('en'); // Current language state

  // const handleLanguageChange = (newLanguage) => {
  //   setLanguage(newLanguage);
  //   i18n.changeLanguage(newLanguage); // Update the language using i18n
  // };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [salary, setSalary] = useState('');
  const [gender, setGender] = useState('');
  const [employeeType, setEmployeeType] = useState(false);

  const countryOptions = [
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'UK', label: 'UK' },
    { value: 'Australia', label: 'Australia' }
  ];

  const hobbiesOptions = [
    { value: 'Reading', label: 'Reading' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Traveling', label: 'Traveling' },
    { value: 'Sports', label: 'Sports' }
  ];

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const handleHobbiesChange = (selectedOptions) => {
    setHobbies(selectedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data
    // Replace this with your actual form submission logic
    console.log('Form submitted:', { name, email, phone, country, hobbies, salary, gender, employeeType });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setHobbies([]);
    setSalary('');
    setGender('');
    setEmployeeType(false);
  };

  return (
    <div className="basic-form light">
      <h4 className="form-title">Employee Form</h4>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" id="email" value={email} placeholder="Enter Name" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="phone">Phone</label>
          <input className="input" type="tel" id="phone" value={phone} placeholder="Enter Phone Number" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="country">Country</label>
          <Select
            id="country"
            options={countryOptions}
            value={country}
            onChange={handleCountryChange}
            placeholder="Select Countries"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="hobbies">Hobbies</label>
          <Select
            id="hobbies"
            options={hobbiesOptions}
            value={hobbies}
            onChange={handleHobbiesChange}
            isMulti
            placeholder="Select Hobbies"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="salary">Salary</label>
          <input placeholder="Enter Salary" className="input" type="number" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="gender">Gender</label>
          <div>
            <input type="radio" id="gender-male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
            <label className="label" htmlFor="gender-male">Male</label>
          </div>
          <div>
            <input type="radio" id="gender-female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
            <label className="label" htmlFor="gender-female">Female </label>
          </div>
          <div>
            <input type="radio" id="gender-other" name="gender" value="other" checked={gender === 'other'} onChange={(e) => setGender(e.target.value)} />
            <label className="label" htmlFor="gender-other">Other</label>
          </div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="employeeType">Full Time Employee</label>
          <input type="checkbox" id="employeeType" checked={employeeType} onChange={(e) => setEmployeeType(e.target.checked)} />

        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default DemoForm;
