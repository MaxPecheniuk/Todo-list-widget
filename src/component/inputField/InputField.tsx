import * as React from 'react';
import { SyntheticEvent } from 'react';

interface IInputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export class InputField extends React.Component<IInputFieldProps> {

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.value);
  }

  render() {
    return (
      <div className="input-formm__input-wrapper">
        <input
          placeholder="Add Todo"
          className="input-formm__input-fieldd"
          value={this.props.value}
          onChange={this.handleInputChange}
        />
      </div>

    );
  }

}
