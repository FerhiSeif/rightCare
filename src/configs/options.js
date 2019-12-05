// todo remove suppression on multiple exports
// eslint-disable-next-line import/prefer-default-export
import {
  enLabelIcon,
  frLabelIcon,
  emptyFrLabelIcon,
  emptyEnLabelIcon,
} from '../components/layouts/utilities/labelIcons';

export const options = [
  { value: 'en', label: enLabelIcon },
  { value: 'fr', label: frLabelIcon },
];

export const mobileOptions = [
  { value: 'en', label: emptyEnLabelIcon },
  { value: 'fr', label: emptyFrLabelIcon },
];
