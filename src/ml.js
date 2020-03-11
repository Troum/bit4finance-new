import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import russian from "./static/russian";
import english from "./static/english";
import german from "./static/german";

Vue.use(MLInstaller);

export default new MLCreate({
  initial: 'de',
  save: process.env.NODE_ENV === 'production',
  languages: [
      new MLanguage('de').create(german),
      new MLanguage('ru').create(russian),
      new MLanguage('en').create(english),
  ]
})
