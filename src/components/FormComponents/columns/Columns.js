import React from 'react';
// TODO: DC - FIX THIS CIRCULAR REFERENCE import {FormioComponentsList} from '../../../components';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';

const Columns = (props) => (
  <View style={{...styles.columns, borderBottomColor: props.colors.borderColor}}>
    {props.component.columns.map((column, index) => (
      // <FormioComponentsList
      //   key={index}
      //   {...props}
      //   components={column.components}
      // />
      <View key={index}>{column.components}</View>
    ))}
  </View>
);

Columns.propTypes = {
  component: PropTypes.object,
  theme: PropTypes.any,
  colors: PropTypes.object,
};

export default Columns;
