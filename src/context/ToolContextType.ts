import { ToolId } from "../types/ToolId";

export type ToolContextType = { 
  toolId: ToolId | null; 
  setToolId: (id: ToolId | null) => void 
};