function downloadPDF() {
    var element = document.getElementById('contentToDownload');
    
    html2canvas(element).then(canvas => {    
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        var imgData = canvas.toDataURL('image/png');
                
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adapte as dimensões conforme necessário

        pdf.save('organizadorFinanceiro.pdf');
    });
}