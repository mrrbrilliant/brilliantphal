import { Component, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Process } from "~/types/process";

const ProcessContext = createContext<Process | null>(null);
export const useThisProcess = () => useContext(ProcessContext);
export const ProcessProvider: Component<Props> = (props) => {
	const [appProcess, setAppProcess] = createStore(props.process);

	return (
		<ProcessContext.Provider value={appProcess}>
			{props.children}
		</ProcessContext.Provider>
	);
};
interface Props {
	children: JSX.Element;
	process: Process;
}
