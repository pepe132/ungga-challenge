const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;

// Regex para extraer un número de teléfono (ajusta según el formato esperado)
// Esta regex es para un formato general de 10 dígitos. 
// Puede que necesites ajustarla para adaptarla a formatos específicos de tu región.
const phoneRegex = /\b\d{10}\b/;

// Regex para extraer una fecha (ajustar según el formato de fecha esperado)
// Esta regex es básica y puede necesitar ajustes.
const dateRegex = /\b\d{1,2} de \w+|\d{1,2}\/\d{1,2}\/\d{4}\b/;

// Regex para extraer un nombre puede ser más complicado. 
// Aquí hay un intento simple, pero puede que necesites ajustarlo.
const nameRegex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/; 

export const extractInfoFromMessage = (text:any) => {
    const email = text.match(emailRegex) ? text.match(emailRegex)[0] : null;
    const phoneNumber = text.match(phoneRegex) ? text.match(phoneRegex)[0] : null;
    const dateString = text.match(dateRegex) ? text.match(dateRegex)[0] : null;
    let dateObject = null;

    if (dateString) {
        const parts = dateString.split('/');
        dateObject = new Date(parts[2], parts[1] - 1, parts[0]);
    }
    const nameMatch = text.match(nameRegex);
    const name = nameMatch ? nameMatch[0] : null;
    return { extractedName: name, extractedEmail: email, extractedPhone: phoneNumber, extractedDate: dateObject };
};
