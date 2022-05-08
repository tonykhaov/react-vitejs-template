import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from '../components/Title'

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

export const Primary: ComponentStory<typeof Title> = () => <Title>Title</Title>
