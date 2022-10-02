
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../../components/Label";

export default {
    title:'UI/Label',
    component: Label,
    argTypes:{
        size: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: 'Hola Hector',
    size: 'h1',
  
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    label: 'TODO EN MAYUSCULA',
    size: 'h2',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'text-secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'h3',
    color: 'text-tertiary'
}

export const customColor = Template.bind({})
customColor.args = {
    size: 'h1',
    fontColor: '#000'
}