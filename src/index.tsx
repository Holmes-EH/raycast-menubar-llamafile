import { Icon, MenuBarExtra } from "@raycast/api";

export default function Command() {
  return (
    <MenuBarExtra icon={Icon.Bookmark}>
      <MenuBarExtra.Item
        title="Log Action Event Type"
        onAction={(event: MenuBarExtra.ActionEvent) => console.log("Action Event Type", event.type)}
      />
    </MenuBarExtra>
  );
}
