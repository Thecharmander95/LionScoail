Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  resources :users
  resources :posts
  resources :abouts
end
