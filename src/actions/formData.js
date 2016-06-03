import {
 FORM_DATA_SUBMIT
} from '../constants/formConstantsList.js';

export default {
 submitData: (model) => {
   return {
     type: FORM_DATA_SUBMIT,
     payload: { model: model }
   }
 }
}