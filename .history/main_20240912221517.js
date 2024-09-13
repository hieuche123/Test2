const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider-inner img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

let currentIndex = 0;

function updateSlider() {
    const imageWidth = images[currentIndex].getBoundingClientRect().width;
    const offset = -currentIndex * imageWidth;
    sliderInner.style.transform = `translateX(${offset}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Initialize slider
window.addEventListener('resize', updateSlider); // Update slider on resize
updateSlider();


const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Khi nhấn vào nút mở modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});


function startCountdown(targetDate) {
    // Cập nhật đồng hồ đếm ngược mỗi giây
    const countdownInterval = setInterval(function () {
      // Lấy thời gian hiện tại
      const now = new Date().getTime();
  
      // Tính thời gian còn lại
      const distance = targetDate - now;
  
      // Tính toán ngày, giờ, phút, giây
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Hiển thị kết quả
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
      document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
  
      // Khi đếm ngược kết thúc
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }
    }, 1000);
  }
  
  // Đặt ngày kết thúc đếm ngược
  const targetDate = new Date("Dec 31, 2024 23:59:59").getTime(); // Thay đổi ngày giờ tại đây
  startCountdown(targetDate);