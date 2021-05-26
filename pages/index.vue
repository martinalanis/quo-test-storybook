<template>
  <div
    class="
      h-screen
      flex items-center justify-center flex-col
      bg-gray-100
      shadow-sm
    "
  >
    <div>
      <h1
        class="text-2xl font-bold"
      >
        COUNTER
      </h1>
      <h4 class="mb-7">
        Storybook + Tailwind
      </h4>
      <Counter :value="1" />
    </div>
  </div>
</template>

<script>
import Counter from '@/components/ui/Counter'
export default {
  name: 'Index',
  components: { Counter }
}
</script>
