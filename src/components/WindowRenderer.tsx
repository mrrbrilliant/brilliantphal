import { Match, Switch, createContext } from "solid-js";
import { useThisProcess } from "~/context/ProcessContext";
import { AppWindow } from "~/types/window";
import { px } from "~/utils/px";
import { WidgetWindow } from "./WidgetWindow";
import { NormalWindow } from "./NormalWindow";
import { DockWindow } from "./DockWindow";
import { AppletWindow } from "./AppletWindow";
import { DesktopWindow } from "./DesktopWindow";

const WindowContext = createContext<AppWindow | null>(null);
const WindowRenderer = () => {
	const thisProcess = useThisProcess();

	return (
		<WindowContext.Provider value={thisProcess!.window!}>
			<Switch>
				<Match when={thisProcess?.window?.windowType === "desktop"}>
					<DesktopWindow />
				</Match>
				<Match when={thisProcess?.window?.windowType === "applet"}>
					<AppletWindow />
				</Match>
				<Match when={thisProcess?.window?.windowType === "dock"}>
					<DockWindow />
				</Match>
				<Match when={thisProcess?.window?.windowType === "normal"}>
					<NormalWindow />
				</Match>
				<Match when={thisProcess?.window?.windowType === "widget"}>
					<WidgetWindow />
				</Match>
			</Switch>
		</WindowContext.Provider>
	);
};

export default WindowRenderer;
