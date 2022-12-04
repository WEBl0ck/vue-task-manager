<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
  deadline?: [string, string];
  status?: "DONE" | "UNDONE" | [number, number];
  icon?: "PLUS" | "CHECKED" | "UNCHECKED";
  sx?: string;
}>();
</script>

<template>
  <div class="card" :class="sx">
    <div v-if="typeof icon === 'string'" class="card-left-section">
      <img v-if="icon === 'PLUS'" src="../../assets/icons/plus.svg" />
      <img v-if="icon === 'CHECKED'" src="../../assets/icons/checkbox_checked.svg" />
      <img v-if="icon === 'UNCHECKED'" src="../../assets/icons/checkbox_unchecked.svg" />
    </div>
    <div class="card-middle-section">
      <div className="card-middle-section--header">
        <h1 class="card-middle-section--title">{{ title }}</h1>
        <h1 v-if="deadline" class="card-middle-section--time">{{ `${deadline[0]} - ${deadline[1]}` }}</h1>
      </div>
      <p className="card-middle-section--body">{{ description }}</p>
    </div>
    <div class="card-right-section">
      <img v-if="typeof status === 'object'" src="../../assets/icons/timer.svg" />
      <img v-if="status === 'DONE'" src="../../assets/icons/status_done.svg" />
      <img v-if="status === 'UNDONE'" src="../../assets/icons/status_undone.svg" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 18px;
  width: 100%;
  min-height: 80px;
  background-color: var(--system-white-50);
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.card-left-section,
.card-right-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-left-section,
.card-right-section > img {
  height: 25px;
}

.card-middle-section--header {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-middle-section--title {
  max-width: 150px;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  display: -webkit-box;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.card-middle-section--body {
  max-width: 200px;
  display: -webkit-box;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-middle-section--time {
  max-width: 71px;
  font-size: 13px;
  font-weight: 500;
  color: var(--system-gray);
  display: -webkit-box;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.card-middle-section--body {
  font-size: 13px;
  font-weight: 500;
}
</style>
