import { useRef } from "react";

export default function DialogApp() {
  const deleteDialogRef = useRef(null);
  const archiveDialogRef = useRef(null);

  function openDeleteDialog() {
    deleteDialogRef.current.showModal();
  }

  function closeDeleteDialog() {
    deleteDialogRef.current.close();
  }

  function confirmDelete() {
    alert("Silindi!");
    deleteDialogRef.current.close();
  }

  function openArchiveDialog() {
    archiveDialogRef.current.showModal();
  }

  function closeArchiveDialog() {
    archiveDialogRef.current.close();
  }

  function confirmArchive() {
    alert("Arşivlendi!");
    archiveDialogRef.current.close();
  }

  return (
    <>
      <h2>Notlar Uygulaması</h2>
      <button onClick={openDeleteDialog}>Delete Note Dialog Aç</button>
      <button onClick={openArchiveDialog}>Archive Note Dialog Aç</button>

      {/* Delete Dialog */}
      <dialog ref={deleteDialogRef}>
        <div className="dialogHead">
          Delete Note
          <button className="closeBtn" onClick={closeDeleteDialog}>×</button>
        </div>
        <div className="dialogBody">
          <p>Are you sure you want to delete this note? This action cannot be undone.</p>
          <div className="dialogActions">
            <button className="cancelBtn" onClick={closeDeleteDialog}>Cancel</button>
            <button className="confirmBtn delete" onClick={confirmDelete}>Delete Note</button>
          </div>
        </div>
      </dialog>

      {/* Archive Dialog */}
      <dialog ref={archiveDialogRef}>
        <div className="dialogHead">
          Archive Note
          <button className="closeBtn" onClick={closeArchiveDialog}>×</button>
        </div>
        <div className="dialogBody">
          <p>Do you want to archive this note? You can access it later from the archive.</p>
          <div className="dialogActions">
            <button className="cancelBtn" onClick={closeArchiveDialog}>Cancel</button>
            <button className="confirmBtn archive" onClick={confirmArchive}>Archive Note</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
