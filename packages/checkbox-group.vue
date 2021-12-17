<template>
  <div class="as-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AsCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
