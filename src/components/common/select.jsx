import React from "react";

const Select = ({ isRequired, isMultiple, name, label, placeholder, options,validationMessage,selectedOption, error, ...rest }) => {
  const requiredHtml = isRequired ? <span style={{ color: 'red' }}>*</span> : "";
  const customFontStyle = {
    fontFamily: 'Diodrum Arabic Semibold, sans-serif',
    fontWeight: '5',
  };
  return (
    <div className="form-group row">
      <div className="col-md-2">
        <b><label htmlFor={name} style={customFontStyle}>{label}</label></b>
      </div>
      <div className="col-md-6">
        <select multiple={isMultiple} value={selectedOption} name={name} id={name} {...rest} className="form-control">
          <option value="">--{placeholder}--</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.description}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-1">
        {requiredHtml}
      </div>
      <div className="col-md-3">
        {error && <div className="alert alert-danger">{error}</div>}
        {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
      </div>

    </div>
  );
};

export default Select;
