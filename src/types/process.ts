import { AppWindow } from "./window";

const ProcessType = ["gui", "tui", "bg"] as const;

export type Process = {
	name: string;
	pid: string;
	process_type: (typeof ProcessType)[number];
	window?: AppWindow;
};
