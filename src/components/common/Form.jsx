import React, { Component } from "react";
// ;
import Input from "./Input";
import Select from "./select";

class CustomForm extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    // const data = { ...this.state.data };
    // data[input.name] = input.value;
    // console.log(input.name + "->" + input.value);
    // this.setState({ data, errors });
    console.log('validating....');
    console.log(this.state.data);
    const options = { abortEarly: false };
    return null; 
    /* ignore joi validation, need to work for different validations, 
    if ignored then server side validation will do all responsibilities*/

    // const { error } = Joi.validate(this.state.data, this.schema, options);
    // if (!error) return null;

    // const errors = {};
    // // for (let item of error.details) errors[item.path[0]] = item.message;
    // return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = {};//Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = null;//this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    //console.log(input.name + "->" + input.value);
    this.setState({ data, errors });
  };

  renderButton(label, onClickEvent) {
    return (
      <button
        className="btn btn-primary"
        onClick={onClickEvent}
      >
        {label}
      </button>
    );
  }

  renderCancelButton(label, onClickEvent) {
    return (
      <button className="btn btn-warning" onClick={onClickEvent}>
        {label}
      </button>
    );
  }
// (true, false, "orgTypeId", "Organization Type", thisContext.organizationTypeOptions, this.state.validationMessage.orgTypeId)}
  renderSelect(isRequired, isMultiple, name, label, placeholder, options, validationMessage) {
    const { data, errors } = this.state;
    // { isRequired, isMultiple, name, label, options,validationMessage,selectedOption, error, ...rest }
    return (
      <Select
        isRequired={isRequired}
        isMultiple={isMultiple}
        name={name}
        label={label}
        placeholder={placeholder}
        options={options}
        validationMessage={validationMessage}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderInput(
    isRequired,
    isVisible,
    name,
    label,
    placeholder,
    type,
    readonly,
    validationMessage,
    inputFieldDefaultVal,
  ) {
    const { data, errors } = this.state;
    let defaultValue =
      data[name] == undefined ? inputFieldDefaultVal : data[name];
    return (
      <>
        <Input
          isRequired={isRequired}
          isVisible={isVisible}
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          value={defaultValue}
          readonly={readonly}
          validationMessage={validationMessage}
          error={errors[name]}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default CustomForm;
