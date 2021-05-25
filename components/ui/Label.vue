<template>
  <div
    class="
      relative
      bg-white
      flex justify-center
      border
      h-10
      px-2
    "
    :class=" label ? 'items-end' : 'items-center' "
  >
    <small
      class="
        absolute
        top-0
        text-xs
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
