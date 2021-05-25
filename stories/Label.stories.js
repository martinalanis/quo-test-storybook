import Label from '../components/ui/Label.vue'

export default {
  title: 'Base Components/Label',
  component: Label,
  argTypes: {
    number: {
      control: { type: 'number' },
      description: 'Value to be displayed'
    },
    label: {
      control: { type: 'text' }
    }
  }
}

export const SimpleLabel = (args, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: '<Label v-bind="$props" />'
})
