// MENU MOBILE

function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}


// TUTUP MENU SAAT LINK DIKLIK

document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {

        const menu = document.getElementById("navMenu");

        if (menu) {
            menu.classList.remove("show");
        }

    });
});


// PESAN BERITA

function showNews() {
    alert(
        "Kegiatan gotong royong dilaksanakan bersama pemerintah desa dan masyarakat untuk menjaga kebersihan serta meningkatkan kepedulian terhadap lingkungan."
    );
}


// FORM KONTAK

function sendMessage(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;

    if (
        nama === "" ||
        email === "" ||
        subjek === "" ||
        pesan === ""
    ) {
        alert("Silakan lengkapi semua data.");
        return;
    }

    alert(
        "Terima kasih " + nama +
        "! Pesan Anda berhasil disiapkan."
    );

    document.querySelector(".contact-form").reset();
}


// ANIMASI SAAT SCROLL

const elements = document.querySelectorAll(
    ".stat, .vision-card, .potential-card, .news-card, .contact-item"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});
