import { render, screen } from '@testing-library/react'; // cleanup, fireEvent, waitFor, screen
import { Default } from './Accordion.stories';

test('renders the button with correct text', () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Title');
});