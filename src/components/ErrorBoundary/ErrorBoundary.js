import React, { PureComponent } from "react";
import styled from "styled-components";

import { White, Red } from "../../themes/colors";
import { fadeIn } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 320px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Title = styled.h3`
  font-size: ${XXLarge};
  font-weight: bold;
  color: ${Red};
  text-align-center;
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-size: ${Large};
  color: ${White};
`;

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    // eslint-disable-next-line no-console
    this.setState({ hasError: true, error: errorInfo });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title>Something went wrong!!!</Title>
          <Content>
            {this.state.error?.componentStack || "Unknown Error"}
          </Content>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
