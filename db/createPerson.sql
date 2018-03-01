INSERT INTO person 
    (name, auth_id, email)
VALUES 
($1, $2, $3)
RETURNING *;