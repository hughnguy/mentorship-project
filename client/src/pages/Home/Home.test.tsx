import React from 'react';
import Home from './Home';
import {mountWithAppContext} from '../../../tests/mount';

describe('Home', () => {
    it('adds 1 + 2 to equal 3', () => {
        const wrapper = mountWithAppContext(<Home />);
        expect(wrapper).toBe(3);
    });
});
