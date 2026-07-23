# RESUMEN DE TRABAJO REALIZADO Y PENDIENTES
# COMISION DISCIPLINARIA - AJUCI
# Fecha: Julio 2026

---

## RESUMEN DE LO REALIZADO

### 1. Correo electronico oficial
- Creado: comdisc.ajuci@gmail.com
- Sub-correos configurados:
  - comdisc.ajuci+denuncia@gmail.com (denuncias)
  - comdisc.ajuci+juzgamiento@gmail.com (evaluacion del juzgamiento, para organizadores)
  - comdisc.ajuci+organizador@gmail.com (evaluacion del organizador, para personal de juzgamiento)
  - comdisc.ajuci+equipo@gmail.com (evaluacion del equipo, para comisario principal)
- Respuesta automatica de Gmail configurada
- Plantillas de correo creadas para cada sub-correo
- Filtros configurados para responder con plantilla segun sub-correo

### 2. Formulario de denuncia
- Creado en Google Forms
- Vinculado a Google Sheets
- Columna de numero de caso con formato CD-[ANO]-[CORRELATIVO]
- Apps Script configurado para:
  - Asignacion automatica de numero de caso
  - Envio automatico de correo de confirmacion al denunciante
  - Firma: Comision Disciplinaria / AJUCI / Federacion Costarricense de Ciclismo
- Trigger (activador) creado: se ejecuta al enviar formulario

### 3. Formularios de evaluacion (3 creados)
- Evaluacion del personal de juzgamiento (para organizadores) - con script de acuse de recibo
- Evaluacion del organizador (para personal de juzgamiento) - con script de acuse de recibo
- Evaluacion del equipo por el comisario principal (estructura disenada, con secciones repetidas y logica condicional)

### 4. Protocolo de Atencion de Denuncias
- Redactado y aprobado internamente
- Plazo total: 8 dias habiles
- 5 etapas: Recepcion → Formalizacion → Instruccion → Deliberacion → Envio a JD
- Incluye derecho a descargo en denuncias anonimas (3 dias habiles)
- Incluye consideraciones: confidencialidad, conflicto de interes, denuncias anonimas, casos graves, extension de plazo
- Disponible en PDF y Word en GitHub

### 5. Tabla unificada de faltas del cuerpo de juzgamiento
- Combinacion de 3 fuentes:
  - Reglamento del Regimen Disciplinario de FECOCI (2014)
  - Protocolo de cronometristas, jueces y comisarios de FECOCI (2024)
  - Formulario de denuncia de la Comision
- 10 faltas leves, 15 faltas graves, 13 faltas muy graves
- Con sancion correspondiente segun reglamento
- Identificadas 3 faltas sin tipificacion en reglamentos (parcialidad, conflicto de interes, acoso)

### 6. Propuesta de Reglamento Disciplinario
- Redactada con 6 capitulos:
  - Disposiciones generales
  - Clasificacion de faltas
  - Sanciones
  - Procedimiento disciplinario
  - Evaluacion del desempeno
  - Disposiciones finales
- Basada unicamente en datos reales de FECOCI y UCI

### 7. Plan de Trabajo
- 6 lineas de accion:
  1. Puesta en marcha de la Comision
  2. Atencion de denuncias
  3. Sistema de evaluacion (4 formularios)
  4. Propuestas normativas
  5. Coordinacion con Comision de Capacitacion
  6. Auditoria de nombramientos
- Cronograma en 2 fases (instalacion + operacion regular)
- Indicadores de gestion (10 indicadores)
- Informe trimestral a JD (10 puntos)
- Riesgos y mitigacion
- Disponible en Word en GitHub

### 8. Sistema de auditoria de nombramientos (disenado)
- Formulario para registrar nombramientos de cada evento
- Estructura del Sheets de auditoria
- Indicadores: concentracion, frecuencia por persona, distribucion por rol
- Fase 2 pendiente: cruce con disponibilidad (requiere acceso)

