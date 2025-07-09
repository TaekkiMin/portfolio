// 페이지 진입 시 기본 콘텐츠 보이기
window.addEventListener("DOMContentLoaded", function () {
  showContent("partners");
});

function showContent(content) {
  // 모든 콘텐츠 숨김
  const allContents = document.querySelectorAll(".experience-content");
  const allBars = document.querySelectorAll(".ex-bar");

  allContents.forEach((el) => el.classList.remove("active"));
  allBars.forEach((bar) => (bar.style.backgroundColor = "#5f5f5f"));

  // 선택한 콘텐츠 보이기
  const selectedContent = document.getElementById(`content-${content}`);
  const selectedBar = document.getElementById(`bar-${content}`);

  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  if (selectedBar) {
    selectedBar.style.backgroundColor = "#6e06f2";
  }
}

// Contact 모달 열기
document.querySelector('.btn.primary').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contactModal').style.display = 'flex';
  });
  
  // 닫기
  function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  
