"use client";

import styled from "styled-components";
import { useState, useTransition } from "react";
import { useLogin } from "@/modules/auth/application/useLogin";
import { Mail, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  const login = useLogin();
  const [isPending, startTransition] = useTransition();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        await login(formData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error de login");
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      {/* LEFT */}
      <LeftSection>
        <LogoRow>
          <LogoBox>
            <LogoIcon>E</LogoIcon>
          </LogoBox>
          <BrandName>FinanceTracker</BrandName>
        </LogoRow>

        <Heading>
          Take control of your <span>financial future</span>
        </Heading>

        <Description>
          Track your income and expenses, visualize your spending patterns,
          and make smarter financial decisions.
        </Description>

        <Metrics>
          <MetricItem>
            <MetricValueGreen>+24%</MetricValueGreen>
            <MetricLabel>Avg. savings increase</MetricLabel>
          </MetricItem>

          <MetricItem>
            <MetricValue>10K+</MetricValue>
            <MetricLabel>Active users</MetricLabel>
          </MetricItem>
        </Metrics>
      </LeftSection>

      {/* RIGHT */}
      <RightSection>
        <Card>
          <CardTitle>Welcome back</CardTitle>
          <CardSubtitle>Sign in to your account to continue</CardSubtitle>

          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <InputGroup>
              <Label>Email</Label>
              <InputWrapper>
                <IconLeft>
                  <Mail size={18} color="#9ca3af" />
                </IconLeft>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isPending}
                />
              </InputWrapper>
            </InputGroup>

            {/* Password */}
            <InputGroup>
              <Label>Password</Label>
              <InputWrapper>
                <IconLeft>
                  <Lock size={18} color="#9ca3af" />
                </IconLeft>

                <Input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isPending}
                />

                <IconRight onClick={() => setShowPass(!showPass)}>
                  <Eye size={18} color="#9ca3af" />
                </IconRight>
              </InputWrapper>
            </InputGroup>

            {error && <ErrorAlert>{error}</ErrorAlert>}

            <SubmitButton disabled={isPending}>
              {isPending ? "Loading..." : "Sign in"}
            </SubmitButton>

            <DemoText>
              Demo: Use any email and password (min 6 chars)
            </DemoText>
          </Form>
        </Card>
      </RightSection>
    </Container>
  );
}

/* -------------------------------------------------------------------------- */
/*                               🎨 STYLED CSS                                */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: radial-gradient(circle at top left, #0f1a3a, #070b18 70%);
  color: white;
  padding: 60px;
  gap: 60px;

  /* TABLET */
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding: 40px 30px;
    text-align: center;
    gap: 40px;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 30px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  padding: 12px;
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const LogoIcon = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

const BrandName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
  max-width: 500px;

  span {
    color: #4f7dff;
  }

  @media (max-width: 1000px) {
    font-size: 38px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }

  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #a5afc4;
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 450px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
  }
`;

const Metrics = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 420px) {
    gap: 30px;
  }
`;

const MetricItem = styled.div``;

const MetricValueGreen = styled.div`
  color: #32d583;
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const MetricValue = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const MetricLabel = styled.div`
  color: #a5afc4;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Card = styled.div`
  width: 420px;
  background: rgba(255, 255, 255, 0.04);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);

  /* tablet */
  @media (max-width: 600px) {
    width: 100%;
    padding: 30px;
  }

  /* small mobile */
  @media (max-width: 420px) {
    padding: 22px;
  }
`;

const CardTitle = styled.h2`
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const CardSubtitle = styled.p`
  text-align: center;
  color: #a5afc4;
  font-size: 14px;
  margin-bottom: 30px;

  @media (max-width: 420px) {
    font-size: 13px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div``;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

const IconLeft = styled.div`
  position: absolute;
  left: 12px;
`;

const IconRight = styled.div`
  position: absolute;
  right: 12px;
  cursor: pointer;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  padding: 12px 14px;
  color: white;
  width: 100%;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  background: #4f7dff;
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  box-shadow: 0 4px 25px rgba(79, 125, 255, 0.4);

  &:hover {
    background: #3a68e5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
  }
`;

const DemoText = styled.p`
  font-size: 12px;
  text-align: center;
  color: #a5afc4;

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

const ErrorAlert = styled.div`
  background: #ffefef;
  color: #c62828;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #e53935;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
