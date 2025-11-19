import { ChangeEvent, DragEvent, useRef, useState } from "react";
import styles from "./DragAndDrop.module.css";
import FileInput from "./FileInput";
import { Upload } from "lucide-react";
import FileSelectButton from "./FileSelectButton";

const DragAndDrop = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | undefined | null>(null)
  const containerStyle = dragging ? styles.container_dragging : styles.container;

  // '파일 선택' 버튼 클릭 시 동작
  const handleSelectFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 파일 선택 모달이 닫힌 경우(Input 요소에 파일이 추가된 경우) 동작
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  }

  // 드래그가 영역 안에 최초로 들어왔을 시
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();   // 브라우저 기본 이벤트 X
    e.stopPropagation();  // 이벤트 전달 X

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {  // 파일 유효성 검사
      setDragging(true);
    }
  };

  // 드래그가 영역 바깥으로 나갔을 시
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  // 드래그가 영역 안에서 이동할 시
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  // 드래그가 영역 안에서 놓았을 시
  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // 실제 파일 처리 로직
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
    setDragging(false);
  };

  return (
    <div 
      className={containerStyle}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      <FileInput ref={inputRef} onChange={handleFileChange} />
      {
        file ? <p>{file.name}</p> :
        <>
          <Upload size={48} color="#aaa" />
          <p style={{ color: "#555" }}>파일을 여기에 드래그하여 업로드하세요</p>
          <p style={{ fontSize: "14px", color: "#777" }}>또는</p>
          <FileSelectButton text="파일 선택" onClick={handleSelectFile} />
        </>
      }
    </div>
  )
}

export default DragAndDrop;