class SessionsController < ApplicationController
  skip_before_action :require_auth

  def new

  end

  def create
    username = params[:session][:username]

    user = User.create!(username: username)

    cookies.signed[:user_id] = user.id

    redirect_to root_path
  end

  def logout
    cookies.signed[:user_id] = nil

    redirect_to new_session_path
  end
end
