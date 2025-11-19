import { ChangeEventHandler, RefObject } from "react";

type Prop = {
  ref: RefObject<HTMLInputElement | null>;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

function FileInput({ ref, onChange }: Prop) {
  return (
    <input style={{ display: "none" }} ref={ref} type="file" onChange={onChange} />
  )
}

export default FileInput;