### 9. Repositorio GitHub
- Repositorio: Nancyms1012/AJUCI
- Rama: documentos-comision
- Archivos disponibles:
  - Protocolo-Atencion-Denuncias-AJUCI.pdf
  - Protocolo-Atencion-Denuncias-AJUCI.docx
  - Protocolo-Atencion-Denuncias-AJUCI.md
  - Plan-de-Trabajo-Comision-Disciplinaria-AJUCI.md
  - Plan-de-Trabajo-Comision-Disciplinaria-AJUCI.docx
  - Tabla-Faltas-Cuerpo-Juzgamiento-AJUCI.md
  - Propuesta-Reglamento-Disciplinario-AJUCI.md
  - Codigo.gs

---

## PENDIENTES

### Alta prioridad (antes de iniciar operaciones)

1. **Corregir tildes en documentos Word** - Los archivos Word no tienen tildes. Abrir en Google Docs, corregir y exportar como PDF final.

2. **Formulario de evaluacion del comisario principal a su equipo** - La estructura esta disenada pero falta crearlo en Google Forms con las secciones repetidas y logica condicional ("Tiene otro miembro por evaluar? Si/No").

3. **Formulario de registro de nombramientos** - Crear en Google Forms para que la Comision registre los nombramientos de cada evento. Campos: fecha, nombre del evento, modalidad, nombre del miembro, rol asignado.

4. **Consolidar datos historicos de nombramientos** - Revisar mensajes de WhatsApp del ultimo ano y registrar los nombramientos en el Sheets.

5. **Configurar filtros de Gmail** - Verificar que los filtros con plantilla esten funcionando correctamente para cada sub-correo.

6. **Presentar Plan de Trabajo a Junta Directiva** - Llevar el plan de trabajo y protocolo a la JD de AJUCI para su aprobacion formal.

7. **Comunicar a la comunidad** - Una vez aprobado por la JD, informar a miembros de AJUCI, organizadores y clubes sobre los canales de evaluacion y denuncia.

### Media prioridad (primeros meses de operacion)

8. **Script de correo para evaluacion del equipo** - Crear el Apps Script que envie acuse de recibo cuando el comisario principal llene el formulario de evaluacion de su equipo.

9. **Solicitar acceso al registro de disponibilidad** - Enviar solicitud formal a la JD para que la Comision de Nombramientos comparta el Sheets de disponibilidad mensual.

10. **Primer informe trimestral** - Elaborar y presentar a la JD con los 10 puntos establecidos.

### Baja prioridad (mejora continua)

11. **Proponer reforma al Reglamento Disciplinario** - Incluir las 3 faltas no tipificadas: parcialidad/favoritismo, conflicto de interes no declarado, acoso.

12. **Mejorar correo de denuncias** - Una vez que tengan volumen, considerar mejorar el texto del correo automatico con mas detalle y formato.

13. **Cruce de disponibilidad vs. nombramientos (Fase 2)** - Cuando se obtenga acceso al registro de disponibilidad, integrar los datos y generar informe de equidad.

---

## DOCUMENTOS DE REFERENCIA UTILIZADOS

1. Protocolo de arbitros, cronometristas, jueces y comisarios de ciclismo - FECOCI (Sesion Extraordinaria No. 75, 18 de junio de 2024)
2. Reglamento del Regimen Disciplinario de la FECOCI (Asamblea General Extraordinaria, 11 de setiembre de 2014)
3. UCI Reglamento Deportivo, Titulo XII: Disciplina y Procedimientos
4. UCI Codigo de Etica
5. Decisiones publicadas por la Comision Disciplinaria y la Comision de Etica de la UCI (uci.org)

---

## DATOS CLAVE

- Correo: comdisc.ajuci@gmail.com
- Formato de caso: CD-[ANO]-[CORRELATIVO] (ejemplo: CD-2026-001)
- Plazo de resolucion: 8 dias habiles
- Miembros de la comision: 3
- Reuniones: Semanales
- Quorum: 2 de 3
- GitHub: https://github.com/Nancyms1012/AJUCI/tree/documentos-comision

---

*Comision Disciplinaria*
*AJUCI*
*Federacion Costarricense de Ciclismo*
