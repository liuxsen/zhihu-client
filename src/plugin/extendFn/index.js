//扩展vue
import postHttp from './postHttp'
const extendFn = {
  install (Vue){
    Vue.prototype.postHttp = postHttp;
  }
};
export default extendFn;

