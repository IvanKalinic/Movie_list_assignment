import { Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/Input";
import { LoginWrapper } from "../styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { LoginForm } from "../../types/loginForm.type";

const defaultLoginValues = {
  email: "",
  password: "",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultLoginValues,
  });

  const handleLogin = async (loginForm: LoginForm) => {
    console.log(loginForm);
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <LoginWrapper>
        <Heading style={{ fontSize: "4rem", marginBottom: "4rem" }}>
          Sign in
        </Heading>
        <TextInput
          title="email"
          registerName="email"
          placeholder="Email"
          register={register}
          errors={errors}
          style={{
            border: "none",
            width: "18.75rem",
            height: "2.8125rem",
          }}
        />
        <TextInput
          title="password"
          registerName="password"
          placeholder="Password"
          register={register}
          errors={errors}
          style={{ border: "none", width: "18.75rem", height: "2.8125rem" }}
        />
        <Flex
          alignItems="center"
          justifyContent="space-around"
          style={{ width: "55%" }}
        >
          <Checkbox
            backgroundColor="#224957"
            borderColor="#224957"
            borderRadius="10px"
          />
          <Text>Remember me</Text>
        </Flex>
        <Button
          type="submit"
          width="100%"
          mt="4"
          backgroundColor="#2BD17E"
          borderRadius="10px"
          height="3.375rem"
        >
          Login
        </Button>
      </LoginWrapper>
    </form>
  );
};

export default Login;
