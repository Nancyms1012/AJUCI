# DOCUMENTO DE CONTEXTO Y HANDOFF
# COMISION DISCIPLINARIA - AJUCI
# Federacion Costarricense de Ciclismo (FECOCI)
# Fecha: Julio 2026

---

## CONTEXTO GENERAL

La Asociacion de Juzgamiento de Ciclismo (AJUCI) es una asociacion afiliada a la Federacion Costarricense de Ciclismo (FECOCI). AJUCI reune a los cronometristas, jueces y comisarios debidamente acreditados en Costa Rica.

Se creo una Comision Disciplinaria dentro de AJUCI para atender denuncias internas contra el cuerpo de juzgamiento. Esta comision es nueva y se esta poniendo en marcha.

---

## DATOS DE LA COMISION

- Nombre: Comision Disciplinaria de AJUCI
- Miembros: 3 integrantes
- Correo oficial: comdisc.ajuci@gmail.com
- Reuniones: Semanales
- Presupuesto: Voluntario (sin presupuesto asignado)
- Quorum: 2 de 3 miembros para sesionar
- Decisiones: Por mayoria

---

## SUB-CORREOS CONFIGURADOS

| Sub-correo | Proposito | Quien escribe |
|-----------|-----------|--------------|
| comdisc.ajuci+denuncia@gmail.com | Denuncias | Cualquier persona |
| comdisc.ajuci+juzgamiento@gmail.com | Evaluacion del juzgamiento | Organizadores de eventos |
| comdisc.ajuci+organizador@gmail.com | Evaluacion del organizador | Personal de juzgamiento |
| comdisc.ajuci+equipo@gmail.com | Evaluacion del equipo | Comisario principal |

Cada sub-correo tiene un filtro en Gmail que responde automaticamente con una plantilla que contiene el enlace al formulario correspondiente. Los sub-correos no se "crean", Gmail los reconoce automaticamente al agregar +palabra antes del @.

---

## SISTEMA DE DENUNCIAS

### Flujo:
1. Persona escribe a comdisc.ajuci+denuncia@gmail.com
2. Gmail responde automaticamente con enlace al formulario de denuncia
3. Denunciante llena el formulario (Google Forms)
4. Apps Script asigna numero de caso (formato: CD-[ANO]-[CORRELATIVO], ej: CD-2026-001)
5. Se envia correo automatico al denunciante con su numero de caso y plazo de 8 dias habiles
6. Se registra en Google Sheets

### Apps Script - Datos tecnicos:
- El script usa `SpreadsheetApp.openById(id)` para conectar con el Sheets (porque se creo desde script.google.com, no desde el Sheets directamente)
- Usa `String.fromCharCode(10)` para saltos de linea (en vez de "\n" que no funcionaba al copiar)
- Usa `new Date().getFullYear()` para el ano del numero de caso
- La fecha se formatea con: `new Date(fechaRaw)` → `.getDate()` / `.getMonth()+1` / `.getFullYear()`
- Firma del correo: Comision Disciplinaria / AJUCI / Federacion Costarricense de Ciclismo
- Trigger: "Al enviar un formulario" desde hoja de calculo

### Problemas resueltos:
- Comillas curvas al copiar codigo del chat → solucion: escribir manualmente o pegar en Bloc de Notas primero
- "\n" no generaba saltos de linea → solucion: usar String.fromCharCode(10)
- Fecha aparecia en formato tecnico → solucion: new Date(fechaRaw) y formatear manualmente
- "newDate" junto → debe ser "new Date" separado
- "openById" sin parentesis → debe ser openById(id)
- "CD-NaN" → el timestamp no se leia como fecha, usar new Date().getFullYear() directamente

---

## PROTOCOLO DE ATENCION DE DENUNCIAS

### Plazo total: 8 dias habiles

| Etapa | Actividad | Dia |
|-------|-----------|-----|
| 1 | Recepcion + envio de formulario | Dia 1 |
| 2 | Formalizacion + numero de caso (automatico) | Dia 1-2 |
| 3 | Instruccion del expediente (investigacion) | Dia 2-5 |
| 4 | Deliberacion y resolucion | Dia 6-7 |
| 5 | Envio a Junta Directiva de AJUCI | Dia 8 |

### Consideraciones clave:
- Todo el proceso es confidencial
- Conflicto de interes: miembro de la comision debe inhibirse si tiene relacion con denunciante/denunciado
- Se aceptan denuncias anonimas
- Derecho a descargo en denuncias anonimas: 3 dias habiles para que el denunciado responda (dentro de los 8 dias del proceso)
- Extension de plazo: maximo 5 dias habiles adicionales por excepcionalidad
- Casos de extrema gravedad: suspension preventiva antes de completar proceso
- La JD de AJUCI es quien comunica la decision al involucrado y ejecuta la sancion

---

## FORMULARIOS CREADOS

