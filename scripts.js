const animalFacts = {
        'Леопард': 'Леопарды — потрясающие верхолазы.Они могут затаскивать на деревья тяжелые туши животных (весом в три раза больше их самих), пряча их от гиен.',
        'Енот': 'Лапы енотов содержат в тысячи раз больше осязательных рецепторов, чем руки человека. Именно поэтому они постоянно все трогают и «полощут» предметы в воде.',
        'Тигр': 'Полосы на шкуре тигра уникальны, как отпечатки пальцев у людей. Двух одинаковых тигров в природе не существует.'
    };

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
        <div class="modal-window">
            <button class="modal-close-btn">&times;</button>
            <h3 class="modal-title" id="mTitle">Животное</h3>
            <p class="modal-text" id="mText">Факт...</p>
        </div>
    `;
    document.body.appendChild(backdrop);

    const modalTitle = document.getElementById('mTitle');
    const modalText = document.getElementById('mText');
    const closeBtn = backdrop.querySelector('.modal-close-btn');
    const animalCards = document.querySelectorAll('.animal-column');

    animalCards.forEach(card => {
        card.addEventListener('click', () => {
            const animalName = card.getAttribute('data-animal');
            
            if (animalFacts[animalName]) {
                modalTitle.textContent = animalName;
                modalText.textContent = animalFacts[animalName];
                backdrop.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('active');
    });
