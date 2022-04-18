import React from 'react'
import { render } from '@testing-library/react'
import Query from '.'

describe('Query', () => {
  describe('initialize', () => {
    it('renders query', () => {
      const { container } = render(<Query />)
      expect(container).toBeVisible()
    });
  });
});
