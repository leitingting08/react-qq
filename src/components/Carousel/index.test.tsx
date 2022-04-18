import React from 'react'
import { render } from '@testing-library/react'
import Carousel from '.';
import { imgList } from '../../config/index';

describe('Carousel', () => {
  describe('initialize', () => {
    it('renders the imgList if imgList provided', () => {
      const { container } = render(<Carousel imgList={imgList}/>)
      expect(container).toBeVisible()
    });
    it('renders the time if time provided', () => {
      const { container, getAllByLabelText } = render(<Carousel imgList={imgList}  time={2} />)
      expect(container).toBeVisible()
      const lis = getAllByLabelText('li')
      expect(lis.length).toBe(imgList.length)
    })
  });
});
