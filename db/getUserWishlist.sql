SELECT *
FROM wishlist w inner JOIN products p ON w.game_id = p.id
WHERE users_id = $1