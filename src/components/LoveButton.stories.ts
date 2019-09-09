import { storiesOf } from '@storybook/vue';
import vuetify from '../plugins/vuetify';

import LoveButton from './LoveButton.vue';

storiesOf('LoveButton', module)
  .addDecorator(() => ({
    vuetify,
    template: '<v-app id="blackship-admin"><story/></v-app>'
  }))
  .add('default', () => ({
    components: { LoveButton },
    template: `<love-button love="vue"/>`,
  }));
