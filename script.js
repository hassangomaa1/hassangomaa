// 1. تأثير ظهور العناصر عند التمرير (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// نطبق التأثير على كل السكاشن والكروت
document.querySelectorAll('section, .project-card,.stat-card,.info-item,.form-group,.button, .skill-card').forEach((el) => {
    el.classList.add('hidden'); // بنخفيهم في البداية
    observer.observe(el);
});

// 2. تأثير الـ Navbar عند السكرول (تغيير الشفافية)


// 3. منع إعادة تحميل الصفحة عند إرسال الفورم (تجربة مستخدم أفضل)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكراً لتواصلك يا بطل! تم إرسال رسالتك بنجاح (تأثير تجريبي).');
        contactForm.reset();
    });
}
