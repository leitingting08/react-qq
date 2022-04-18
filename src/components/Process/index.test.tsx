import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Process from '.';
import { imgList } from '../../config/index';

describe('Process', () => {
  describe('initialize', () => {
    it('renders the process if count provided', () => {
      const onChange = jest.fn()
      const { container } = render(<Process count={imgList.length} time={2} activeIndex={0} changeIndex={onChange} />)
      expect(container).toBeVisible()
    });
    it('renders the process if click process', () => {
      const onChange = jest.fn()
      const { container, getByTestId, getAllByLabelText } = render(<Process count={imgList.length} time={2} activeIndex={0} changeIndex={onChange} />)
      expect(container).toBeVisible()
      const process = getByTestId('process_active')
      expect(process).toHaveStyle('animation: progress 2s linear')
      const lis = getAllByLabelText('li')
      expect(lis.length).toBe(imgList.length)
      lis.forEach(li=>{
        fireEvent.click(li)
        expect(onChange).toBeCalled()
      })
    });
  });
});
