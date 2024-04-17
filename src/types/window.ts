export const WindowType = [
	"applet",
	"desktop",
	"dock",
	"normal",
	"widget",
] as const;

export type WindowPosition = {
	x: number;
	y: number;
};

export const WindowLayer = ["alwaysOnTop", "alwaysBelow", "float"] as const;

export type AppWindow = {
	windowType: (typeof WindowType)[number];
	layer: (typeof WindowLayer)[number];
	position: WindowPosition;
	isMovable: boolean;
	isResizable: boolean;
	isFullScreen: boolean;
	decoration: boolean;
	isClosable: boolean;
	isMinimisable: boolean;
	isMaximisable: boolean;
	winWidth: number;
	winHeight: number;
	maxWidth: number;
	maxHeight: number;
	width: number;
	height: number;
};
