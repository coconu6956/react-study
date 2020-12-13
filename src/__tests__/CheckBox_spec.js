import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from '../04/CheckBox';
import Input from '../03/Input';

describe('<CheckBox>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<CheckBox name="required">테스트</CheckBox>);
        }).not.toThrow();
    });
    it('displays errorMessage', () => {
        const errorMessage = '오류 메시지';
        const errorHtml = shallow(<CheckBox name="name" errorMessage={errorMessage}>테스트</CheckBox>)
        .dive()
        .find('span')
        .html();
        expect(errorHtml).toContain(errorMessage);
    });
    it('calls back onChange on clicked', () => {
        const changeStub = jest.fn();
        expect(changeStub).toHaveBeenCalledTimes(0);
        const input = shallow(<CheckBox name="test_name" onChange={changeStub}>테스트</CheckBox>)
        .dive()
        .find('input');
        expect(changeStub).toHaveLength(1);
        input.simulate('click', {target: { checked : true }});
        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith('required', true);
        input.simulate('click', {target: {checked: false}});
        expect(changeStub).toHaveBeenCalledWith('required', false);
    });
});

