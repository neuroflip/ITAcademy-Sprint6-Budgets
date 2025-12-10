import * as React from "react";
import type { ClipboardCopySharerProps } from "./ClipboardCopySharer.types";

const ClipboardCopySharer = ({ id }: ClipboardCopySharerProps) => {
  const [statusCopied, setStatus] = React.useState(false);

  const onCopyClick = () => {
    navigator.clipboard?.writeText(`${window.location.host}/ITAcademy-Sprint6-Budgets/budget/${id}`);
    setStatus(true);

    window.setTimeout(() => {
      setStatus(false);
    }, 1000);
  }

  return <div className="col-start-4 row-start-2 sm:row-start-1 self-start cursor-pointer" 
    title="Copy Link" onClick={ onCopyClick }>{ statusCopied ? "✅" : "📎" }</div>
}

export default ClipboardCopySharer;