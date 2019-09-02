import { storiesOf } from '@storybook/vue';

import LoveButton from './LoveButton.vue';

storiesOf('LoveButton', module)
  .add('default', () => ({
    components: { LoveButton },
    template: `<love-button love="vue"/>`,
  }));
