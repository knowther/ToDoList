import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
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
    color: "#4EA8DE",
    marginTop: 47,
    fontWeight: "700",
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
    display: "flex",
    alignItems: "center",
  },
  task_detail_card: {
    backgroundColor: "#262626",
  },
});
