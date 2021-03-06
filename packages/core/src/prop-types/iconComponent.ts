import React from 'react';
import PropTypes from 'prop-types';
import { componentWithName } from 'airbnb-prop-types';
import { WithIconWrapperProps } from '@airbnb/lunar-icons/lib/withIcon';
import { STRIP_HOC_NAMES } from '../constants';

const propType: PropTypes.Requireable<React.ReactElement> = componentWithName<
  React.ReactElement<WithIconWrapperProps>
>(/Icon[A-Z]/, {
  stripHOCs: STRIP_HOC_NAMES,
});

export default propType;
