// Dataset de máquinas de coser
const DATA = {
    coverstyle: {
        tipo: 'Tapacostura Familiar',
        hilos: 'de 4 hilos',
        guia1: 'Sí',
        guia2: 'Sí',
        rpm: '1200',
        area: '100 x 75 mm',
        largo: 'regulable de 1 a 4 mm',
        dif: 'ajustable de 0,5 a 2,0 mm',
        seg: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        motor: 'De 100w de potencia',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Sí',
        acc: 'Sí'
    },
    over8707: {
        tipo: 'Remalladora Familiar',
        hilos: 'de 3 o 4 hilos',
        guia: 'Sí',
        rpm: '1300',
        puntada: '(Overlock, Puntada enrollada, Flatlock, etc.)',
        corte: 'de 5 a 7 mm',
        cuchilla: 'Sí',
        diferencial: 'de 0,7 a 2 mm',
        led: 'Sí',
        prensatelas: 'Sí',
        brazo: 'Sí',
        motor: 'De 100w con sistema de ventilación',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Sí',
        acc: 'Sí',
        basura: 'No'
    },
    over8708: {
        tipo: 'Remalladora Familiar',
        hilos: 'de 3 o 4 hilos',
        guia: 'Sí',
        rpm: '1300',
        puntada: '(Overlock, Puntada enrollada, Flatlock, etc.)',
        corte: 'de 5 a 7 mm',
        cuchilla: 'Sí',
        diferencial: 'de 0,7 a 2 mm',
        led: 'Sí',
        prensatelas: 'Sí',
        brazo: 'Sí',
        motor: 'De 100w con sistema de ventilación',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Sí',
        acc: 'Sí',
        basura: 'Sí'
    },
    Zart: {
        tipo: 'Familiar Electrónica',
        puntadas: '404 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Electrónico',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Rotativo hecho de plástico',
        motor: 'Silencioso de 25w',
        portaconos: 'No',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'Sí'
    },
    style20: {
        tipo: 'Familiar Mecánica',
        puntadas: '10 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    style30: {
        tipo: 'Familiar Mecánica',
        puntadas: '19 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    style40: {
        tipo: 'Familiar Mecánica',
        puntadas: '31 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    style20up: {
        tipo: 'Familiar Mecánica',
        puntadas: '12 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    style30up: {
        tipo: 'Familiar Mecánica',
        puntadas: '23 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    style40up: {
        tipo: 'Familiar Mecánica',
        puntadas: '34 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    practik1: {
        tipo: 'Familiar Mecánica',
        puntadas: '10 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    practik5: {
        tipo: 'Familiar Mecánica',
        puntadas: '12 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    practik7: {
        tipo: 'Familiar Mecánica',
        puntadas: '23 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    practik9: {
        tipo: 'Familiar Mecánica',
        puntadas: '34 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    petit: {
        tipo: 'Familiar Mecánica',
        puntadas: '9 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'No',
        estructura: 'Sí',
        mprensatelas: 'Hecho de plástico',
        acc: 'Sí',
        mesa: 'No'
    },
    next840: {
        tipo: 'Familiar Mecánica',
        puntadas: '34 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de plástico',
        acc: 'Sí',
        mesa: 'No'
    },
    next830: {
        tipo: 'Familiar Mecánica',
        puntadas: '19 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    next100: {
        tipo: 'Familiar Electrónica',
        puntadas: '100 Puntadas',
        enhebrador: 'Sí',
        ojal: 'En 1 paso',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Electrónico',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Rotativo hecho de plástico',
        motor: 'Silencioso de 25w',
        portaconos: 'No',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'Sí'
    },
    next40: {
        tipo: 'Familiar Mecánica',
        puntadas: '34 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico antideslizante',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Silencioso de 25w',
        portaconos: 'Sí',
        estructura: 'Sí',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    },
    Denim: {
        tipo: 'Familiar Mecánica',
        puntadas: '31 Puntadas',
        enhebrador: 'No',
        ojal: 'En 4 pasos',
        telas: 'Telas de todo tipo, excepto cuero.',
        devanador: 'Sí',
        led: 'Sí',
        prensatelas: 'Sí',
        selector: 'Mecánico',
        brazo: 'Sí',
        chapa: 'Sí',
        crochet: 'Hecho de metal',
        motor: 'Potente de 45w',
        portaconos: 'Sí',
        estructura: 'Todo incluido engranajes',
        mprensatelas: 'Hecho de metal',
        acc: 'Sí',
        mesa: 'No'
    }
};

