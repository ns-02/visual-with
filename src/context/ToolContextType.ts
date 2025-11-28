import { ToolId } from '@models/ToolId';

export type ToolContextType = {
  toolId: ToolId | null;
  setToolId: (id: ToolId | null) => void;
};
