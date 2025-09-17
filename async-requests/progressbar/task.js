document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const fileInput = document.getElementById('file');
        const file = fileInput.files[0];
        
        if (!file) {
            alert('Пожалуйста, выберите файл для загрузки');
            return;
        }
        
        const formData = new FormData();
        formData.append('file', file);
        
        const xhr = new XMLHttpRequest();
        
        xhr.upload.addEventListener('progress', function(event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total);
                progress.value = percentComplete;
                console.log(`Загружено: ${(percentComplete * 100).toFixed(2)}%`);
            }
        });
        
        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                progress.value = 1.0;
                alert('Файл успешно загружен!');
            } else {
                alert('Ошибка загрузки файла');
            }
        });
        
        xhr.addEventListener('error', function() {
            alert('Произошла ошибка при загрузке файла');
            progress.value = 0;
        });
        
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);
    });
});