<script setup lang="ts">
import { ref } from "vue";

const activeItem = ref("All");

console.log(activeItem.value);

const selectorValues = [
  {
    title: "All",
  },
  {
    title: "Done",
  },
  {
    title: "Undone",
  },
  {
    title: "In progress",
  },
  {
    title: "With timer",
  },
];
</script>

<template>
  <div class="task-menu-selector-container">
    <ul className="task-menu-selector">
      <li
        v-for="selectorValue in selectorValues"
        :key="selectorValue.title"
        class="task-menu-selector--item"
        :class="
          selectorValue.title === activeItem
            ? 'task-menu-selector--item_active'
            : ''
        "
        @click="activeItem = selectorValue.title"
      >
        {{ selectorValue.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-menu-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 443px;
}

.task-menu-selector-container {
  overflow: hidden;
  /*overflow-x: scroll;*/
  background-color: var(--system-white-50);
  border-radius: 15px;
}

.task-menu-selector--item {
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  padding: 0px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.task-menu-selector--item:after {
  content: "";
  background-color: var(--system-gray);
  width: 1px;
  height: 12px;
  border-radius: 0.5px;
  position: absolute;
  right: -1px;
}

.task-menu-selector--item_active {
  background-color: var(--system-black);
  color: var(--system-white);
}
</style>
