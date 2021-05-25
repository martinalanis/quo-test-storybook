<template>
  <div class="flex">
    <Button
      icon="minus"
      :active="localValue"
      @clicked="substract"
    />
    <Label class="w-20" :number="localValue" :label="label" />
    <Button
      icon="plus"
      @clicked="add"
    />
  </div>
</template>

<script>
import Button from './Button'
import Label from './Label'
export default {
  name: 'Counter',
  components: {
    Button,
    Label
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.localValue = value
    }
  },
  methods: {
    add () {
      console.log('add')
      this.localValue = this.localValue + 1
    },
    substract () {
      this.localValue = this.localValue - 1
    }
  }
}
</script>
