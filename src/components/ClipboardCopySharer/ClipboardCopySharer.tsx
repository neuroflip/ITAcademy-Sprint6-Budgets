import type { ClipboardCopySharerProps } from "./ClipboardCopySharer.types";

const ClipboardCopySharer = ({ id }: ClipboardCopySharerProps) => {
  const onCopyClick = () => {
    navigator.clipboard?.writeText(`${window.location.host}/ITAcademy-Sprint6-Budgets/budget/${id}`);
  }

  return <div className="self-start cursor-pointer" title="Copy Link" onClick={ onCopyClick }>📎</div>
}

export default ClipboardCopySharer;