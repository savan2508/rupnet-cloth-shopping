import { FormInputLabel, InputGroup, Group } from "./form-input.styles";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <InputGroup {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
