import { ComponentType } from "react";
import { LucideProps } from "lucide-react";
import { ToolId } from "../../types/ToolId";

export default interface MenuItem {
  id: ToolId;
  icon: ComponentType<LucideProps>;
  path?: string;
}