Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  namespace :api do
    namespace :one do
      namespace :two do
        resources :dogs, only: :index
        resources :cats, only: :index
      end
    end
  end
end
