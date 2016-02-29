Rails.application.routes.draw do
  get :example, controller: :example, action: :show

  resources :sessions, only: [:new, :create] do
    collection do
      get :logout
    end
  end

  root 'example#show'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
end
