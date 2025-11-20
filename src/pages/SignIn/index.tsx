import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from "./index.styles";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { routerPaths } from "config/routerPaths";
import { Form, Input, Typography, message } from "antd";
import Google from 'assets/icons/google.svg';
import { authApi, SignInPayload } from "api/authApi";
import {Button} from "components/button";
import AuthLayout from "components/layouts/AuthLayout";
import { useAuth } from 'providers/AuthProvider';


const { Text } = Typography;

const SignIn = () => {
  const [form] = Form.useForm<SignInPayload>();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: (payload: SignInPayload) => authApi.signIn(payload),
    onSuccess: (data) => {
      const accessToken = data?.data?.accessToken;
      const user = data?.data?.user;
      login(accessToken, user);
      toast.success(data.message || 'Welcome back!!');
      message.success('Welcome back!');
      navigate('/dashboard');
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message || 'Sign up failed. Please try again.';
      toast.error(msg);
      setSubmitting(false);
    },
    onSettled: () => setSubmitting(false)
  });

  const onFinish = (values: SignInPayload) => {
    setSubmitting(true);
    mutation.mutate(values);
  };
  const disableInputs = submitting;
  return (
    <S.SignInStyled>
      <AuthLayout
        title="Sign In"
        subTitle="Welcome back! Please enter your details"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              disabled={disableInputs}
              style={{ borderRadius: 999 }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "At least 6 characters" },
            ]}
          >
            <Input.Password
            placeholder='•••••••'
              disabled={disableInputs}
              style={{ borderRadius: 999 }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 24, marginBottom: 10 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={submitting}
            >
              Sign In
            </Button>
          </Form.Item>
          <Button type="link" block size="large" disabled={disableInputs}>
            <img src={Google} alt="icons" />
            Sign in with Google
          </Button>
          <div className='already'>
          <Text type="secondary">
            Don’t have an account?
            <Link to={routerPaths.signUp} className='link'>
              Sign up
            </Link>
          </Text>
        </div>
        </Form>
      </AuthLayout>
    </S.SignInStyled>
  );
};

export default SignIn;
