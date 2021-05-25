<template>
  <div
    class="
      relative
      flex
      border
      h-11
      px-2
    "
    :class=" label ? 'items-end' : 'items-center' "
  >
    <small
      class="
        absolute
        top-0 left-2
      "
    >
      {{ label }}
    </small>
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    number: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
