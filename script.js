const MOCK_DOCTORS = [
    {
        id: 1,
        name: 'د. أحمد محمد',
        specialty: 'قلب',
        governorate: 'القاهرة',
        address: 'مدينة نصر، القاهرة',
        phone: '01234567890',
        price: 300,
        rating: 4.8,
        hours: 'السبت - الخميس: 5م - 9م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%234299e1" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eأ%3C/text%3E%3C/svg%3E'
    },
    {
        id: 2,
        name: 'د. سارة علي',
        specialty: 'أطفال',
        governorate: 'الجيزة',
        address: 'الهرم، الجيزة',
        phone: '01234567891',
        price: 250,
        rating: 4.9,
        hours: 'السبت - الخميس: 4م - 8م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ed64a6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eس%3C/text%3E%3C/svg%3E'
    },
    {
        id: 3,
        name: 'د. محمود حسن',
        specialty: 'عظام',
        governorate: 'الإسكندرية',
        address: 'سموحة، الإسكندرية',
        phone: '01234567892',
        price: 350,
        rating: 4.7,
        hours: 'السبت - الخميس: 6م - 10م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2348bb78" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eم%3C/text%3E%3C/svg%3E'
    },
    {
        id: 4,
        name: 'د. نهى إبراهيم',
        specialty: 'جلدية',
        governorate: 'القاهرة',
        address: 'المعادي، القاهرة',
        phone: '01234567893',
        price: 280,
        rating: 4.6,
        hours: 'الأحد - الخميس: 5م - 9م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f6ad55" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eن%3C/text%3E%3C/svg%3E'
    },
    {
        id: 5,
        name: 'د. خالد عبدالله',
        specialty: 'باطنة',
        governorate: 'الجيزة',
        address: 'فيصل، الجيزة',
        phone: '01234567894',
        price: 200,
        rating: 4.5,
        hours: 'السبت - الخميس: 6م - 10م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%239f7aea" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eخ%3C/text%3E%3C/svg%3E'
    },
    {
        id: 6,
        name: 'د. ليلى صالح',
        specialty: 'نساء وتوليد',
        governorate: 'القاهرة',
        address: 'مصر الجديدة، القاهرة',
        phone: '01234567895',
        price: 320,
        rating: 4.9,
        hours: 'السبت - الخميس: 4م - 8م',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23fc8181" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white"%3Eل%3C/text%3E%3C/svg%3E'
    }
];

const MOCK_PHARMACIES = [
    {
        id: 1,
        name: 'صيدلية العزبي',
        governorate: 'القاهرة',
        address: 'شارع الهرم، الجيزة',
        phone: '01111111111',
        hours: 'يومياً: 9ص - 11م',
        open24: false,
        isOpen: true,
        medicines: ['باراسيتامول', 'أموكسيسيللين', 'أوميجا 3', 'فيتامين د']
    },
    {
        id: 2,
        name: 'صيدلية الشفاء',
        governorate: 'الإسكندرية',
        address: 'محطة الرمل، الإسكندرية',
        phone: '01111111112',
        hours: '24 ساعة',
        open24: true,
        isOpen: true,
        medicines: ['أسبرين', 'كونجستال', 'فلوتاب', 'بروفين']
    },
    {
        id: 3,
        name: 'صيدلية الدلتا',
        governorate: 'الدقهلية',
        address: 'وسط البلد، المنصورة',
        phone: '01111111113',
        hours: 'يومياً: 8ص - 12م',
        open24: false,
        isOpen: true,
        medicines: ['باراسيتامول', 'كونجستال', 'أنتينال', 'سميكتا']
    },
    {
        id: 4,
        name: 'صيدلية النور',
        governorate: 'القاهرة',
        address: 'مدينة نصر، القاهرة',
        phone: '01111111114',
        hours: 'يومياً: 9ص - 10م',
        open24: false,
        isOpen: true,
        medicines: ['فيتامين C', 'زنك', 'كالسيوم', 'حديد']
    },
    {
        id: 5,
        name: 'صيدلية المستقبل',
        governorate: 'الجيزة',
        address: 'المهندسين، الجيزة',
        phone: '01111111115',
        hours: '24 ساعة',
        open24: true,
        isOpen: true,
        medicines: ['باراسيتامول', 'بروفين', 'أموكسيسيللين', 'أوجمنتين']
    }
];

