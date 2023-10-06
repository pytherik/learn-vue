import { calendarWeekData } from "@/seed";
import { reactive, readonly } from "vue";

const state = reactive({
  calendarWeekData,
});

const getters = {
  getActiveDay: () => state.calendarWeekData.find((day) => day.active),
};

const mutations = {
  deleteEvent(dayId, eventTitle) {
    const dayById = state.calendarWeekData.find((day) => day.id === dayId);
    dayById.events = dayById.events.filter(
      (event) => event.title !== eventTitle
    );
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
