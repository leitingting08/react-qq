import React from 'react'
import { render } from '@testing-library/react'
import QueryItem from '.'

describe('QueryItem', () => {
  describe('initialize', () => {
    it('renders QueryItem if loading', () => {
      const { getByTestId } = render(<QueryItem loading={true} userinfo={{name: '', qq: '', qlogo: ''}} errorTip={''} />)
      expect(getByTestId('loading')).toBeVisible()
    });
    it('renders QueryItem if error', () => {
      const { getByTestId } = render(<QueryItem loading={false} userinfo={{name: '', qq: '', qlogo: ''}} errorTip={'服务器错误'} />)
      expect(getByTestId('errorTip')).toBeVisible()
    });
    it('renders QueryItem if items', () => {
      const { getByTestId } = render(<QueryItem loading={false} userinfo={{name: 'lancer', qq: '150692', qlogo: 'https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=150692'}} errorTip={''} />)
      expect(getByTestId('qqitem')).toBeVisible()
    });
  });
});
