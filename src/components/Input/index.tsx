import { Input, InputProps, Text } from "@chakra-ui/react";
import { FieldValues, DeepMap, FieldError } from "react-hook-form";
import { CustomInput } from "../../pages/styles";

interface Props extends InputProps {
  title: string;
  placeholder: string;
  registerName: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
}

export const TextInput = (props: Props) => {
  const { title, placeholder, registerName, register, errors, ...styleProps } =
    props;

  return (
    <CustomInput resize={placeholder === "Publishing year" ? true : false}>
      <Input
        placeholder={placeholder}
        {...register(registerName)}
        errors={errors}
        {...styleProps}
        _placeholder={{ color: "white" }}
      />
      <Text color="red" mt="0.25rem" position="absolute">
        {errors[registerName]?.message}
      </Text>
    </CustomInput>
  );
};
