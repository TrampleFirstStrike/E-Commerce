CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    userid int REFERENCES users(id),
    orderdate ‘now’::text::date,
    total INTEGER VARCHAR(40),
    usercity text,
    useraddress text,
    userstate text,
    userzip text,
    usercountry text
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text,
    auth_id text,
    email text,
    user_address text
)