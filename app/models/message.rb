class Message < ApplicationRecord
  include Reactivity::Hooks

  belongs_to :user

  private

  def to_reactivity
    {
      id: id,
      username: user.username,
      text: text,
      created_at: created_at
    }
  end
end
