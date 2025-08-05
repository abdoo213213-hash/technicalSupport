// تحقق من أن الاسم رباعي والبريد ينتهي بـ .om في نموذج التواصل
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            if (name === "") {
                alert('يرجى إدخال الاسم.');
                return;
            }
            var nameParts = name.split(/\s+/);
            var validName = nameParts.length === 4 && nameParts.every(part => part.length > 0);
            var validEmail = email.endsWith('.om');
            if (!validName) {
                alert('يرجى إدخال اسم رباعي (أربعة أجزاء مفصولة بمسافة).');
                return;
            }
            if (!validEmail) {
                alert('يجب أن ينتهي البريد الإلكتروني بـ .om');
                return;
            }
            alert('تم إرسال الرسالة بنجاح!');
            this.submit();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var nameParts = name.split(/\s+/);
            var validName = nameParts.length === 4 && nameParts.every(part => part.length > 0);
            var validEmail = email.endsWith('.om');
            if (!validName) {
                alert('يرجى إدخال اسم رباعي (أربعة أجزاء مفصولة بمسافة).');
                return;
            }
            if (!validEmail) {
                alert('يجب أن ينتهي البريد الإلكتروني بـ .om');
                return;
            }
            alert('تم إرسال الرسالة بنجاح!');
            this.submit();
        });
    }
});