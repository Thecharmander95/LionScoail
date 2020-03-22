Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
  get :usered, to: "sites#usered"
  get :usersettings, to: "sites#usersettings"
  resources :users
  resources :posts do
    resources :comments
  end
end
