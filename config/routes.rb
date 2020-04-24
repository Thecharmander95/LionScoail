Rails.application.routes.draw do
  resources :rooms do
    resources :room_messages
  end
  resources :posts
  resources :abouts
  resources :errors
  resources :dissaperingposts
  devise_for :users
  root 'sites#home'
  resources :articles
  get :usersettings, to: "sites#usersettings"
  resources :relationships, only: [:create, :destroy]
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
end
