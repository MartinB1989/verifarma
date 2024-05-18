<template>
  <VList density="compact">
    <div v-for="item in menu" :key="item.title">
      <VListItem
        v-if="!item.submenu?.length"
        :prepend-icon="item.icon"
        :to="item.to"
        color="primary"
        :title="item.title"
      ></VListItem>
      <VListGroup v-if="item.submenu?.length">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            color="primary"
            :prepend-icon="item.icon"
            :title="item.title"
          ></VListItem>
        </template>
        <div v-for="subItem in item.submenu" :key="subItem.to">
          <VListItem
            :to="subItem.to"
            color="primary"
            :title="subItem.title"
          ></VListItem>
        </div>
      </VListGroup>
    </div>
  </VList>
</template>
<script setup lang="ts">
import type Menu from '../../types/Menu'

const menu = ref<Menu[]>([
  {
    title: 'Home',
    icon: 'mdi-home',
    to: '/',
  },
  // {
  //   title: 'Categorias',
  //   icon: 'mdi-shape',
  //   section: 'Categorias',
  //   submenu: [
  //     {
  //       title: 'Acción',
  //       icon: '',
  //       to: '/?search=accion',
  //     },
  //   ],
  // },
])
</script>
<style scoped>
.v-list-item {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}
</style>
