<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Окружение:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        Данная setup-функция будет запущена <b>в обоих случаях</b>: на Node.js и клиентской стороне. Избегайте использования API Node или DOM, дабы избежать ошибок во время выполнения.
      </span>
      <span v-else-if="type === 'node'">
        Эта setup-функция будет работать только в среде Node.js, и вы сможете получить доступ к API Node.
      </span>
      <span v-else>
        Эта setup-функция будет выполняться только на стороне клиента. Убедитесь в совместимости c браузером при импорте пакетов.
      </span>
    </div>
  </details>
</template>
