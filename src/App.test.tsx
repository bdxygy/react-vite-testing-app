import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let component:  HTMLElement; 
  
  beforeEach(() => {
    jest.clearAllMocks();
    const {container} = render(<App />);
    component = container;
  });


  it('renders without crashing', async () => {
    // check to match snapshot
  expect(component).toMatchSnapshot();
  
  const h1 = screen.getByText('Vite + React');
   expect(h1).toBeInTheDocument();
  });

  it('should click the button increment', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toHaveTextContent('count is 1');
    expect(component).toMatchSnapshot();
  });
});