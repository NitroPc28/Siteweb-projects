function getMotivationalMessage(average) {
    if (average >= 16) {
        return "ممتاز! أنت متفوق بشكل رائع، واصل على هذا المستوى! 🌟";
    } else if (average >= 14) {
        return "جيد جداً! أنت قريب من التفوق، استمر في الاجتهاد! 💪";
    } else if (average >= 12) {
        return "جيد! يمكنك تحقيق المزيد، نحن نؤمن بقدراتك! 📚";
    } else if (average >= 10) {
        return "مقبول، لديك إمكانات أكبر، واصل المحاولة! 🎯";
    } else {
        return "لا تيأس، كل محاولة هي خطوة نحو النجاح! 🌱";
    }
}

document.getElementById('grade-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const subjects = ['math', 'physics', 'arabic', 'english', 'french', 
                     'info', 'tech', 'islamic', 'sport', 'science', 'social'];
    
    let totalPoints = 0;
    let validGrades = 0;

    subjects.forEach(subject => {
        for(let i = 1; i <= 3; i++) {
            const input = document.getElementById(`${subject}${i}`);
            const grade = parseFloat(input.value);
            if (!isNaN(grade)) {
                totalPoints += grade;
                validGrades++;
                input.classList.add('valid-input');
            }
        }
    });

    const finalAverage = validGrades > 0 ? totalPoints / validGrades : 0;
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <h3 class="result-title">المعدل النهائي</h3>
        <div class="final-score">${finalAverage.toFixed(2)}/20</div>
        <div class="motivation-text">${getMotivationalMessage(finalAverage)}</div>
    `;

    resultDiv.classList.remove('show');
    void resultDiv.offsetWidth; // Trigger reflow
    resultDiv.classList.add('show');
});

// إضافة تأثيرات تفاعلية للحقول
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value && !isNaN(this.value)) {
            this.style.borderColor = '#1e3a8a';
        } else {
            this.style.borderColor = '#e9ecef';
        }
    });
});
