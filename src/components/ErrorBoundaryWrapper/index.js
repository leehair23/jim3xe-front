import PropTypes from "prop-types";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryWrapper = (props) => {
  const FallbackComp = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Here is the error: </p>
        <p>{error.message}</p>
      </div>
    );
  };

  const onResetHandler = (details) => {
    // Reset the state of your app so the error doesn't happen again
  };

  return (
    <ErrorBoundary fallbackRender={FallbackComp} onReset={onResetHandler}>
      {props.children || null}
    </ErrorBoundary>
  );
};

ErrorBoundaryWrapper.propTypes = {
  children: PropTypes.element || null,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  resetErrorBoundary: PropTypes.any || null,
};

export default ErrorBoundaryWrapper;
