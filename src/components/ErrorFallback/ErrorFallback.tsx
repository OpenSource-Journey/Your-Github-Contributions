import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import FallbackComponent from './FallbackComponent';

interface ErrorFallbackProps {
  children: React.ReactNode;
}
const ErrorFallback = ({ children }: ErrorFallbackProps) => {
  const navigate = useNavigate();

  const onErrorReset = () => {
    navigate('/');
  };

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onReset={onErrorReset}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorFallback;