const MOCK_MEDICINES = [
    {
        id: 1,
        name: 'باراسيتامول',
        scientificName: 'Paracetamol',
        use: 'مسكن للألم وخافض للحرارة',
        dose: 'قرص واحد كل 6-8 ساعات',
        price: 15,
        company: 'الشركة المصرية للأدوية',
        pharmacies: [1, 3, 5]
    },
    {
        id: 2,
        name: 'أموكسيسيللين',
        scientificName: 'Amoxicillin',
        use: 'مضاد حيوي واسع المجال',
        dose: 'كبسولة كل 8 ساعات لمدة 7 أيام',
        price: 45,
        company: 'جلاكسو',
        pharmacies: [1, 5]
    },
    {
        id: 3,
        name: 'كونجستال',
        scientificName: 'Paracetamol + Chlorpheniramine',
        use: 'لعلاج نزلات البرد والإنفلونزا',
        dose: 'قرص واحد كل 6 ساعات',
        price: 25,
        company: 'ممفيس',
        pharmacies: [2, 3]
    },
    {
        id: 4,
        name: 'أنتينال',
        scientificName: 'Nifuroxazide',
        use: 'لعلاج الإسهال والنزلات المعوية',
        dose: 'كبسولة كل 6 ساعات',
        price: 18,
        company: 'الشركة العربية للأدوية',
        pharmacies: [3]
    },
    {
        id: 5,
        name: 'بروفين',
        scientificName: 'Ibuprofen',
        use: 'مسكن للألم ومضاد للالتهاب',
        dose: 'قرص واحد كل 8 ساعات',
        price: 20,
        company: 'الشركة المصرية للأدوية',
        pharmacies: [2, 5]
    },
    {
        id: 6,
        name: 'أوميجا 3',
        scientificName: 'Omega-3 Fatty Acids',
        use: 'مكمل غذائي لصحة القلب والدماغ',
        dose: 'كبسولة واحدة يومياً',
        price: 120,
        company: 'فاركو',
        pharmacies: [1, 4]
    }
];

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    for (let i = fullStars; i < 5; i++) {
        starsHTML += '<span class="star" style="color: #e5e7eb;">★</span>';
    }
    return starsHTML;
}

const mainSearchInput = document.getElementById('mainSearch');
const searchBtn = document.getElementById('searchBtn');

if (searchBtn) {
    searchBtn.addEventListener('click', performMainSearch);
}

if (mainSearchInput) {
    mainSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performMainSearch();
        }
    });
}

function performMainSearch() {
    const query = mainSearchInput.value.trim().toLowerCase();
    if (!query) return;

    const medicineKeywords = ['دواء', 'علاج', 'باراسيتامول', 'أموكسيسيللين', 'كونجستال', 'بروفين'];
    const pharmacyKeywords = ['صيدلية', 'صيدليه'];

    const isMedicine = medicineKeywords.some(keyword => query.includes(keyword));
    const isPharmacy = pharmacyKeywords.some(keyword => query.includes(keyword));

    if (isMedicine) {
        localStorage.setItem('searchQuery', query);
        window.location.href = 'medicine.html';
    } else if (isPharmacy) {
        localStorage.setItem('searchQuery', query);
        window.location.href = 'pharmacies.html';
    } else {
        localStorage.setItem('searchQuery', query);
        window.location.href = 'doctors.html';
    }
}

