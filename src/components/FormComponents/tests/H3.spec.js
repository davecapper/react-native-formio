import React from 'react';
import renderer from 'react-test-renderer';
import H3 from '../h3/H3';
import {Text} from '@rneui/themed';

describe('H3', () => {
  describe(' H3 component', () => {
    it('Renders a basic H3 component', () => {
      const element = renderer.create(<H3><Text>Header</Text></H3>);

      expect(element).toMatchSnapshot();
    });
  });
});
