class ApplicationController < ActionController::Base
  before_action :require_auth

  private

  def require_auth
    return if current_user

    redirect_to new_session_path
  end

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(id: cookies.signed[:user_id])
  end
end
