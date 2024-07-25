import { Clipboard, Icon, MenuBarExtra } from "@raycast/api";
import { useFetch } from "@raycast/utils";

export default function Command() {
  const { isLoading, error } = useFetch("http://127.0.0.1:8080/health");

  if (error) {
    return (
      <MenuBarExtra isLoading={isLoading} icon={Icon.ThumbsDown}>
        <MenuBarExtra.Section title="LlamaFile Status">
          <MenuBarExtra.Item icon={Icon.CircleDisabled} title="Server is down" />
        </MenuBarExtra.Section>
        <MenuBarExtra.Section>
          <MenuBarExtra.Item
            icon={Icon.Clipboard}
            title="Copy Launch in tmux Command"
            onAction={async () => {
              await Clipboard.copy(
                "tmux new-session -d -s 'llamafile' /bin/bash /Users/samuelholmes/llamafileModels/mistral-7b-instruct-v0.2.Q4_0.llamafile --server --nobrowser",
              );
            }}
          />
        </MenuBarExtra.Section>
      </MenuBarExtra>
    );
  }

  return (
    <MenuBarExtra isLoading={isLoading} icon={Icon.ThumbsUpFilled}>
      <MenuBarExtra.Section title="LlamaFile Status">
        <MenuBarExtra.Item icon={Icon.Rocket} title="Server is running" />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section>
        <MenuBarExtra.Item
          icon={Icon.Clipboard}
          title="Copy tmux attach session command"
          onAction={async () => {
            await Clipboard.copy("tmux attach-session -t llamafile");
          }}
        />
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
