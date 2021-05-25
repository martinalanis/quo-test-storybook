<template>
  <button
    class="
      py-1 px-3
      text-white
      rounded-md
      focus:outline-none active:outline-none hover:bg-blue-600
      transition duration-200
    "
    :class="!active ? 'bg-gray-300 pointer-events-none ' : 'bg-blue-500'"
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
