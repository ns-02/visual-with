import { ReactNode } from 'react';

const Card = ({
  iconElement,
  title,
  content,
  children,
}: {
  iconElement?: ReactNode;
  title?: string;
  content?: string;
  children?: ReactNode;
}) => {
  return (
    <div className='common_card'>
      <div className='common_card_info'>
        {iconElement}
        <div>
          <p>{title}</p>
          <p className='text_sec_100'>{content}</p>
        </div>
      </div>
      {children && <div className='common_card_nav'>{children}</div>}
    </div>
  );
};

export default Card;
