class User < ApplicationRecord
  has_many :projects
  has_secure_password

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :username, :email, :password, presence: true
  validates :password, length: { minimum: 4 }
end
