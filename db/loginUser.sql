select *
from users
where email = $1 AND password = $2;