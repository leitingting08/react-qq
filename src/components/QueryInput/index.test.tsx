import React from 'react'
import { render } from '@testing-library/react'
import QueryInput from '.'

describe('QueryInput', () => {
  describe('initialize', () => {
    it('renders Query input', () => {
      const onSearch = jest.fn()
      const query = '123'
      const { container } = render(<QueryInput query={query} onSearch={onSearch} />)
      expect(container).toBeVisible()
    });
  });
});
