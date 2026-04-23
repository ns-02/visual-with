import { Prop } from '..';

function Row({ children }: Prop) {
  return <div className='d_flex gap_6'>{children}</div>;
}

export default Row;
