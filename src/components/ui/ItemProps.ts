import React from 'react';
import { Plus } from 'lucide-react';

type Type = 'list' | 'add';

interface BaseProps {
  type: Type;
  text?: string;
  icon?: typeof Plus;
  children?: React.ReactNode;
}

export type ItemProps = BaseProps & React.ComponentPropsWithoutRef<'div'>;
