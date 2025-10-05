// Массив изображений
const images = [
    'https://via.placeholder.com/600x400?text=Фото+1',
    'https://via.placeholder.com/600x400?text=Фото+2',
    'https://via.placeholder.com/600x400?text=Фото+3',
    'https://via.placeholder.com/600x400?text=Фото+4'
  ];
  
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close');
  
  // Создаем и добавляем миниатюры
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Фото';
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = src;
    });
    gallery.appendChild(img);
  });
  
  // Закрытие модального окна
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };
  
  // Закрытие при клике вне изображения
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };