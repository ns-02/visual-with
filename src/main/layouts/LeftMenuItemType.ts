import { ComponentType } from 'react';
import { LucideProps } from 'lucide-react';
import { ToolId } from '@models/ToolId';

export default interface MenuItem {
  id: ToolId;
  icon: ComponentType<LucideProps>;
  path?: string;
}