### 1. Formulario de Denuncia
- Campos: denunciante, denunciado, fecha/lugar/evento, descripcion, pruebas, anonimato
- Vinculado a Sheets con numero de caso automatico
- Apps Script envia correo de confirmacion

### 2. Evaluacion del Personal de Juzgamiento (para organizadores)
- Datos del evaluador y evento
- Escala 1-5 en: puntualidad, presentacion, conocimiento reglamento, aplicacion, comunicacion, trato, resolucion conflictos, coordinacion, imparcialidad, disponibilidad
- Evaluacion por rol (comisarios, jueces llegada, jueces salida, cronometristas)
- Observaciones, incidentes, calificacion final
- Apps Script envia acuse de recibo

### 3. Evaluacion del Organizador (para personal de juzgamiento)
- Datos del evaluador y evento
- Escala 1-5 en: comunicacion previa, condiciones recorrido, zona meta/salida, espacio trabajo, equipo/materiales, alimentacion, transporte, horario, coordinacion, trato, respeto decisiones, imprevistos, control participantes, seguridad, publico
- Observaciones, incidentes, calificacion final
- Apps Script envia acuse de recibo

### 4. Evaluacion del Equipo (comisario principal evalua a cada miembro)
- Estructura con secciones repetidas (hasta 5 miembros)
- Logica condicional: "Tiene otro miembro por evaluar? Si/No"
- Escala 1-5 en: puntualidad, presentacion, conocimiento reglamento, aplicacion, cumplimiento funciones, actitud, comunicacion equipo, comunicacion organizador, resolucion imprevistos, permanencia, imparcialidad, colaboracion
- Evaluacion individual por persona
- Script de acuse de recibo configurado

---

## TABLA DE FALTAS DEL CUERPO DE JUZGAMIENTO

### Fuentes:
1. Reglamento del Regimen Disciplinario de FECOCI (2014) - Articulos 17 2o, 18 2o, 20 2o
2. Protocolo de cronometristas, jueces y comisarios - FECOCI (2024) - Articulos 7, 8, 10, 16, 18
3. Formulario de denuncia - Comision Disciplinaria AJUCI

### Resumen:
- 10 faltas leves → Sancion: apercibimiento hasta suspension 1 mes. Prescriben al mes.
- 15 faltas graves → Sancion: suspension 1 mes y 1 dia a 1 ano. Prescriben al ano.
- 13 faltas muy graves → Sancion: inhabilitacion a perpetuidad o suspension 1-4 anos. Prescriben a 3 anos.

### Faltas no tipificadas en reglamentos (incluidas en formulario):
- Parcialidad o favoritismo en decisiones (clasificada como grave propuesta)
- Conflicto de interes no declarado (clasificada como grave propuesta)
- Acoso (clasificada como muy grave propuesta)

---

## PLAN DE TRABAJO

### 6 Lineas de Accion:
1. Puesta en marcha de la Comision
2. Atencion de denuncias
3. Sistema de evaluacion (4 formularios)
4. Propuestas normativas
5. Coordinacion con Comision de Capacitacion (plan de mejora para miembros mal evaluados)
6. Auditoria de nombramientos (verificar equidad en designaciones)

### Auditoria de nombramientos:
- Fase 1 (actual): Registrar solo los nombramientos que notifican por WhatsApp
- Fase 2 (pendiente): Cruzar con registro de disponibilidad (requiere solicitar acceso a la Comision de Nombramientos)
- Indicadores: concentracion por persona, promedio eventos/mes, distribucion por rol
- Meta: que ningun miembro supere el 25% del total de nombramientos
- Datos historicos del ultimo ano ya consolidados

### Cronograma:
- Fase 1 (Mes 1-2): Instalacion y puesta en marcha (8 semanas)
- Fase 2 (Mes 3+): Operacion regular

### Informes:
- Frecuencia: Trimestral a la JD de AJUCI
- Contenido: denuncias, evaluaciones, nombramientos, propuestas, capacitacion

---

## ESTRUCTURA ORGANIZATIVA (segun documentos)

- FECOCI: Federacion Costarricense de Ciclismo (organo rector)
- AJUCI: Asociacion de Juzgamiento de Ciclismo (asociacion afiliada a FECOCI)
- Comite de Nombramientos: Designa al personal de juzgamiento para cada evento (un miembro JD FECOCI + Presidente AJUCI + representante asociaciones)
- Comision Disciplinaria: Atiende denuncias contra el cuerpo de juzgamiento (3 miembros, nombrados por FECOCI)
- Comision de Capacitacion: Se encarga de la formacion del cuerpo de juzgamiento

### Flujo de nombramientos (actual):
1. Comision de Nombramientos envia calendario mensual por WhatsApp
2. Miembros de AJUCI llenan formulario de disponibilidad (Google Forms de la Comision de Nombramientos)
3. Comision de Nombramientos hace los nombramientos
4. Notifican nombramientos por WhatsApp

