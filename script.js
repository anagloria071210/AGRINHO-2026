// script.js - Gera a página AgroSustentável dinamicamente no navegador

const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>AgroSustentável</title>

<style>
/* ===================== CSS ORIGINAL (WeasyPrint adaptado) ===================== */

@page {
    size: A4;
    margin: 15mm 12mm;
    background-color: #f7f9f6;
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.5;
    color: #2d3748;
    background-color: #f7f9f6;
}

/* HERO */
.hero-banner {
    margin: -15mm -12mm 20px -12mm;
    padding: 25px 12mm;
    background-color: #1b4332;
    color: #fff;
    border-bottom: 5px solid #b07d62;
}

.hero-title {
    font-size: 20pt;
    font-weight: bold;
    text-transform: uppercase;
}

.hero-subtitle {
    font-size: 11pt;
    color: #d8f3dc;
    font-style: italic;
}

/* TEXTOS */
h2 {
    font-size: 13pt;
    color: #1b4332;
    border-left: 4px solid #b07d62;
    padding-left: 8px;
}

p {
    text-align: justify;
    margin: 0 0 10px 0;
}

.intro-text {
    font-size: 10.5pt;
    color: #4a5568;
}

/* CARDS */
.stat-box {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-top: 3px solid #2d6a4f;
    padding: 10px;
    text-align: center;
}

.stat-value {
    font-size: 18pt;
    font-weight: bold;
    color: #2d6a4f;
}

.alert-box {
    background: #fff5f5;
    border-left: 4px solid #e53e3e;
    padding: 10px;
}

.solution-box {
    background: #f0fff4;
    border-left: 4px solid #38a169;
    padding: 10px;
}

/* FOOTER */
.footer-banner {
    margin-top: 30px;
    padding: 15px;
    background: #1b4332;
    color: white;
    text-align: center;
}
</style>

</head>

<body>

<div class="hero-banner">
    <div class="hero-title">AgroSustentável Brasil</div>
    <div class="hero-subtitle">Tecnologia e sustentabilidade no campo</div>
</div>

<p class="intro-text">
O agronegócio brasileiro é um dos mais importantes do mundo, com grande impacto econômico e ambiental.
</p>

<h2>1. Importância do Agro</h2>
<p>O setor representa uma parte significativa do PIB e das exportações brasileiras.</p>

<div class="stat-box">
    <div class="stat-value">~25%</div>
    <div>Participação no PIB</div>
</div>

<h2>2. Desafios Ambientais</h2>

<div class="alert-box">
    <strong>Desmatamento:</strong> impacto direto nos biomas e clima.
</div>

<div class="alert-box">
    <strong>Água:</strong> consumo elevado na irrigação.
</div>

<h2>3. Soluções Sustentáveis</h2>

<div class="solution-box">
    <strong>ILPF:</strong> integração lavoura-pecuária-floresta.
</div>

<div class="solution-box">
    <strong>Plantio Direto:</strong> preservação do solo.
</div>

<div class="footer-banner">
    Agro sustentável é o futuro.
</div>

</body>
</html>
`;

// Injeta tudo na página
document.open();
document.write(htmlContent);
document.close();
