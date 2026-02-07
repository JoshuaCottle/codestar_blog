const submitButton = document.getElementById("submitButton");
const commentForm = document.getElementById("commentForm");
const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_body");

const deleteModalElement = document.getElementById("deleteModal");
const deleteModal = deleteModalElement
    ? new bootstrap.Modal(deleteModalElement)
    : null;
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        if (!commentText || !submitButton || !commentForm) {
            return;
        }
        const commentId = e.target.getAttribute("comment_id");
        const commentContent = document.getElementById(
            `comment${commentId}`,
        ).innerText;

        commentText.value = commentContent;
        submitButton.innerText = "Update";
        commentForm.setAttribute("action", `edit_comment/${commentId}`);
    });
}

for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        if (!deleteConfirm || !deleteModal) {
            return;
        }
        const commentId = e.target.getAttribute("comment_id");
        deleteConfirm.setAttribute("href", `delete_comment/${commentId}`);
        deleteModal.show();
    });
}
