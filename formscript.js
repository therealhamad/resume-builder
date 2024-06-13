function createResume() {
    const form = document.getElementById('resumeForm');
    const resultContainer = document.getElementById('resultContainer');
    const resumePreview = document.getElementById('resumePreview');

    const jobTitle = form.jobTitle.value;
    const name = form.name.value;
    const email = form.email.value;
    const city = form.city.value;
    const country = form.country.value;
    const address = form.address.value;
    const summary = form.summary.value;

    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>${jobTitle}</p>
        <p>${email}</p>
        <p>${city}, ${country}</p>
        <p>${address}</p>
        <p>${summary}</p>
    `;

    resultContainer.classList.remove('hidden');
    window.location.href = 'final.html';

}

function downloadPDF() {
    alert("PDF download functionality is not implemented yet.");
}

function shareVia() {
    alert("Share via functionality is not implemented yet.");
}