// Configuración de campos por tipo de máquina
const MACHINE_TYPES = {
    // Mecánica/Electrónica
    mecanica: {
        sections: [
            {
                title: 'Información General',
                fields: [
                    { label: 'Tipo de máquina', key: 'tipo' },
                    { label: 'Cantidad de puntadas', key: 'puntadas' },
                    { label: 'Enhebrador automático', key: 'enhebrador' },
                    { label: 'Tipo De Ojal', key: 'ojal' },
                    { label: 'Materiales compatibles', key: 'telas' },
                    { label: 'Devanador automático', key: 'devanador' }
                ]
            },
            {
                title: 'Detalles que marcan la diferencia',
                fields: [
                    { label: 'Luz led incluida', key: 'led' },
                    { label: 'Doble altura de prensatelas', key: 'prensatelas' },
                    { label: 'Tipo de selector de puntadas', key: 'selector' },
                    { label: 'Brazo libre', key: 'brazo' },
                    { label: 'Guías en la chapa aguja', key: 'chapa' }
                ]
            },
            {
                title: 'Estructura interna',
                fields: [
                    { label: 'Tipo de lanzadera', key: 'crochet' },
                    { label: 'Motor', key: 'motor' },
                    { label: 'Porta Conos De Metal', key: 'portaconos' },
                    { label: 'Interior hecho de metal', key: 'estructura' },
                    { label: 'Enganche de prensatelas', key: 'mprensatelas' }
                ]
            },
            {
                title: 'Accesorios incluidos',
                fields: [
                    { label: 'Pedal y otros accesorios', key: 'acc' },
                    { label: 'Mesa extensible incluida', key: 'mesa' }
                ]
            }
        ]
    },
    // Remalladora
    remalladora: {
        sections: [
            {
                title: 'Información General',
                fields: [
                    { label: 'Tipo de máquina', key: 'tipo' },
                    { label: 'Sistema de hilos', key: 'hilos' },
                    { label: 'Guía de enhebrado en español', key: 'guia' },
                    { label: 'Velocidad de costura', key: 'rpm' },
                    { label: 'Configuraciones de puntada', key: 'puntada' },
                    { label: 'Distancia de corte', key: 'corte' },
                    { label: 'Cuchilla retráctil', key: 'cuchilla' },
                    { label: 'Transporte diferencial', key: 'diferencial' },
                    { label: 'Regulación de tensión de hilo', key: 'tension' },
                    { label: 'Largo de puntada', key: 'largo' }
                ]
            },
            {
                title: 'Detalles que marcan la diferencia',
                fields: [
                    { label: 'Luz led incluida', key: 'led' },
                    { label: 'Doble altura de prensatelas', key: 'prensatelas' },
                    { label: 'Brazo libre', key: 'brazo' }
                ]
            },
            {
                title: 'Estructura interna',
                fields: [
                    { label: 'Motor', key: 'motor' },
                    { label: 'Porta Conos De Metal', key: 'portaconos' },
                    { label: 'Interior hecho de metal', key: 'estructura' },
                    { label: 'Enganche de prensatelas', key: 'mprensatelas' }
                ]
            },
            {
                title: 'Accesorios incluidos',
                fields: [
                    { label: 'Pedal y otros accesorios', key: 'acc' },
                    { label: 'Depósito de residuos incluido', key: 'basura' }
                ]
            }
        ]
    },
    // Tapacostura
    tapacostura: {
        sections: [
            {
                title: 'Información General',
                fields: [
                    { label: 'Tipo de máquina', key: 'tipo' },
                    { label: 'Sistema de agujas', key: 'aguja' },
                    { label: 'Sistema de hilos', key: 'hilos' },
                    { label: 'Guía de enhebrado en español', key: 'guia1' },
                    { label: 'Guía de combinaciones posibles', key: 'guia2' },
                    { label: 'Velocidad de costura', key: 'rpm' },
                    { label: 'Área de trabajo', key: 'area' },
                    { label: 'Largo de puntada', key: 'largo' },
                    { label: 'Transporte diferencial', key: 'dif' },
                    { label: 'Sistema de seguridad', key: 'seg' }
                ]
            },
            {
                title: 'Detalles que marcan la diferencia',
                fields: [
                    { label: 'Doble luz led incluida', key: 'led' },
                    { label: 'Doble altura de prensatelas', key: 'prensatelas' }
                ]
            },
            {
                title: 'Estructura interna',
                fields: [
                    { label: 'Motor', key: 'motor' },
                    { label: 'Porta Conos De Metal', key: 'portaconos' },
                    { label: 'Interior hecho de metal', key: 'estructura' },
                    { label: 'Enganche de prensatelas', key: 'mprensatelas' }
                ]
            },
            {
                title: 'Accesorios incluidos',
                fields: [
                    { label: 'Pedal y otros accesorios', key: 'acc' }
                ]
            }
        ]
    }
};

