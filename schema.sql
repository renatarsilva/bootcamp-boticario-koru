-- Tables
CREATE TABLE IF NOT EXISTS clinica(
    id                      SERIAL,
    name                    VARCHAR(100) NOT NULL,
    email                   VARCHAR(300) NOT NULL,
    password                VARCHAR(300) NOT NULL,
    password_recover_hash   VARCHAR(300) NULL DEFAULT NULL,
    disabled_at             TIMESTAMP NULL,
    created_at              TIMESTAMP NOT NULL,
    updated_at              TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT clinica_pk   PRIMARY KEY (id),
    CONSTRAINT clinica_email_unique UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS customers (
    id                  SERIAL,
    clinica_id          INTEGER NOT NULL,
    first_name          VARCHAR(30),
    last_name           VARCHAR(30),
    birthdate           DATE NULL,
    fone_number         VARCHAR(11) NULL,
    email               VARCHAR(100) NOT NULL,
    indication_id       INTEGER NULL DEFAULT NULL,
    indication_count    INTEGER NULL DEFAULT NULL,
    disabled_at         TIMESTAMP NULL,
    created_at          TIMESTAMP NOT NULL,
    updated_at          TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT  customers_pk PRIMARY KEY (id)
    CONSTRAINT  customers_clinica_fk FOREIGN KEY (clinica_id) REFERENCES clinica (id)
);

CREATE TABLE IF NOT EXISTS services (
    id                  SERIAL,
    clinica_id          INTEGER NOT NULL,
    name                VARCHAR(100) NOT NULL,
    value               DECIMAL(5,2) NOT NULL,
    duration_minutes    INTEGER NOT NULL,
    description         TEXT NULL,
    cost                DECIMAL(5,2) NULL,
    disabled_at         TIMESTAMP NULL,
    created_at          TIMESTAMP NOT NULL,
    updated_at          TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT services_pk PRIMARY KEY (id),
    CONSTRAINT services_clinica_fk FOREIGN KEY (clinica_id) REFERENCES clinica (id)
);

CREATE TABLE IF NOT EXISTS agenda_status (
    
)