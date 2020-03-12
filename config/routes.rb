Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
  get :view, to: "sites#view"
  get :usered, to: "sites#usered"
  resources :users
  resources :posts do
    resources :comments
  end
end
