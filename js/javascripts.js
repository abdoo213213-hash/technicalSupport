







// اسم المستخدم
let userName = localStorage.getItem("name");
// عرض اسم المستخدم
document.getElementById("greeting").innerHTML = `مرحبا، ${userName}`;
let slides = document.querySelectorAll(".slide");
let slideindex = 0;
const nextbtn = document.getElementById("nextBtn");
const prevbtn = document.getElementById("prevBtn");
// عرض الشريحة الأولى
function showSlide(index) {
    slides.forEach((slide) => (slide.classList.remove("active")));
      slides[index].classList.add("active");
   
} 
function nextSlide() {
    slideindex=(slideindex + 1) % slides.length;
showSlide(slideindex);
}

function prevSlide() {
    slideindex = (slideindex - 1 + slides.length) % slides.length;
    showSlide(slideindex);
}
nextbtn.addEventListener("click", nextSlide);       
prevbtn.addEventListener("click", prevSlide);

showSlide(slideindex);

// تغيير الشريحة تلقائياً كل 3 ثواني
setInterval(nextSlide, 3000);
// البحث في النصوص
const searchForm = document.getElementById("search");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchText = searchForm.searchFeild.value.trim();
    let content = document.getElementById("content");
    const pTag = content.querySelectorAll("*");

    for (let p of pTag)
          {
            const text = p.textContent
         if (text.includes(searchText)){
            p.innerHTML = text.replaceAll(searchText, `<span class="highlight" >${searchText}</span>`)
            
        }
    }
    searchForm.searchFeild.value = ""; 


})
function removeHighlight() {
    const content = document.getElementById("content");
    const tage = content.querySelectorAll("*");
    for (let tag of tage) {
        tag.classList.remove("highlight");
    }}




        //      {
        //     word.style.backgroundColor = "yellow"; 
        // } else {
        //     word.style.backgroundColor = ""        }}

    











//     event.preventDefault(); // منع إعادة تحميل الصفحة
    
//     if (searchTerm) {
//         alert(`تم البحث عن: ${searchTerm}`);
//         // هنا يمكنك إضافة الكود لتنفيذ البحث الفعلي
//     } else {
//         alert("يرجى إدخال مصطلح البحث.");
//     }
// }); 