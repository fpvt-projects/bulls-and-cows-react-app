import { render, screen } from '@testing-library/react';
import App,{hiddenNumber,checkHiddenUnique, testInput} from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('Function for Generating Random Number', () => {
  it('Function for Generating Random Number', () => {
    expect(hiddenNumber()).not.toBe(null)
  })
  it('Number should be unique', () => {
    expect(checkHiddenUnique(hiddenNumber())).toBe(true)
    expect(checkHiddenUnique(1122)).toBe(false)
  })
})

describe('Input Data is Unique', () => {
  const result = testInput('1234', '1234')
  it('Check if theres input', () => {
    expect (typeof result).toBe('object')
    expect (result.inputData && result.cow >= 0 && result.bull >=0).toBe(true)
  })
})





