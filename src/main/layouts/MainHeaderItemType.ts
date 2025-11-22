import { LucideProps } from "lucide-react";
import { ToolId } from "../../types/ToolId";

export default interface HeaderItem {
  id: ToolId;
  label: string;
  button?: string;
  onClick?: () => void | undefined;
  icon?: React.ComponentType<LucideProps>;
}