// Variables globales para las máquinas seleccionadas
let selectedMachines = [null, null, null];

/**
 * Función para detectar el tipo de máquina basado en las características
 */
function detectMachineType(machineData) {
    const tipo = machineData.tipo.toLowerCase();
    
    if (tipo.includes('tapacostura')) {
        return 'tapacostura';
    } else if (tipo.includes('remalladora')) {
        return 'remalladora';
    } else {
        return 'mecanica'; // Por defecto mecánica/electrónica
    }
}

/**
 * Función para obtener el nombre de imagen correcto basado en los archivos disponibles
 */
function getImageFileName(key) {
    const imageMap = {
        'Denim': 'Familiar-Alfa-Denim',
        'next40': 'Familiar-Alfa-Next-40',
        'next100': 'Familiar-Alfa-Next-100',
        'next830': 'Familiar-Alfa-Next-830',
        'next840': 'Familiar-Alfa-Next-840',
        'petit': 'Familiar-Alfa-Petit',
        'practik1': 'Familiar-Alfa-Practik-1',
        'practik5': 'Familiar-Alfa-Practik-5',
        'practik7': 'Familiar-Alfa-Practik-7',
        'practik9': 'Familiar-Alfa-Practik-9',
        'style20': 'Familiar-Alfa-Style-20',
        'style30': 'Familiar-Alfa-Style-30',
        'style40': 'Familiar-Alfa-Style-40',
        'style20up': 'Familiar-Alfa-Style-up-20',
        'style30up': 'Familiar-Alfa-Style-up-30',
        'style40up': 'Familiar-Alfa-Style-up-40',
        'Zart': 'Familiar-Alfa-Zart',
        'over8707': 'Remalladora-Alfa-Overlock-8707',
        'over8708': 'Remalladora-Alfa-Overlock-8708',
        'coverstyle': 'Tapacostura-Alfa-Cover-Style'
    };
    
    return imageMap[key] || key;
}

/**
 * Función para obtener el nombre formateado de la máquina para mostrar en el selector
 */