const suggestionChips = document.querySelectorAll('.suggestion-chip');
suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const query = chip.dataset.query;
        mainSearchInput.value = query;
        performMainSearch();
    });
});

if (window.location.pathname.includes('doctors.html')) {
    initDoctorsPage();
}

function initDoctorsPage() {
    const governorateFilter = document.getElementById('governorateFilter');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const doctorSearch = document.getElementById('doctorSearch');

    renderDoctors(MOCK_DOCTORS);

    governorateFilter.addEventListener('change', filterDoctors);
    specialtyFilter.addEventListener('change', filterDoctors);
    doctorSearch.addEventListener('input', filterDoctors);

    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
        doctorSearch.value = savedQuery;
        localStorage.removeItem('searchQuery');
        filterDoctors();
    }
}

function filterDoctors() {
    const governorate = document.getElementById('governorateFilter').value;
    const specialty = document.getElementById('specialtyFilter').value;
    const search = document.getElementById('doctorSearch').value.toLowerCase();

    const filtered = MOCK_DOCTORS.filter(doctor => {
        const matchGovernorate = !governorate || doctor.governorate === governorate;
        const matchSpecialty = !specialty || doctor.specialty === specialty;
        const matchSearch = !search || doctor.name.toLowerCase().includes(search) ||
                           doctor.specialty.toLowerCase().includes(search);
        return matchGovernorate && matchSpecialty && matchSearch;
    });

    renderDoctors(filtered);
}

