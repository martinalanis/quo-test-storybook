<template>
  <button
    :disabled="!active"
    @click="$emit('clicked', icon)"
  >
    {{ localIcon }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: 'plus'
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    localIcon () {
      const availableIcons = {
        plus: '+',
        minus: '-'
      }
      return availableIcons[this.icon] || availableIcons.plus
    }
  }
}
</script>

<style lang="css" scoped>

</style>
