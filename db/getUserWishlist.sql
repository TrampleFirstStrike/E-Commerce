SELECT * FROM wishlist w, products p, users u
WHERE auth_id = $1 AND game_id = w.game_id = $2