---

## DOCUMENTOS NORMATIVOS VIGENTES

1. **Protocolo de cronometristas, jueces y comisarios - FECOCI (2024)**
   - Aprobado: Sesion Extraordinaria No. 75, 18 junio 2024
   - Inscrito: Registro Nacional, Tomo 2024, Asiento 474320
   - Contenido: alcance, Comite de Nombramientos, deberes del cuerpo, reclamaciones, renovacion credencial, sanciones (solo para eventos no avalados)

2. **Reglamento del Regimen Disciplinario - FECOCI (2014)**
   - Aprobado: Asamblea General Extraordinaria, 11 setiembre 2014
   - Contenido: faltas (leves/graves/muy graves), sanciones, organos disciplinarios, procedimiento, recursos
   - Articulo 27: El Comite Disciplinario esta compuesto por un miembro externo a AJUCI (presidente) + 3 comisarios, nombrados por FECOCI. Quorum: 3 miembros.

---

## REPOSITORIO GITHUB

- URL: https://github.com/Nancyms1012/AJUCI/tree/documentos-comision
- Usuario: Nancyms1012
- Repositorio: AJUCI
- Rama: documentos-comision

### Archivos:
- Protocolo-Atencion-Denuncias-AJUCI.pdf
- Protocolo-Atencion-Denuncias-AJUCI.docx
- Protocolo-Atencion-Denuncias-AJUCI.md
- Plan-de-Trabajo-Comision-Disciplinaria-AJUCI.md
- Plan-de-Trabajo-Comision-Disciplinaria-AJUCI.docx
- Tabla-Faltas-Cuerpo-Juzgamiento-AJUCI.md
- Propuesta-Reglamento-Disciplinario-AJUCI.md
- Codigo.gs
- Resumen-y-Pendientes-Comision-AJUCI.md
- Handoff-Comision-Disciplinaria-AJUCI.md (este archivo)

---

## ESTADO ACTUAL DE PENDIENTES (Julio 2026)

### Completados:
- [x] Correo oficial configurado
- [x] Formulario de denuncia + Apps Script
- [x] Formularios de evaluacion (3) + scripts
- [x] Protocolo de Atencion de Denuncias
- [x] Tabla de faltas consolidada (actualizada con incompatibilidades CTA RFEC)
- [x] Propuesta de Reglamento Disciplinario (actualizada con las 38 faltas completas)
- [x] Plan de Trabajo (6 lineas, sub-correos, meta 50%)
- [x] Tildes corregidas en Word
- [x] Datos historicos de nombramientos consolidados
- [x] Filtros de Gmail verificados
- [x] Script acuse de recibo evaluacion equipo
- [x] Presentacion ejecutiva HTML (11 slides)

### Pendientes:
- [ ] Crear formulario evaluacion comisario principal en Google Forms (con logica condicional)
- [ ] Crear formulario registro de nombramientos en Google Forms
- [ ] Presentar Plan de Trabajo + Protocolo a Junta Directiva AJUCI
- [ ] Comunicar a la comunidad (organizadores, miembros, clubes)
- [ ] Solicitar acceso al registro de disponibilidad
- [ ] Primer informe trimestral
- [ ] Proponer reforma Reglamento Disciplinario (agregar faltas no tipificadas: parcialidad, acoso)
- [ ] Cruce disponibilidad vs. nombramientos (Fase 2)

---

## NOTAS TECNICAS IMPORTANTES

### Google Apps Script:
- No usar caracteres especiales en el codigo (tildes, n con tilde, simbolos unicode) porque la libreria no los soporta bien
- Los "\n" a veces no funcionan al copiar desde chat; usar String.fromCharCode(10) como alternativa
- Al copiar codigo del chat, las comillas se convierten en curvas. Solucion: pegar en Bloc de Notas primero o escribir manualmente las lineas con comillas
- Para abrir Apps Script: Sheets → Extensiones → Apps Script. Si no funciona, ir a script.google.com y vincular con openById(id)
- El ID del Sheets se saca de la URL: https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit

### Google Forms:
- Logica condicional solo funciona entre SECCIONES, no entre preguntas individuales
- Solo funciona con preguntas tipo "Opcion multiple" (no con casillas ni desplegable)
- Secciones se crean con el icono de dos rectangulos en la barra lateral derecha
- "Ir a la seccion en funcion de la respuesta": 3 puntos de la pregunta → seleccionar opcion

### Gmail sub-correos:
- No se crean, ya existen automaticamente
- Formato: correo+palabra@gmail.com
- Todos llegan al mismo buzon
- Se diferencian con filtros (Ajustes → Filtros → campo "Para:")

---

*Documento de handoff generado para respaldo y continuidad del trabajo*
*Comision Disciplinaria - AJUCI*
*Federacion Costarricense de Ciclismo*
