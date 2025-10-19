/* Bagian JavaScript untuk Fungsionalitas */
const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        // Logika untuk mencegah operator ganda (optional enhancement)
        const lastChar = display.value.slice(-1);
        const isOperator = (char) => ['+', '-', '*', '/'].includes(char);
        
        if (isOperator(lastChar) && isOperator(value)) {
            // Ganti operator terakhir jika operator baru dimasukkan
            display.value = display.value.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculateResult() {
    try {
        // Menggunakan eval() untuk evaluasi ekspresi (perlu hati-hati, tapi OK untuk proyek sederhana)
        let expression = display.value;
        const result = eval(expression);
        
        if (isFinite(result)) {
            // Batasi desimal dan pastikan tampilan rapi
            display.value = parseFloat(result.toFixed(10));
        } else {
             display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}