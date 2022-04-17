import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Carousel from './Carousel';
import { imgList } from '../../config/index';

describe('Carousel', () => {
  describe('initialize', () => {
    it('renders the imgList if imgList provided', () => {
      const { container } = render(<Carousel imgList={imgList}/>)
      expect(container).toBeVisible()
    });
    it('renders the time if time provided', () => {
      const { container, getByTestId, getAllByLabelText } = render(<Carousel imgList={imgList}  time={2} />)
      const process = getByTestId('process_active')
      expect(process).toHaveStyle('animation: progress 2s linear')
      expect(container).toBeVisible()
      const lis = getAllByLabelText('li')
      expect(lis.length).toBe(imgList.length)
    })
  });
});
