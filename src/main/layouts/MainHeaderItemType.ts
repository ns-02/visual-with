import { LucideProps } from "lucide-react";
import { ToolId } from "@models/ToolId";

export default interface HeaderItem {
  id: ToolId;
  label: string;
  button?: string;
  onClick?: () => void | undefined;
  icon?: React.ComponentType<LucideProps>;
}
