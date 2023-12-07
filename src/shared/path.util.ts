import { dirname, join } from "node:path";

// Get the current file's path
const currentFilePath = __filename;

// Get the current directory (src/shared)
const currentDir = dirname(currentFilePath);

// Go up two levels over src folder
export const rootDirOverSrc = join(currentDir, "../../");
