CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid int REFERENCES users(id)
    orderdate ‘now’::text::date,
    total INTEGER VARCHAR(40),
    usercity text,
    useraddress text,
    userstate text,
    userzip text,
    usercountry text
)