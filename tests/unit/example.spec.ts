import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    }).find('h1');
    expect(wrapper.text()).toMatch(msg);
  });
});
