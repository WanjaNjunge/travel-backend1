class Destination < ApplicationRecord
    has_many :travel_packages, dependent: :destroy

    validates :location, presence: true
    validates :country, presence: true
    validates :image_url, presence: true
end
