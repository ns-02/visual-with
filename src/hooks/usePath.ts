import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const usePath = () => {
  const [ path, setPath ] = useState('');
  const navType = useNavigationType();
  const location = useLocation();

  /** 
   * url 링크가 (프론트 도메인)/main/(features)임을 산정하고 작성함
   * navType와 location.pathname의 변화를 감지하면 setPath()를 호출
   * 인수는 (features) 
   * */
  useEffect(() => {
    setPath(location.pathname.split("/")[2] as string);
  }, [navType, location.pathname]);

  return [path];
}

export default usePath;