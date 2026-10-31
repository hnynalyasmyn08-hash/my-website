// 1. التمرير السلس (Smooth Scroll) عند النقر على الروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. ظهور العناصر بتأثير الحركة عند التمرير (Scroll Reveal Animation)
const observerOptions = {
    threshold: 0.15
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
            observer.unobserve(entry.target); // تشغيل الحركة مرة واحدة فقط
        }
    });
}, observerOptions);

// تطبيق التأثير على الأيقونات والصورة الكبيرة
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.header105, .header155, .header166, section');
    animatedElements.forEach(el => {
        el.classList.add('reveal-init');
        revealOnScroll.observe(el);
    });
});

// 3. زر العودة للأعلى (Back to Top Button) - يظهر تلقائياً عند التمرير للأسفل
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const interactiveImg = document.querySelector('.header105');

if (interactiveImg) {
  // عند مرور الماوس (أو اللمس): تميل وتكبر قليلاً
  interactiveImg.addEventListener('mouseenter', () => {
    interactiveImg.style.transform = 'rotate(5deg) scale(1.05) translateX(10px)';
  });

  // عند إبعاد الماوس (أو توقف اللمس): تعود لوضعيتها الأصلية تماماً
  interactiveImg.addEventListener('mouseleave', () => {
    interactiveImg.style.transform = 'rotate(0deg) scale(1) translateX(0)';
  });

  // تفاعل إضافي للموبايل (عند النقر والترك)
  interactiveImg.addEventListener('click', () => {
    interactiveImg.style.transform = 'rotate(-5deg) scale(1.08)';
    setTimeout(() => {
      interactiveImg.style.transform = 'rotate(0deg) scale(1) translateX(0)';
    }, 400); // تعود لطبيعتها بعد 400 جزء من الثانية
  });
}
const typingElement = document.querySelector('.typing-text');
const words = ['Front-End Developer', 'UI Enthusiast', 'Web Creator', 'مبدع واجهات ويب'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // حذف الحروف
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // كتابة الحروف
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // سرعة الكتابة والحذف
    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        // التوقف قليلاً عند انتهاء الكلمة قبل البدء بالحذف
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // الانتقال للكلمة التالية بعد الانتهاء من الحذف
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// بدء التأثير عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) {
        typeEffect();
    }
});
const menuBtn = document.getElementById('menuToggleBtn');
const dynamicMenu = document.getElementById('myDynamicMenu');

if (menuBtn && dynamicMenu) {
  menuBtn.addEventListener('click', () => {
    // إذا كانت مخفية، أظهرها، وإذا كانت ظاهرة، اخفها
    if (dynamicMenu.style.display === 'none') {
      dynamicMenu.style.display = 'block';
      menuBtn.textContent = 'إخفاء التفاصيل'; // تغيير نص الزر
    } else {
      dynamicMenu.style.display = 'none';
      menuBtn.textContent = 'عرض التفاصيل والنبذة'; // إعادة نص الزر
    }
  });
}