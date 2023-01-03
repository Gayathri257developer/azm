import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [err, setErr] = useState(false);
 const [error, setError] = useState(false);
  const [{},dispatch] = useStateValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setErr(false);
    axios
      .post("/api/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

        navigate('/');
        } else if (!password || !email){
           setError(true)
        }
        else {
          setErr(true)
          console.log(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </Logo>
      <FormContainer>
        <h3>Sign-In</h3>
       { err && <p style={{color: "red"}}>Wrong Creaditional</p>}
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
          />
          { error && <p style={{color: "red"}}>Fill the email field</p>}
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}

            value={password}
          />
          { error&& <p style={{color: "red"}}>Fill the password field</p>}
        </InputContainer>

        <LoginButton onClick={login}>Login</LoginButton>

        <InfoText>
          By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </InfoText>
      </FormContainer>
      <SignUpButton onClick={() => navigate("/signup")}>
        Create Account in Amazon
      </SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const FormContainer = styled.form`
  border: 1px solid lightgrey;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    border: 1px solid lightgrey;
    margin-top: 0px;
    padding-left: 5px;
    border-radius: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;
const LoginButton = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  outline: none;
  background-color: #f3b414;
  border-radius: 10px;
  margin-top: 26px;
`;
const InfoText = styled.button`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;
  border: none;
  background-color: #fff;
  span {
    color: #426bc0;
  }
`;
const SignUpButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

export default Login;