function renderDoctors(doctors) {
    const grid = document.getElementById('doctorsGrid');
    if (!grid) return;

    if (doctors.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">لم يتم العثور على أطباء</p>';
        return;
    }

    grid.innerHTML = doctors.map(doctor => `
        <div class="doctor-card">
            <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p class="specialty">${doctor.specialty}</p>
                <p class="address">${doctor.address}</p>
                <div class="rating">${renderStars(doctor.rating)}</div>
                <p class="price">سعر الكشف: ${doctor.price} جنيه</p>
                <div class="doctor-actions">
                    <button class="btn btn-primary btn-small" onclick="showDoctorModal(${doctor.id})">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showDoctorModal(doctorId) {
    const doctor = MOCK_DOCTORS.find(d => d.id === doctorId);
    if (!doctor) return;

    const modal = document.getElementById('doctorModal');
    document.getElementById('modalDoctorImage').src = doctor.image;
    document.getElementById('modalDoctorName').textContent = doctor.name;
    document.getElementById('modalDoctorSpecialty').textContent = doctor.specialty;
    document.getElementById('modalDoctorRating').innerHTML = renderStars(doctor.rating);
    document.getElementById('modalDoctorAddress').textContent = doctor.address;
    document.getElementById('modalDoctorPhone').textContent = doctor.phone;
    document.getElementById('modalDoctorPrice').textContent = doctor.price;
    document.getElementById('modalDoctorHours').textContent = doctor.hours;

    modal.style.display = 'block';

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.onsubmit = (e) => {
        e.preventDefault();
        handleBooking(doctor);
    };
}

function handleBooking(doctor) {
    const patientName = document.getElementById('patientName').value;
    const patientPhone = document.getElementById('patientPhone').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const booking = {
        id: Date.now(),
        doctorId: doctor.id,
        doctorName: doctor.name,
        patientName,
        patientPhone,
        date: appointmentDate,
        time: appointmentTime,
        status: 'confirmed'
    };

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('تم تأكيد حجزك بنجاح!');
    document.getElementById('doctorModal').style.display = 'none';
    document.getElementById('bookingForm').reset();
}

if (window.location.pathname.includes('pharmacies.html')) {
    initPharmaciesPage();
}

function initPharmaciesPage() {
    const governorateFilter = document.getElementById('pharmacyGovernorateFilter');
    const pharmacySearch = document.getElementById('pharmacySearch');
    const openNowFilter = document.getElementById('openNowFilter');

    renderPharmacies(MOCK_PHARMACIES);

    governorateFilter.addEventListener('change', filterPharmacies);
    pharmacySearch.addEventListener('input', filterPharmacies);
    openNowFilter.addEventListener('change', filterPharmacies);

    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
        pharmacySearch.value = savedQuery;
        localStorage.removeItem('searchQuery');
        filterPharmacies();
    }
}

function filterPharmacies() {
    const governorate = document.getElementById('pharmacyGovernorateFilter').value;
    const search = document.getElementById('pharmacySearch').value.toLowerCase();
    const openNow = document.getElementById('openNowFilter').checked;

    const filtered = MOCK_PHARMACIES.filter(pharmacy => {
        const matchGovernorate = !governorate || pharmacy.governorate === governorate;
        const matchSearch = !search || pharmacy.name.toLowerCase().includes(search) ||
                           pharmacy.medicines.some(m => m.toLowerCase().includes(search));
        const matchOpen = !openNow || pharmacy.isOpen;
        return matchGovernorate && matchSearch && matchOpen;
    });

    renderPharmacies(filtered);
}

function renderPharmacies(pharmacies) {
    const grid = document.getElementById('pharmaciesGrid');
    if (!grid) return;

    if (pharmacies.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">لم يتم العثور على صيدليات</p>';
        return;
    }

    grid.innerHTML = pharmacies.map(pharmacy => `
        <div class="pharmacy-card">
            <div class="pharmacy-info">
                <h3>${pharmacy.name}</h3>
                <p class="address">${pharmacy.address}</p>
                <p>📱 ${pharmacy.phone}</p>
                <p>🕒 ${pharmacy.hours}</p>
                <span class="open-status ${pharmacy.isOpen ? 'open-now' : 'closed-now'}">
                    ${pharmacy.isOpen ? 'مفتوح الآن' : 'مغلق'}
                </span>
                <div class="pharmacy-medicines-list">
                    ${pharmacy.medicines.slice(0, 3).map(m =>
                        `<span class="medicine-tag">${m}</span>`
                    ).join('')}
                    ${pharmacy.medicines.length > 3 ? '<span class="medicine-tag">...</span>' : ''}
                </div>
                <div class="pharmacy-actions">
                    <button class="btn btn-primary btn-small" onclick="showPharmacyModal(${pharmacy.id})">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showPharmacyModal(pharmacyId) {
    const pharmacy = MOCK_PHARMACIES.find(p => p.id === pharmacyId);
    if (!pharmacy) return;

    const modal = document.getElementById('pharmacyModal');
    document.getElementById('modalPharmacyName').textContent = pharmacy.name;
    document.getElementById('modalPharmacyAddress').textContent = pharmacy.address;
    document.getElementById('modalPharmacyPhone').textContent = pharmacy.phone;
    document.getElementById('modalPharmacyHours').textContent = pharmacy.hours;

    const medicinesList = document.getElementById('modalMedicinesList');
    medicinesList.innerHTML = pharmacy.medicines.map(medicine =>
        `<div class="medicine-tag">${medicine}</div>`
    ).join('');

    modal.style.display = 'block';
}

if (window.location.pathname.includes('medicine.html')) {
    initMedicinePage();
}

function initMedicinePage() {
    const textSearchMethod = document.querySelector('[data-method="text"]');
    const imageSearchMethod = document.querySelector('[data-method="image"]');
    const textSearchBox = document.getElementById('textSearchBox');
    const imageSearchBox = document.getElementById('imageSearchBox');
    const medicineSearchBtn = document.getElementById('medicineSearchBtn');
    const medicineSearch = document.getElementById('medicineSearch');
    const medicineImage = document.getElementById('medicineImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const analyzeImageBtn = document.getElementById('analyzeImageBtn');
    const clearImageBtn = document.getElementById('clearImageBtn');

    textSearchMethod.addEventListener('click', () => {
        textSearchMethod.classList.add('active');
        imageSearchMethod.classList.remove('active');
        textSearchBox.style.display = 'flex';
        imageSearchBox.style.display = 'none';
    });

    imageSearchMethod.addEventListener('click', () => {
        imageSearchMethod.classList.add('active');
        textSearchMethod.classList.remove('active');
        textSearchBox.style.display = 'none';
        imageSearchBox.style.display = 'block';
    });

    medicineSearchBtn.addEventListener('click', searchMedicines);
    medicineSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchMedicines();
    });

    medicineImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                document.getElementById('imageUploadArea').style.display = 'none';
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    analyzeImageBtn.addEventListener('click', () => {
        const randomMedicine = MOCK_MEDICINES[Math.floor(Math.random() * MOCK_MEDICINES.length)];
        renderMedicines([randomMedicine]);
        alert(`تم التعرف على الدواء: ${randomMedicine.name}`);
    });

    clearImageBtn.addEventListener('click', () => {
        medicineImage.value = '';
        previewImage.src = '';
        document.getElementById('imageUploadArea').style.display = 'block';
        imagePreview.style.display = 'none';
    });

    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
        medicineSearch.value = savedQuery;
        localStorage.removeItem('searchQuery');
        searchMedicines();
    }
}

