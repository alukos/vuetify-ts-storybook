import Vue from 'vue';
import { configure } from '@storybook/vue';
import { VApp } from 'vuetify/lib';

Vue.component('v-app', VApp)

const req = require.context('../src', true, /.stories.(j|t)s$/);

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
