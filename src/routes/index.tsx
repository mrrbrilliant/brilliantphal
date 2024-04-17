import { For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import TaskBar from "~/components/TaskBar";
import WindowRenderer from "~/components/WindowRenderer";
import { ProcessProvider } from "~/context/ProcessContext";
import { Process } from "~/types/process";

export default function Home() {
	const [apps, setApps] = createSignal([]);
	const [processes, setProcesses] = createStore<Process[]>([
		{
			name: "hello",
			pid: "1",
			process_type: "gui",
			window: {
				decoration: true,
				isClosable: true,
				isFullScreen: false,
				isMaximisable: true,
				windowType: "desktop",
				layer: "alwaysOnTop",
				position: {
					x: 100,
					y: 100,
				},
				isMovable: false,
				isResizable: false,
				isMinimisable: false,
				winWidth: 400,
				winHeight: 200,
				height: 300,
				width: 300,
				maxWidth: 0,
				maxHeight: 0,
			},
		},
	]);

	const gui_processes = () =>
		processes.filter((process) => process.process_type === "gui");

	return (
		<main class="w-screen h-dvh bg-primary/10 relative overflow-hidden">
			<For each={gui_processes()}>
				{(process: Process) => (
					<ProcessProvider process={process}>
						<WindowRenderer />
					</ProcessProvider>
				)}
			</For>
		</main>
	);
}
