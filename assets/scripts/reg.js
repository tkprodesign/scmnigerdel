// Data structure for Provinces and Dioceses
const provinceData = {
    "ABA PROVINCE": [
        "Aba", "Aba Ngwa North", "Arochukwu/Ohafia", "Ikwuano", "Isiala Ngwa", 
        "Isiala Ngwa South", "Isuikwuato/Umunneochi", "Ukwa", "Umuahia"
    ],
    "ABUJA PROVINCE": [
        "Abuja", "Gboko", "Gwagwalada", "Kafanchan", "Kazi-Biam", 
        "Kubwa", "Kwoi", "Lafia", "Makurdi", "Otukpo", "Zonkwa"
    ],
    "BENDEL PROVINCE": [
        "Akoko-Edo", "Asaba", "Benin", "Esan", "Etsako", "Ika", 
        "Ndokwa", "Oleh", "Sabongibba-Ora", "Sapele", "Ughelli", 
        "Warri", "Western Izon"
    ],
    "ENUGU PROVINCE": [
        "Abakaliki", "Afikpo", "Awgu/Aninri", "Eha-Amufu", "Enugu", 
        "Enugu North", "Ikwo", "Ngbo", "Nike", "Nsukka", "Oji River", 
        "Udi"
    ],
    "IBADAN PROVINCE": [
        "Ajayi Crowther", "Ibadan", "Ibadan North", "Ibadan South", "Ife", 
        "Ife East", "Ijesa North", "Ijesa North East", "Ilesa", 
        "Ilesa South West", "Ogbomoso", "Oke Ogun", "Oke-Osun", "Osun", 
        "Osun North", "Osun North East", "Oyo"
    ],
    "JOS PROVINCE": [
        "Bauchi", "Bukuru", "Damaturu", "Gombe", "Jalingo", 
        "Jos", "Langtang", "Maiduguri", "Pankshin", "Yola"
    ],
    "KADUNA PROVINCE": [
        "Bari", "Dutse", "Gusau", "Ikara", "Kaduna", 
        "Kano", "Katsina", "Kebbi", "Sokoto", "Wusasa", "Zaria"
    ],
    "KWARA PROVINCE": [
        "Ekiti Kwara", "Igbomina", "Igbomina West", "Jebba", "Kwara", 
        "New Bussa", "Offa", "Omu-Aran"
    ],
    "LAGOS PROVINCE": [
        "Awori", "Badagry", "Egba", "Egba West", "Ifo", 
        "Ijebu", "Ijebu North", "Ijebu South West", "Lagos", 
        "Lagos Mainland", "Lagos West", "Remo", "Yewa"
    ],
    "LOKOJA PROVINCE": [
        "Bida", "Doko", "Idah", "Ijumu", "Kabba", 
        "Kontagora", "Kutigi", "Lokoja", "Minna", "Ogorimagongo", "Okene"
    ],
    "NIGER DELTA PROVINCE": [
        "Ahoada", "Calabar", "Etche", "Evo", "Ikwerre", 
        "Niger Delta", "Niger Delta North", "Niger Delta West", 
        "Northern Izon", "Ogbia", "Ogoni", "Okrika", "Uyo"
    ],
    "ONDO PROVINCE": [
        "Akoko", "Akure", "Ekiti", "Ekiti Oke", "Ekiti West", 
        "Idoani", "Ilaje", "Ile-Oluji", "Irele Ese Odo", 
        "On the Coast", "Ondo", "Owo"
    ],
    "OF THE NIGER PROVINCE": [
        "Aguata", "Amichi", "Awka", "Ihiala", "Mbamili", 
        "Niger West", "Nnewi", "Ogbaru", "On the Niger"
    ],
    "OWERRI PROVINCE": [
        "Egbu", "Ideato", "Ikeduru", "Isi Mbano", "Mbaise", 
        "Ohaji/Egbema", "Okigwe", "Okigwe-South", "On the Lake", 
        "Orlu", "Oru", "Owerri"
    ],
    "CONNAM PROVINCE": ["CONNAM"],
    "SECRETARIAT": ["Secretariat"],
    "INSTITUTIONS": ["Institutions"]
};

// Populate the Province select dropdown
const provinceSelect = document.getElementById('provinceInput');
const dioceseSelect = document.getElementById('dioceseInput');

Object.keys(provinceData).forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
});

// Update Diocese dropdown based on selected Province
provinceSelect.addEventListener('change', () => {
    const selectedProvince = provinceSelect.value;
    const dioceses = provinceData[selectedProvince] || [];

    // Clear previous options
    dioceseSelect.innerHTML = '';

    // Populate new options
    dioceses.forEach(diocese => {
        const option = document.createElement('option');
        option.value = diocese;
        option.textContent = diocese;
        dioceseSelect.appendChild(option);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.group');
    const steps = document.querySelectorAll('.steps .step');
    let currentGroup = 0;

    function showGroup(index) {
        groups.forEach((group, i) => {
            group.style.display = i === index ? 'block' : 'none';
            steps[i]?.classList.toggle('active', i === index);
        });
    }

    document.querySelectorAll('.next').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentGroup < groups.length - 1) {
                currentGroup++;
                showGroup(currentGroup);
            }
        });
    });

    document.querySelectorAll('.previous').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentGroup > 0) {
                currentGroup--;
                showGroup(currentGroup);
            }
        });
    });

    // Show the initial group
    showGroup(currentGroup);
});
