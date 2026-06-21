import { CSSProperties, ReactNode } from 'react';

const InfoCard = ({
  iconElement,
  title,
  content,
  children,
  infoStyle,
}: {
  iconElement?: ReactNode;
  title?: string;
  content?: string;
  children?: ReactNode;
  infoStyle?: CSSProperties;
}) => {
  return (
    <div className='common_card'>
      <div className='common_card_info'>
        {iconElement}
        <div style={infoStyle}>
          <p>{title}</p>
          <p className='text_sec_100'>{content}</p>
        </div>
      </div>
      {children && <div className='common_card_nav'>{children}</div>}
    </div>
  );
};

export default InfoCard;
