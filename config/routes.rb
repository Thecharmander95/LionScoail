Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  # All the resources
  resources :posts
  resources :abouts
  resources :errors
  resources :relationships, only: [:create, :destroy]
  resources :badusers
  resources :acindents
  resources :disables
  resources :announcements

  # All resources with do and end
  resources :users do
    member do
      get :following, :followers
    end
  end

  resources :posts do
    resources :comments
  end

  resources :conversations, only: [:index, :create, :destroy, :update] do
    resources :messages, only: [:index, :create]
  end

  get :dis , "disables/change"
  get 'admins/index'
  get 'admins/users'
  get 'admins/conversations'
  get 'admins/posts'

end
