class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :comment, :rating
  has_one :travel_package
end
