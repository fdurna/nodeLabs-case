import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as S from "./index.styles";
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { routerPaths } from "config/routerPaths";
import { Form, Input, Typography } from "antd";
import Google from 'assets/icons/google.svg';
import { authApi, SignUpPayload } from "api/authApi";
import { Button } from "components/button";
import AuthLayout from "components/layouts/AuthLayout";

const { Text } = Typography;

const SignUp = () => {
  const [form] = Form.useForm<SignUpPayload>();
  const [submitting, setSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: (payload: SignUpPayload) => authApi.signUp(payload),
    onSuccess: (data) => {
      toast.success(data.message || 'Account created successfully!');
      setSubmitting(false);
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message || 'Sign up failed. Please try again.';
      toast.error(msg);
      setSubmitting(false);
    }
  });

  const onFinish = (values: SignUpPayload) => {
    setSubmitting(true);
    mutation.mutate(values);
  };

  const disableInputs = submitting;

  return (
    <S.SignUpStyled>
      <AuthLayout
        title="Create new account"
        subTitle="Welcome back! Please enter your details"
      >
        <ToastContainer aria-label="toast notifications" />
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Full Name is required" }]}
          >
            <Input placeholder="Mahfuzul Nabil" disabled={disableInputs} style={{ borderRadius: 999 }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="example@gmail.com" disabled={disableInputs} style={{ borderRadius: 999 }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              { min: 6, message: "At least 6 characters" },
            ]}
          >
            <Input.Password placeholder='•••••••' disabled={disableInputs} style={{ borderRadius: 999 }} />
          </Form.Item>

          <Form.Item style={{ marginTop: 24, marginBottom: 10 }}>
            <Button type="primary" htmlType="submit" block size="large" loading={submitting}>
              Create Account
            </Button>
          </Form.Item>

          <Button type="link" block size="large" disabled={disableInputs}>
            <img src={Google} alt="icons" />
            Sign up with Google
          </Button>

          <div className='already'>
            <Text type="secondary">
              Already have an account? <Link to={routerPaths.signIn} className='link'>Sign In</Link>
            </Text>
          </div>
        </Form>
      </AuthLayout>
    </S.SignUpStyled>
  );
};

export default SignUp;
