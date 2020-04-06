Rails.application.routes.draw do
  root 'sites#home'
  devise_for :users

  resources :posts
  get :about, to: 'sites#about'
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
end
