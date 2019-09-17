import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import LoveButton from './LoveButton.vue';

Vue.use(Vuetify);
const vuetify = new Vuetify({});

const appDecorator = () => ({
  vuetify,
  template: `
    <v-app>
      <div style="background-color: rgb(134, 212, 226); padding: 20px; width: 100%; height: 100%;">
        <v-content>
          <story/>
        </v-content>
      </div>
    </v-app>
  `,
});

storiesOf('LoveButton', module)
  .addDecorator(appDecorator)
  .add('default', () => ({
    components: { LoveButton },
    template: `<love-button love="vue"/>`,
  }));
