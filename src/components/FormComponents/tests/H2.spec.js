import React from 'react';
import renderer from 'react-test-renderer';
import H2 from '../h2/H2';
import {Text} from '@rneui/themed';

describe('H#', () => {
  describe(' H2 component', () => {
    it('Renders a basic H2 component', () => {
      const element = renderer.create(<H2><Text>Content</Text></H2>);

      expect(element).toMatchSnapshot();
    });
  });
});
