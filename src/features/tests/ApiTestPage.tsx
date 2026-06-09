import { Button } from '@shared/components';
import { useState } from 'react';

// 예시 함수
function testFn() {
  return {
    value: 'Hello World!',
  };
}

export function ApiTestPage() {
  const [result, setResult] = useState<null | unknown>(null);

  const handleClick = async () => {
    const data = await testFn();
    setResult(data);
  };

  return (
    <>
      <Button style={{ backgroundColor: 'aliceblue' }} onClick={handleClick}>
        API 호출
      </Button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
}
