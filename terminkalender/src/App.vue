<script>
import CalendarWeek from "@/components/CalendarWeek.vue";
import CalendarEntry from "@/components/CalendarEntry.vue";
import CalendarSettings from "@/components/CalendarSettings.vue";
export default {
  name: "App",
  components: {
    CalendarSettings,
    CalendarEntry,
    CalendarWeek,
  }
};
</script>

<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <CalendarWeek/>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <CalendarEntry/>
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <CalendarSettings/>
      </div>
    </div>
  </div>
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
