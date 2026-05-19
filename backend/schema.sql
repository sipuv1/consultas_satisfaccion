
CREATE TABLE respuestas (
    id BIGSERIAL PRIMARY KEY,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    calificacion INTEGER NOT NULL,
    tiempo_atencion VARCHAR(20),
    amabilidad VARCHAR(20),
    recomendaria BOOLEAN,
    comentario TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
