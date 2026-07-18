function onFormSubmit(e) {
  var sheet = SpreadsheetApp.openById("PEGA_AQUI_TU_ID").getActiveSheet();
  var lastRow = sheet.getLastRow();

  var timestamp = sheet.getRange(lastRow, 2).getValue();
  var year = new Date(timestamp).getFullYear();
  var caseNumber = "CD-" + year + "-" + padNumber(lastRow - 1, 3);

  sheet.getRange(lastRow, 1).setValue(caseNumber);

  var emailDenunciante = sheet.getRange(lastRow, 3).getValue();
  var nombreDenunciante = sheet.getRange(lastRow, 4).getValue();

  if (!nombreDenunciante || nombreDenunciante.toString().toUpperCase() === "ANONIMO") {
    nombreDenunciante = "Estimado/a denunciante";
  }

  var asunto = "Caso No. " + caseNumber + " - Confirmacion de recepcion";

  var cuerpo = "";
  cuerpo += "Estimado/a " + nombreDenunciante + ",\n\n";
  cuerpo += "Confirmamos la recepcion de su denuncia formal ante la Comision Disciplinaria.\n\n";
  cuerpo += "Se le ha asignado el siguiente numero de caso:\n\n";
  cuerpo += "==============================\n";
  cuerpo += "   CASO No.: " + caseNumber + "\n";
  cuerpo += "==============================\n\n";
  cuerpo += "Su caso sera revisado por la Comision Disciplinaria. ";
  cuerpo += "El plazo estimado para una primera respuesta es de 8 DIAS HABILES ";
  cuerpo += "a partir de la fecha de este correo.\n\n";
  cuerpo += "Durante el proceso:\n";
  cuerpo += "- Se mantendra la confidencialidad de su identidad (si asi lo solicito).\n";
  cuerpo += "- Podra ser contactado/a para ampliar informacion.\n";
  cuerpo += "- Para cualquier consulta sobre su caso, cite siempre el numero: " + caseNumber + "\n\n";
  cuerpo += "Agradecemos su confianza en este organo disciplinario.\n\n";
  cuerpo += "Atentamente,\n\n";
  cuerpo += "Comision Disciplinaria\n";
  cuerpo += "AJUCI\n";
  cuerpo += "Federacion Costarricense de Ciclismo\n";
  cuerpo += "Correo: comdisc.ajuci@gmail.com\n\n";
  cuerpo += "-------------------------------------\n";
  cuerpo += "NOTA: Este es un correo automatico de confirmacion.\n";
  cuerpo += "Para comunicarse con la comision, responda a este correo\n";
  cuerpo += "citando su numero de caso.\n";
  cuerpo += "-------------------------------------";

  try {
    MailApp.sendEmail({
      to: emailDenunciante,
      subject: asunto,
      body: cuerpo,
      name: "Comision Disciplinaria - AJUCI"
    });

    var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var colCorreoEnviado = headerRow.indexOf("Correo enviado") + 1;

    if (colCorreoEnviado === 0) {
      colCorreoEnviado = sheet.getLastColumn() + 1;
      sheet.getRange(1, colCorreoEnviado).setValue("Correo enviado");
    }

    sheet.getRange(lastRow, colCorreoEnviado).setValue("Enviado - " + new Date().toLocaleString());

  } catch (error) {
    Logger.log("Error al enviar correo: " + error.toString());
  }
}

function padNumber(num, size) {
  var s = num.toString();
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}

function configuracionInicial() {
  var sheet = SpreadsheetApp.openById("PEGA_AQUI_TU_ID").getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  if (headers.indexOf("No. de Caso") === -1) {
    sheet.insertColumnBefore(1);
    sheet.getRange(1, 1).setValue("No. de Caso");
    sheet.getRange(1, 1).setFontWeight("bold");
  }

  headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (headers.indexOf("Estado") === -1) {
    var lastCol = sheet.getLastColumn() + 1;
    sheet.getRange(1, lastCol).setValue("Estado");
    sheet.getRange(1, lastCol).setFontWeight("bold");
  }

  headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (headers.indexOf("Correo enviado") === -1) {
    var lastCol = sheet.getLastColumn() + 1;
    sheet.getRange(1, lastCol).setValue("Correo enviado");
    sheet.getRange(1, lastCol).setFontWeight("bold");
  }

  Logger.log("Configuracion completada.");
}

function testEnvioCorreo() {
  var testEmail = "comdisc.ajuci@gmail.com";
  var caseNumber = "CD-2026-TEST";

  var asunto = "[PRUEBA] Caso No. " + caseNumber + " - Confirmacion de recepcion";

  var cuerpo = "";
  cuerpo += "ESTE ES UN CORREO DE PRUEBA.\n\n";
  cuerpo += "Si recibes este correo, el script esta funcionando correctamente.\n\n";
  cuerpo += "Numero de caso de prueba: " + caseNumber + "\n\n";
  cuerpo += "Puedes eliminar este correo.\n\n";
  cuerpo += "Atentamente,\n\n";
  cuerpo += "Comision Disciplinaria\n";
  cuerpo += "AJUCI\n";
  cuerpo += "Federacion Costarricense de Ciclismo\n";
  cuerpo += "Correo: comdisc.ajuci@gmail.com";

  MailApp.sendEmail({
    to: testEmail,
    subject: asunto,
    body: cuerpo,
    name: "Comision Disciplinaria - AJUCI"
  });

  Logger.log("Correo de prueba enviado a: " + testEmail);
}
