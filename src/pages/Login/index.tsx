import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/Input";
import { LoginWrapper } from "../styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { LoginForm } from "../../types";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoginError } from "../../components";

const defaultLoginValues = {
  email: "",
  password: "",
  checked: false,
};

const Login = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultLoginValues,
  });
  const { setUser, setJwt } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (loginForm: LoginForm) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/local`,
        { identifier: loginForm.email, password: loginForm.password }
      );

      if (response.data.user) {
        setLoginError(false);
        if (loginForm.checked) {
          setUser({ user: response.data.user, jwt: response.data.jwt });
        } else {
          setUser(response.data.user);
          setJwt(response.data.jwt);
        }
        navigate("/movies");
      }
    } catch (err) {
      console.log(err);
      setLoginError(true);
    }
  };

  useEffect(() => {
    reset();
    setLoginError(false);
  }, []);

  useEffect(() => {
    setLoginError(false);
  }, [errors, register]);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <LoginWrapper>
        <Text fontSize="4rem" mb="2rem" fontWeight="600">
          Sign in
        </Text>
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
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          style={{ border: "none", width: "18.75rem", height: "2.8125rem" }}
        />
        <div style={{ height: "1rem" }}>
          {loginError && !errors.email && !errors.password && <LoginError />}
        </div>
        <Flex
          alignItems="center"
          justifyContent="space-around"
          w="50%"
          mt="0.5rem"
          mb="0.5rem"
        >
          <Checkbox
            backgroundColor="#224957"
            borderColor="#224957"
            borderRadius="0.625rem"
            {...register("checked")}
          />
          <Text>Remember me</Text>
        </Flex>
        <Button
          type="submit"
          width="100%"
          mt="4"
          backgroundColor="#2BD17E"
          borderRadius="0.625rem"
          height="3.375rem"
        >
          Login
        </Button>
      </LoginWrapper>
    </form>
  );
};

export default Login;