function getMachineName(key) {
    const nameMap = {
        'coverstyle': 'CoverStyle',
        'over8707': 'Overlock 8707',
        'over8708': 'Overlock 8708',
        'Zart': 'Zart',
        'style20': 'Style 20',
        'style30': 'Style 30',
        'style40': 'Style 40',
        'style20up': 'Style 20 UP',
        'style30up': 'Style 30 UP',
        'style40up': 'Style 40 UP',
        'practik1': 'Praktik 1',
        'practik5': 'Praktik 5',
        'practik7': 'Praktik 7',
        'practik9': 'Praktik 9',
        'petit': 'Petit',
        'next840': 'Next 840',
        'next830': 'Next 830',
        'next100': 'Next 100',
        'next40': 'Next 40',
        'Denim': 'Denim'
    };
    
    return nameMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

/**
 * Función para formatear valores según el tipo - Compatible con CSS existente
 */
function formatValue(value) {
    if (!value || value === '' || value === null || value === undefined) {
        return '—';
    }
    
    if (value === 'Sí' || value === 'Si') {
        return '<span class="comparador-yes">Sí</span>';
    } else if (value === 'No') {
        return '<span class="comparador-no">No</span>';
    }
    
    return value;
}

/**
 * FUNCIÓN CLAVE: Calcular la altura máxima de cada sección
 * Para alinear los títulos, cada sección debe tener la misma altura
 */
function calculateSectionHeights(validMachines) {
    const sectionHeights = new Map();
    
    // Calcular cuántas especificaciones tiene cada máquina por sección
    validMachines.forEach(machine => {
        const machineType = detectMachineType(machine.data);
        const machineConfig = MACHINE_TYPES[machineType];
        
        machineConfig.sections.forEach(section => {
            // Contar solo las especificaciones que tienen valor
            const visibleFields = section.fields.filter(field => {
                const value = machine.data[field.key];
                return value !== undefined && value !== null && value !== '';
            });
            
            const currentHeight = visibleFields.length;
            const existingHeight = sectionHeights.get(section.title) || 0;
            
            // Guardar la altura máxima para esta sección
            sectionHeights.set(section.title, Math.max(existingHeight, currentHeight));
        });
    });
    
    return sectionHeights;
}

/**
 * FUNCIÓN PRINCIPAL MEJORADA: Generar comparación con títulos alineados
 */
function generateComparison() {
    const comparisonContent = document.getElementById('comparison-content');
    
    if (!comparisonContent) {
        console.error('No se encontró el elemento comparison-content');
        return;
    }
    
    // Obtener máquinas seleccionadas válidas
    const validMachines = selectedMachines
        .map((key, index) => key && DATA[key] ? { key, index, data: DATA[key] } : null)
        .filter(machine => machine !== null);
    
    if (validMachines.length === 0) {
        comparisonContent.innerHTML = '<p class="comparador-empty">Selecciona al menos una máquina para comparar</p>';
        return;
    }
    
    // PASO 1: Calcular las alturas máximas de cada sección para alinear títulos
    const sectionHeights = calculateSectionHeights(validMachines);
    
    let html = '';
    
    // PASO 2: Generar cada máquina con espacios en blanco para alinear títulos
    validMachines.forEach((machine, machineIndex) => {
        const machineType = detectMachineType(machine.data);
        const machineConfig = MACHINE_TYPES[machineType];
        
        html += `<div class="comparador-machine-column">`;
        
        // Generar cada sección
        machineConfig.sections.forEach(section => {
            html += `
                <div class="comparador-section">
                    <h3 class="comparador-section-title">${section.title}</h3>
                    <div class="comparador-specs-list">
            `;
            
            // Contar especificaciones visibles
            let visibleCount = 0;
            
            // Generar especificaciones que tienen valor
            section.fields.forEach(field => {
                const value = machine.data[field.key];
                if (value !== undefined && value !== null && value !== '') {
                    html += `
                        <div class="comparador-spec-item">
                            <div class="comparador-feature-label">${field.label}</div>
                            <div class="comparador-feature-value">${formatValue(value)}</div>
                        </div>
                    `;
                    visibleCount++;
                }
            });
            
            // PASO 3: Agregar espacios en blanco para igualar la altura máxima
            const maxHeight = sectionHeights.get(section.title) || 0;
            const spacersNeeded = maxHeight - visibleCount;
            
            for (let i = 0; i < spacersNeeded; i++) {
                html += `
                    <div class="comparador-spec-item comparador-spacer">
                        <div class="comparador-feature-value">—</div>
                    </div>
                `;
            }
            
            html += '</div></div>';
        });
        
        html += '</div>';
    });
    
    comparisonContent.innerHTML = `<div class="comparador-columns-container">${html}</div>`;
}

/**
 * Función para inicializar los selectores con las opciones de máquinas
 */
function initializeSelectors() {
    const selectors = ['machine1', 'machine2', 'machine3'];
    
    selectors.forEach(selectorId => {
        const select = document.getElementById(selectorId);
        
        if (!select) {
            console.error(`No se encontró el selector: ${selectorId}`);
            return;
        }
        
        // Limpiar opciones existentes excepto la primera
        select.innerHTML = '<option value="">Selecciona una máquina</option>';
        
        // Agregar opciones para cada máquina
        Object.keys(DATA).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = getMachineName(key);
            select.appendChild(option);
        });
        
        // Agregar event listener para cambios
        select.addEventListener('change', function() {
            const index = selectors.indexOf(selectorId);
            handleMachineSelection(index, this.value);
        });
    });
}

/**
 * Función para manejar la selección de una máquina
 */
function handleMachineSelection(slotIndex, machineKey) {
    selectedMachines[slotIndex] = machineKey || null;
    
    // Actualizar imagen y nombre
    const imageElement = document.getElementById(`image${slotIndex + 1}`);
    const placeholderElement = document.getElementById(`placeholder${slotIndex + 1}`);
    const nameElement = document.getElementById(`name${slotIndex + 1}`);
    
    if (machineKey && DATA[machineKey]) {
        // Mostrar imagen y nombre usando el nombre correcto del archivo
        const imageFileName = getImageFileName(machineKey);
        imageElement.src = `../Multimedia/Página Web/Fotos Pagina Familiares/${imageFileName}.png`;
        imageElement.classList.remove('comparador-hidden');
        placeholderElement.classList.add('comparador-hidden');
        nameElement.textContent = getMachineName(machineKey);
    } else {
        // Mostrar placeholder
        imageElement.classList.add('comparador-hidden');
        placeholderElement.classList.remove('comparador-hidden');
        nameElement.textContent = '';
    }
    
    // Regenerar comparación con alineación perfecta
    generateComparison();
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando comparador...');
    initializeSelectors();
    generateComparison();
    console.log('Comparador inicializado correctamente');
});