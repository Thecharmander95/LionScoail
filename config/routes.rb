Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
end
