<template>
  <button
    class="
      w-10
      px-3
      text-white
      text-2xl
      focus:outline-none active:outline-none hover:bg-blue-600
      transition duration-200
    "
    :class="!active ? 'bg-blue-300 pointer-events-none ' : 'bg-blue-500'"
    :disabled="!active"
    @click="$emit('clicked')"
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
