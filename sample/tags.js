/**
 * Created by realm on 2017/4/21.
 */

let app = new Vue({
  el: '#app',
  data: {
    tags: [{
      label: '乌瑟尔'
    }]
  },
  methods: {
    onChange(index) {
      this.tags.splice(index, 1);
    },
    onClick() {
      this.$el.querySelector('[name=tag]').focus();
    },
    onSubmit(event) {
      let label = event.target.elements.tag.value;
      if (label) {
        this.tags.push({
          label: label
        });
        event.target.elements.tag.value = '';
      }
    }
  }
});