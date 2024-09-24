import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logo_view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  input: {
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    borderColor: "#ccc",
    fontWeight: "600",
    color: "#fff",
    padding: 16,
    width: 271,
    height: 52,
    fontSize: 16,
    marginRight: 10,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#191919",
  },

  touchable_debug: {
    display: "flex",
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    width: 52,
    // padding: 18,
    borderRadius: 5,
  },

  add_task_view: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  add_task_teext_input: {
    fontWeight: "600",
  },

  task_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_from_total_tasks: {
    // color: "#4EA8DE",
    marginTop: 47,
    fontWeight: "700",
  },
  text_from_created_tasks: {
    color: "#4EA8DE",
  },
  text_from_completed_tasks: {
    color: "#8284FA",
  },
  text_total_tasks_number: {
    // textShadowColor: "#8284FA", // Cor do contorno
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 1,
    marginTop: 47,
    color: "#fff",
  },
  view_for_cicle_in_task_status_number: {
    // display: "flex",
    // // height: 10,
    // padding: 8,
    // borderRadius: 50,
    // borderWidth: 2,
    // borderColor: "#000",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
  },
  view_from_total_tasks_current_status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  task_list_view: {
    marginTop: 20,
    // // padding: 15,
    // display: "flex",
    // textAlign: "center",
    // backgroundColor: "red",
    marginLeft: -5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  task_detail_card: {
    backgroundColor: "#262626",
  },
  text_from_empty_list_upper: {
    color: "#808080",
    fontWeight: "700",
  },
  text_from_empty_list_down: {
    color: "#808080",
  },
  view_from_clipboard_empty_list: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});
