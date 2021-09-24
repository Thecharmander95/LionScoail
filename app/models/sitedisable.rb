class Sitedisable < ApplicationRecord
  establish_connection(:users)
end
