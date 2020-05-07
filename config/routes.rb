Rails.application.routes.draw do
  devise_for :users
  root 'sites#home'
  # All get
  get :usersettings, to: "sites#usersettings"
  # All the resources
  resources :posts
  resources :abouts
  resources :errors
  resources :dissaperingposts
  resources :relationships, only: [:create, :destroy]
  resources :articles
  resources :badusers
  resources :acindents
  resources :suggestions
  # All resources with do and end
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :posts do
    resources :comments
  end
  resources :articles do
    resources :feedbacks
  end
  resources :rooms do
    resources :room_messages
  end
end
