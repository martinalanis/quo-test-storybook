import Button from '../components/ui/Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      control: { type: 'radio' },
      options: ['plus', 'minus'],
      description: 'Sets the icon that will be displayed: plus | minus'
    },
    active: {
      control: {
        type: 'radio',
        labels: {
          true: 'active',
          false: 'disabled'
        }
      },
      options: [true, false],
      description: 'Current state: true | false'
    },
    clicked: {
      description: 'Emits value of the button: + | -'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />'
})

export const Default = Template.bind({})

export const Plus = Template.bind({})
Plus.args = { icon: 'plus' }
Plus.argTypes = { icon: { control: { disable: true } } }

export const Minus = Template.bind({})
Minus.args = { icon: 'minus' }
Minus.argTypes = { icon: { control: false } }
