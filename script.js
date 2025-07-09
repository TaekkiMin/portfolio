// 페이지 진입 시 기본 콘텐츠 보이기
window.addEventListener("DOMContentLoaded", function () {
  // showContent("partners");
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

// === Contact 모달 열기 ===
document.querySelector(".contact-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contactModal").style.display = "flex";
});

// 닫기
function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

// === Home 내용을 About 내용으로 변환 ===
const homeLeft = document.querySelector(".home-left");

// 초기 home 내용을 저장
const originalContent = homeLeft.innerHTML;

document.querySelector('a[href="#about"]').addEventListener("click", (e) => {
  e.preventDefault();
  homeLeft.classList.add("fade-out");

  setTimeout(() => {
    homeLeft.innerHTML = `
      <p class="intro">Nice to meet you!</p>
      <h1><span class="highlight">About</span> Me</h1>
      <h3 style="color: #6e06f2">📝 배움을 기록하고 지식을 나누며 성장하는 것을 좋아합니다.</h3>
      <p class="desc">
      스터디모임을 통해 함께 공부하는 사람들과 지식을 나누며 서로 성장하려고 합니다.<br/>
      스터디에서 배운 내용과 개인적으로 새로 알게 된 기술, 문제 해결 사례를 정리해 블로그에 꾸준히 작성하고 있습니다.
      </p>
      <h3 style="color: #6e06f2">👥 사용자 편의를 최우선으로 고려하고 있습니다.</h3>
      <p class="desc">
      학생들이 학교 공지를 놓치지 않도록 도와 학교 생활에 불편함을 겪지 않도록 학교 공지 알림 어플을 개발한 경험이 있습니다.<br/>
      앱스토어의 엄격한 심사 기준을 충족하고 구글 플레이 스토어 테스트의 내부 테스트 및 사용자 피드백을 바탕으로 지속적인 업데이트와 성능 개선 작업을 통해 안정성과 정확성을 높였습니다.
      </p>
    `;
    homeLeft.classList.remove("fade-out");
  }, 500);
});

document.querySelector('a[href="#home"]').addEventListener("click", (e) => {
  e.preventDefault();
  homeLeft.classList.add("fade-out");

  setTimeout(() => {
    homeLeft.innerHTML = originalContent;
    homeLeft.classList.remove("fade-out");
  }, 500);
});
