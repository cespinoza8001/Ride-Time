class User < ApplicationRecord
    has_secure_password 
    validates_presence_of :email
    validates_uniqueness_of :email
    validates_uniqueness_of :username 

    has_many :rentals
    has_many :favorites, through: :rentals
end
