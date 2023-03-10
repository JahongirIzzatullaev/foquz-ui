import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TheHeader, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
