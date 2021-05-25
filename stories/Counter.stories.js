import Counter from '../components/ui/Counter.vue'

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Value to be displayed'
    },
    label: {
      control: { type: 'text' }
    }
  }
}

export const Simple = (args, { argTypes }) => ({
  components: { Counter },
  props: Object.keys(argTypes),
  template: '<Counter v-bind="$props" />'
})
