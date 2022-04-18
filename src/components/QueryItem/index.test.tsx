import React from 'react'
import { render } from '@testing-library/react'
import QueryItem from '.'

describe('QueryItem', () => {
  describe('initialize', () => {
    it('renders QueryItem', () => {
      const { container } = render(<QueryItem loading={true} userinfo={{name: '', qq: '', qlogo: ''}} errorTip={''} />)
      expect(container).toBeVisible()
    });
  });
});