function searchMedicines() {
    const search = document.getElementById('medicineSearch').value.toLowerCase();

    const filtered = MOCK_MEDICINES.filter(medicine =>
        medicine.name.toLowerCase().includes(search) ||
        medicine.scientificName.toLowerCase().includes(search) ||
        medicine.use.toLowerCase().includes(search)
    );

    renderMedicines(filtered);
}

function renderMedicines(medicines) {
    const grid = document.getElementById('medicineResults');
    if (!grid) return;

    if (medicines.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">لم يتم العثور على أدوية</p>';
        return;
    }

    grid.innerHTML = medicines.map(medicine => `
        <div class="medicine-card">
            <div class="medicine-info">
                <h3>${medicine.name}</h3>
                <p class="medicine-scientific-name">${medicine.scientificName}</p>
                <p>${medicine.use}</p>
                <p class="price">${medicine.price} جنيه</p>
                <div class="medicine-actions">
                    <button class="btn btn-primary btn-small" onclick="showMedicineModal(${medicine.id})">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showMedicineModal(medicineId) {
    const medicine = MOCK_MEDICINES.find(m => m.id === medicineId);
    if (!medicine) return;

    const modal = document.getElementById('medicineModal');
    document.getElementById('modalMedicineName').textContent = medicine.name;
    document.getElementById('modalMedicineScientific').textContent = medicine.scientificName;
    document.getElementById('modalMedicineUse').textContent = medicine.use;
    document.getElementById('modalMedicineDose').textContent = medicine.dose;
    document.getElementById('modalMedicinePrice').textContent = medicine.price;
    document.getElementById('modalMedicineCompany').textContent = medicine.company;

    const pharmaciesList = document.getElementById('modalMedicinePharmacies');
    const availablePharmacies = MOCK_PHARMACIES.filter(p =>
        medicine.pharmacies.includes(p.id)
    );

    pharmaciesList.innerHTML = availablePharmacies.map(pharmacy => `
        <div class="pharmacy-list-item">
            <h4>${pharmacy.name}</h4>
            <p>${pharmacy.address}</p>
            <p>📱 ${pharmacy.phone}</p>
        </div>
    `).join('');

    modal.style.display = 'block';
}

const closeModalButtons = document.querySelectorAll('.close-modal');
closeModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

if (window.location.pathname.includes('register.html')) {
    initRegisterPage();
}

function initRegisterPage() {
    const userTypeBtns = document.querySelectorAll('.user-type-btn');
    const userTypeInput = document.getElementById('userType');
    const professionalFields = document.getElementById('professionalFields');
    const registerForm = document.getElementById('registerForm');

    userTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            userTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const userType = btn.dataset.type;
            userTypeInput.value = userType;

            if (userType === 'doctor' || userType === 'pharmacist') {
                professionalFields.style.display = 'block';
                document.getElementById('specialty').required = true;
                document.getElementById('governorate').required = true;
                document.getElementById('address').required = true;
                document.getElementById('licenseNumber').required = true;
            } else {
                professionalFields.style.display = 'none';
                document.getElementById('specialty').required = false;
                document.getElementById('governorate').required = false;
                document.getElementById('address').required = false;
                document.getElementById('licenseNumber').required = false;
            }
        });
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('كلمتا المرور غير متطابقتين');
            return;
        }

        if (password.length < 6) {
            alert('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            return;
        }

        const agreeTerms = document.getElementById('agreeTerms').checked;
        if (!agreeTerms) {
            alert('يجب الموافقة على الشروط والأحكام');
            return;
        }

        const userData = {
            name: document.getElementById('registerName').value,
            email: document.getElementById('registerEmail').value,
            phone: document.getElementById('registerPhone').value,
            password: password,
            userType: userTypeInput.value
        };

        if (userTypeInput.value === 'doctor' || userTypeInput.value === 'pharmacist') {
            userData.specialty = document.getElementById('specialty').value;
            userData.governorate = document.getElementById('governorate').value;
            userData.address = document.getElementById('address').value;
            userData.licenseNumber = document.getElementById('licenseNumber').value;
        }

        localStorage.setItem('currentUser', JSON.stringify(userData));

        alert('تم التسجيل بنجاح!');
        window.location.href = 'dashboard.html';
    });
}

if (window.location.pathname.includes('login.html')) {
    initLoginPage();
}

function initLoginPage() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const demoUser = {
            name: 'مستخدم تجريبي',
            email: email,
            userType: 'patient'
        };

        localStorage.setItem('currentUser', JSON.stringify(demoUser));

        alert('تم تسجيل الدخول بنجاح!');
        window.location.href = 'dashboard.html';
    });
}

if (window.location.pathname.includes('dashboard.html')) {
    initDashboard();
}

function initDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('يجب تسجيل الدخول أولاً');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('userName').textContent = currentUser.name;

    const userRoleMap = {
        patient: 'مريض',
        doctor: 'طبيب',
        pharmacist: 'صيدلي'
    };

    document.getElementById('userRole').textContent = userRoleMap[currentUser.userType] || 'مستخدم';

    const patientDashboard = document.getElementById('patientDashboard');
    const doctorDashboard = document.getElementById('doctorDashboard');
    const pharmacistDashboard = document.getElementById('pharmacistDashboard');

    if (currentUser.userType === 'patient') {
        patientDashboard.style.display = 'block';
        initPatientDashboard();
    } else if (currentUser.userType === 'doctor') {
        doctorDashboard.style.display = 'block';
        initDoctorDashboard();
    } else if (currentUser.userType === 'pharmacist') {
        pharmacistDashboard.style.display = 'block';
        initPharmacistDashboard();
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            alert('تم تسجيل الخروج بنجاح');
            window.location.href = 'index.html';
        });
    }
}

function initPatientDashboard() {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    document.getElementById('upcomingAppointments').textContent = bookings.length;
    document.getElementById('pastAppointments').textContent = '0';
    document.getElementById('savedMedicines').textContent = '0';

    const appointmentsList = document.getElementById('patientAppointments');

    if (bookings.length === 0) {
        appointmentsList.innerHTML = '<p>لا توجد مواعيد محجوزة</p>';
    } else {
        appointmentsList.innerHTML = bookings.map(booking => `
            <div class="appointment-item">
                <h4>موعد مع ${booking.doctorName}</h4>
                <p>التاريخ: ${booking.date}</p>
                <p>الوقت: ${booking.time}</p>
                <span class="status-badge status-confirmed">مؤكد</span>
            </div>
        `).join('');
    }
}

function initDoctorDashboard() {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    document.getElementById('todayAppointments').textContent = bookings.length;
    document.getElementById('totalPatients').textContent = bookings.length;

    const appointmentsList = document.getElementById('doctorAppointments');

    if (bookings.length === 0) {
        appointmentsList.innerHTML = '<p>لا توجد مواعيد اليوم</p>';
    } else {
        appointmentsList.innerHTML = bookings.map(booking => `
            <div class="appointment-item">
                <h4>المريض: ${booking.patientName}</h4>
                <p>التاريخ: ${booking.date}</p>
                <p>الوقت: ${booking.time}</p>
                <p>الهاتف: ${booking.patientPhone}</p>
                <span class="status-badge status-confirmed">مؤكد</span>
            </div>
        `).join('');
    }

    const reviewsList = document.getElementById('doctorReviews');
    reviewsList.innerHTML = `
        <div class="review-item">
            <h4>أحمد محمد</h4>
            <div class="rating">${renderStars(5)}</div>
            <p>طبيب ممتاز ومتعاون</p>
        </div>
        <div class="review-item">
            <h4>فاطمة علي</h4>
            <div class="rating">${renderStars(4.5)}</div>
            <p>تجربة رائعة، أنصح بالتعامل معه</p>
        </div>
    `;

    const clinicSettingsForm = document.getElementById('clinicSettingsForm');
    clinicSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم حفظ الإعدادات بنجاح');
    });
}

function initPharmacistDashboard() {
    const pharmacyMedicines = JSON.parse(localStorage.getItem('pharmacyMedicines') || '[]');

    const available = pharmacyMedicines.filter(m => m.available).length;
    const outOfStock = pharmacyMedicines.filter(m => !m.available).length;

    document.getElementById('availableMedicines').textContent = available;
    document.getElementById('outOfStockMedicines').textContent = outOfStock;
    document.getElementById('todayOrders').textContent = '0';

    renderPharmacyMedicines();

    const addMedicineBtn = document.getElementById('addMedicineBtn');
    const addMedicineModal = document.getElementById('addMedicineModal');
    const addMedicineForm = document.getElementById('addMedicineForm');

    addMedicineBtn.addEventListener('click', () => {
        addMedicineModal.style.display = 'block';
    });

    addMedicineForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const medicine = {
            id: Date.now(),
            name: document.getElementById('newMedicineName').value,
            price: document.getElementById('newMedicinePrice').value,
            quantity: document.getElementById('newMedicineQuantity').value,
            available: document.getElementById('newMedicineAvailable').checked
        };

        pharmacyMedicines.push(medicine);
        localStorage.setItem('pharmacyMedicines', JSON.stringify(pharmacyMedicines));

        addMedicineModal.style.display = 'none';
        addMedicineForm.reset();

        initPharmacistDashboard();
    });

    const pharmacySettingsForm = document.getElementById('pharmacySettingsForm');
    pharmacySettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم حفظ الإعدادات بنجاح');
    });
}

function renderPharmacyMedicines() {
    const pharmacyMedicines = JSON.parse(localStorage.getItem('pharmacyMedicines') || '[]');
    const container = document.getElementById('pharmacyMedicines');

    if (pharmacyMedicines.length === 0) {
        container.innerHTML = '<p>لا توجد أدوية مضافة بعد</p>';
        return;
    }

    container.innerHTML = pharmacyMedicines.map(medicine => `
        <div class="medicine-item">
            <h4>${medicine.name}</h4>
            <p>السعر: ${medicine.price} جنيه</p>
            <p>الكمية: ${medicine.quantity}</p>
            <span class="status-badge ${medicine.available ? 'status-available' : 'status-out-of-stock'}">
                ${medicine.available ? 'متوفر' : 'غير متوفر'}
            </span>
        </div>
    `).join('');
}
