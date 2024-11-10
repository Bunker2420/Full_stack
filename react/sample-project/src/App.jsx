import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Styled Components for styling
const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

// Background video styles
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
`;

const Container = styled.div`
  max-width: 400px;
  padding: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.85); /* Semi-transparent background */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled(motion.div)`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #28a745;
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate login logic or API call
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setPassword('');
    }, 2000);
  };

  return (
    <PageContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src="./src/background4.mp4" type="video" />
      </BackgroundVideo>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Submitting...' : 'Login'}
          </Button>
        </Form>

        <AnimatePresence>
          {isSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              Login Successful!
            </SuccessMessage>
          )}
        </AnimatePresence>
      </Container>
    </PageContainer>
  );
};

export default LoginPage;
