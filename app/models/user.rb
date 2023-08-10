class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, confirmation: true, if: :password_digest_changed?
    

    enum role: { traveller: 0, tour_operator: 1, admin: 2 }

    def admin?
        role == 'admin'
    end
    
    def tour_operator?
        role == 'tour_operator'
    end
    
    def traveller?
        role == 'traveller'
    end
end
