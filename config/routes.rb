Rails.application.routes.draw do
  root 'homes#index'

  resources :announcements
  devise_for :users

  # All the resources
  resources :posts
  resources :abouts
  resources :errors
  resources :relationships, only: [:create, :destroy]
  resources :articles
  resources :badusers
  resources :acindents
  resources :disables

  # All resources with do and end
  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts do
    resources :comments
  end

  resources :rooms do
    resources :room_messages
  end

  resources :conversations, only: [:index, :create, :destroy] do
    resources :messages, only: [:index, :create]
  end

  get :dis , "disables/change"
  get 'admins/index'
  get 'admins/users'
  get 'admins/rooms'
  get 'admins/conversations'

end
