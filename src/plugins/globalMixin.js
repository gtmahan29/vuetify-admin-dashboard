import { inject } from 'vue';

export default {
  created() {
    this.$helpers = inject('$helpers');
  },
};