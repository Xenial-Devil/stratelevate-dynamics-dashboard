import React from "react";
// import FloatingLabel from "floating-label-react";
// import Form from "react-bootstrap/Form";

const Input = ({ isRequired, isVisible, name, label, placeholder, type, readonly, validationMessage, error, onChange, ...rest }) => {
  const preparedClassName = isVisible ? "form-group row" : "form-group d-none row";
  const requiredHtml = isRequired ? <span style={{ color: 'red' }}>*</span> : "";
  const customFontStyle = {
    fontFamily: 'Diodrum Arabic Semibold, sans-serif',
    fontWeight: '5',
  };

  if (type == 'textarea' || type == 'textArea') {
    return (
      <React.Fragment>
        <div className={preparedClassName}>

          <div className="col-md-2">
            <b><label htmlFor={name} style={customFontStyle}>{label}</label></b>
          </div>
          <div className="col-md-6">
            <textarea
              {...rest}
              name={name}
              type={type}
              id={name}
              placeholder={placeholder}
              className="form-control"
              onChange={onChange}
              readOnly={readonly}
              style={customFontStyle}
            />
          </div>
          <div className="col-md-1">
            {requiredHtml}
          </div>
          <div className="col-md-3">
            {error && <div className="alert alert-danger">{error}</div>}
            {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
          </div>

        </div>
      </React.Fragment>
    );
  } else if (type == 'textBox' || type == 'text') {
    return (
      <React.Fragment>
        <div className={preparedClassName}>

          <div className="col-md-2">
            <b><label htmlFor={name} style={customFontStyle}>{label}</label></b>
          </div>
          <div className="col-md-6">
            <input
             style={customFontStyle}
              {...rest}
              name={name}
              type={type}
              id={name}
              placeholder={placeholder}
              className="form-control"
              onChange={onChange}
              readOnly={readonly}
            />
          </div>

          <div className="col-md-1">
            {requiredHtml}
          </div>
          <div className="col-md-3">
            {/* {error && <div className="alert alert-danger">{error}</div>} */}
            {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
          </div>
        </div>
      </React.Fragment>
    );
  } else if (type == 'checkbox' || type == 'radio') {
    return (
      <React.Fragment>
        <div className={preparedClassName}>

          <div className="col-md-2">
            <b><label htmlFor={name} style={customFontStyle}>{label}</label></b>
          </div>
          <div className="col-md-6">
            <input
              {...rest}
              name={name}
              type={type}
              id={name}
              placeholder={placeholder}
              // className="form-control"
              onChange={onChange}
              readOnly={readonly}
              style={customFontStyle}
            />
          </div>

          <div className="col-md-1">
            {requiredHtml}
          </div>
          <div className="col-md-3">
            {/* {error && <div className="alert alert-danger">{error}</div>} */}
            {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={preparedClassName}>
          <div className="col-md-2">
            <b><label htmlFor={name} style={customFontStyle}>{label}</label></b>
          </div>
          <div className="col-md-6">
            <input
              {...rest}
              name={name}
              type={type}
              id={name}
              placeholder={placeholder}
              className="form-control"
              onChange={onChange}
              readOnly={readonly}
              style={customFontStyle}
            />
          </div>
          <div className="col-md-1">
            {requiredHtml}
          </div>
          <div className="col-md-3">
            {error && <div className="alert alert-danger">{error}</div>}
            {validationMessage && <div className="alert alert-danger">{validationMessage}</div>}
          </div>

        </div>
      </React.Fragment>
    );
  }

};

export default Input;
