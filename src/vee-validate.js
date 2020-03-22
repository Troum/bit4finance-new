import {extend, localize} from 'vee-validate';
import {min, required} from "vee-validate/dist/rules";
import de from 'vee-validate/dist/locale/de';
import en from 'vee-validate/dist/locale/en';
import ru from 'vee-validate/dist/locale/ru';

extend('required', required);
extend('min', min);


localize('de', de);
