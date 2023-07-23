// FT-23 Creează o fereastră modală (mobile, tablet, desktop) cu informații despre membrii echipei tale, care se va deschide la click pe textul "GoIT Students" din footer.
const student = document.querySelector('.footer-modal_students');
const dropModal = document.querySelector('.modal');
const modal = document.querySelector('.modal-content');
function openModal() {
  dropModal.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  dropModal.style.display = 'none';
  modal.style.display = 'none';
}
student.onclick = openModal;
dropModal.onclick = closeModal;
